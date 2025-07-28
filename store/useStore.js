import { create } from "zustand"
import { persist } from "zustand/middleware"

const useStore = create(
  persist(
    (set, get) => ({
      // User state
      user: null,
      isAuthenticated: false,
      pendingUser: null,

      // Cart state
      cartItems: [],
      cartTotal: 0,
      isLoading: false,

      // Actions
      setUser: (userData) =>
        set({
          user: userData,
          isAuthenticated: true,
        }),

      setPendingUser: (userData) =>
        set({
          pendingUser: userData,
        }),

      clearPendingUser: () =>
        set({
          pendingUser: null,
        }),

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
          cartItems: [],
          cartTotal: 0,
        }),

      // Cart actions
      addToCart: (product) => {
        const { cartItems } = get()
        const existingItem = cartItems.find((item) => item.id === product.id)

        if (existingItem) {
          set({
            cartItems: cartItems.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
            ),
          })
        } else {
          set({
            cartItems: [...cartItems, { ...product, quantity: 1 }],
          })
        }

        // Recalculate total
        get().calculateTotal()
      },

      removeFromCart: (productId) => {
        const { cartItems } = get()
        set({
          cartItems: cartItems.filter((item) => item.id !== productId),
        })
        get().calculateTotal()
      },

      updateQuantity: (productId, quantity) => {
        const { cartItems } = get()
        if (quantity <= 0) {
          get().removeFromCart(productId)
          return
        }

        set({
          cartItems: cartItems.map((item) => (item.id === productId ? { ...item, quantity } : item)),
        })
        get().calculateTotal()
      },

      calculateTotal: () => {
        const { cartItems } = get()
        const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
        const tax = subtotal * 0.08 // 8% tax
        const total = subtotal + tax

        set({
          cartTotal: total,
        })
      },

      clearCart: () =>
        set({
          cartItems: [],
          cartTotal: 0,
        }),

      setLoading: (loading) => set({ isLoading: loading }),

      // Initialize cart with default product
      initializeCart: () => {
        const { cartItems } = get()
        if (cartItems.length === 0) {
          const defaultProduct = {
            id: 1,
            name: "Premium Smartphone",
            description: "Latest technology with stunning design",
            price: 899.99,
            image: "📱",
            inStock: true,
          }
          get().addToCart(defaultProduct)
        }
      },
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        pendingUser: state.pendingUser,
        cartItems: state.cartItems,
        cartTotal: state.cartTotal,
      }),
    },
  ),
)

export default useStore

