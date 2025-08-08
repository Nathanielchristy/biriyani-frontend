'use client'
import { useAuthStore } from '@/lib/auth-store'
import { useRouter } from 'next/router'
import { useCartStore } from "../lib/cart-store";



export default function LogoutButton() {
  const signOut = useAuthStore((state) => state.signOut)
  const clearCart = useCartStore((state) => state.clearCart);
  const router = useRouter()

  const handleLogout = () => {
    signOut();
    clearCart(); 
    router.push('/') // Or home page
  }

  return (
    <button onClick={handleLogout} className="mt-2 sign_button text-white px-4 py-2 rounded">
      LOGOUT
    </button>
  )
}

