


import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useAuthStore = create(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      user: null,
      showAuthModal: false,
      authMode: "signin",
      cartItem: null,
      redirectToCheckout: false,
      hasHydrated: false,

      setShowAuthModal: (val) => set({ showAuthModal: val }),
      setAuthMode: (mode) => set({ authMode: mode }),
      setCartItem: (item) => set({ cartItem: item }),
      setRedirectToCheckout: (val) => set({ redirectToCheckout: val }),
      setHasHydrated: () => set({ hasHydrated: true }),

      signIn: async (email, password) => {
        try {
          const res = await fetch("https://biriyanidev.onrender.com/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          })
          const data = await res.json()
          console.log(data)

          if (!res.ok) {
            console.error("Login failed response:", data)
            throw new Error(data.message || "Login failed")
          }

          set((state) => ({
            isAuthenticated: true,
            user: data.user,
            showAuthModal: false,
            redirectToCheckout: true,
          }))
        } catch (err) {
          console.error("Login error:", err.message)
          throw err
        }
      },

      signUp: async (name, email, password) => {
        try {
          const res = await fetch("https://biriyanidev.onrender.com/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
          })
          const data = await res.json()
          console.log(data)

          if (!res.ok) {
            console.error("Signup failed response:", data)
            throw new Error(data.message || "Signup failed")
          }

          localStorage.setItem("token", data.token)
          // set({
          //   isAuthenticated: true,
          //   user: data.user,
          //   showAuthModal: false,
          //   redirectToCheckout: true,
          // })
          set((state) => ({
            isAuthenticated: true,
            user: data.user,
            showAuthModal: false,
            redirectToCheckout: true,
          }))
        } catch (err) {
          console.error("Signup error:", err.message)
          throw err
        }
      },

      signOut: () => {
        set({
          isAuthenticated: false,
          user: null,
          cartItem: null,
          redirectToCheckout: false,
        })
      },
    })),
  {
    name: "auth-store",
  }
)

