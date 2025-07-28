// import { create } from "zustand"

// export const useAuthStore = create((set, get) => ({
//   isAuthenticated: false,
//   showAuthModal: false,
//   authMode: "signin",
//   user: null,
//   cartItem: null,
//   redirectToCheckout: false,

//   setShowAuthModal: (show) => set({ showAuthModal: show }),
//   setAuthMode: (mode) => set({ authMode: mode }),
//   setCartItem: (item) => set({ cartItem: item }),
//   setRedirectToCheckout: (redirect) => set({ redirectToCheckout: redirect }),

//   signIn: (email, password) => {
//     // Simulate authentication
//     set({
//       isAuthenticated: true,
//       user: { email, name: email.split("@")[0] },
//       showAuthModal: false,
//     })
//   },

//   signUp: (name, email, password) => {
//     // Simulate registration
//     set({
//       isAuthenticated: true,
//       user: { email, name },
//       showAuthModal: false,
//     })
//   },

//   signOut: () =>
//     set({
//       isAuthenticated: false,
//       user: null,
//       cartItem: null,
//       redirectToCheckout: false,
//     }),

//   addToCart: (item) => {
//     const { isAuthenticated } = get()
//     if (!isAuthenticated) {
//       set({
//         cartItem: item,
//         redirectToCheckout: true,
//         authMode: "signin",
//         showAuthModal: true,
//       })
//     } else {
//       set({ cartItem: item, redirectToCheckout: true })
//     }
//   },
// }))



// import { create } from "zustand"

// export const useAuthStore = create((set, get) => ({
//   isAuthenticated: false,
//   user: null,
//   showAuthModal: false,
//   authMode: "signin",
//   cartItem: null,
//   redirectToCheckout: false,

//   setShowAuthModal: (val) => set({ showAuthModal: val }),
//   setAuthMode: (mode) => set({ authMode: mode }),
//   setCartItem: (item) => set({ cartItem: item }),
//   setRedirectToCheckout: (val) => set({ redirectToCheckout: val }),

//   signIn: async (email, password) => {
//     try {
//       const res = await fetch("https://biriyanidev.onrender.com/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       })
//       if (!res.ok) throw new Error("Login failed")

//       const data = await res.json()

//       set({
//         isAuthenticated: true,
//         user: data.user, // or adjust based on your backend response
//         showAuthModal: false,
//       })
//     } catch (err) {
//       console.error("Login error:", err.message)
//     }
//   },

//   signUp: async (name, email, password) => {
//     try {
//       const res = await fetch("https://biriyanidev.onrender.com/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password }),
//       })
//       if (!res.ok) throw new Error("Signup failed")

//       const data = await res.json()

//       set({
//         isAuthenticated: true,
//         user: data.user,
//         showAuthModal: false,
//       })
//     } catch (err) {
//       console.error("Signup error:", err.message)
//     }
//   },

//   signOut: () => {
//     set({
//       isAuthenticated: false,
//       user: null,
//       cartItem: null,
//       redirectToCheckout: false,
//     })
//   },
// }))


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

