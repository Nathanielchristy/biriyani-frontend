'use client'
import { useAuthStore } from '@/lib/auth-store'
import { useRouter } from 'next/router'

export default function LogoutButton() {
  const signOut = useAuthStore((state) => state.signOut)
  const router = useRouter()

  const handleLogout = () => {
    signOut()
    router.push('/signin') // Or home page
  }

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
      Logout
    </button>
  )
}

