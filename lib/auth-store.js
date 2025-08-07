import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useAuthStore = create(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      user: null,
      token: null,
      showAuthModal: false,
      authMode: "signin",
      redirectToCheckout: false,

      // UI state
      setShowAuthModal: (show) => set({ showAuthModal: show }),
      setAuthMode: (mode) => set({ authMode: mode }),
      setRedirectToCheckout: (val) => set({ redirectToCheckout: val }),

      // Set user & token on login/signup
      setUser: (user, token) =>
        set({
          isAuthenticated: true,
          user,
          token,
          showAuthModal: false,
          redirectToCheckout: false,
        }),

      // Sign In
      signIn: async (email, password) => {
        try {
          const res = await fetch("https://biriyanidev.onrender.com/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          })
          const data = await res.json()
          if (!res.ok) {
            throw new Error(data.message || "Login failed")
          }
          set((state) => ({
            isAuthenticated: true,
            // user: data.user,
            name:data.name,
            email:data.email,
            token: data.token || null,
            showAuthModal: false,
            redirectToCheckout: true,
          }))
        } catch (error) {
          throw error
        }
      },

      // Sign Up
      signUp: async (name, email, password) => {
        try {
          const res = await fetch("https://biriyanidev.onrender.com/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
          })
          const data = await res.json()
          if (!res.ok) {
            throw new Error(data.message || "Signup failed")
          }
          set((state) => ({
            isAuthenticated: true,
            user: data.user,
            token: data.token || null,
            showAuthModal: false,
            redirectToCheckout: true,
          }))
        } catch (error) {
          throw error
        }
      },

      // Sign Out
      signOut: () => {
        set({
          isAuthenticated: false,
          user: null,
          token: null,
          redirectToCheckout: false,
          showAuthModal: false,
        })
      },
    }),
    {
      name: "auth-store",
      getStorage: () => localStorage,
    }
  )
)
