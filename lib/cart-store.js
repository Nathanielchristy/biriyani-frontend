import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      addToCart: (item) => {
        const existingItem = get().cartItems.find((i) => i._id === item._id);
        if (existingItem) return; // prevent duplicate
        set((state) => ({
          cartItems: [...state.cartItems, item],
        }));
      },
      removeFromCart: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item._id !== id),
        })),
      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "cart-store",
      getStorage: () => localStorage,
    }
  )
);
