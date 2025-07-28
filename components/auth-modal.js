// "use client"

// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import { X, Eye, EyeOff } from "lucide-react"
// import {Button} from "./ui/button"
// import { Input } from "./ui/input"
// import { Label } from "./ui/label"
// import {useAuthStore} from '../lib/auto-store'
// import { create } from "zustand"


// export default function AuthModal() {
//   const router = useRouter()
//   const {
//     showAuthModal,
//     authMode,
//     redirectToCheckout,
//     setShowAuthModal,
//     setAuthMode,
//     signIn,
//     signUp,
//     setRedirectToCheckout,
//   } = useAuthStore()

//   const [showPassword, setShowPassword] = useState(false)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   })

 
//   useEffect(() => {
//     if (!showAuthModal && redirectToCheckout) {
//       setRedirectToCheckout(false)
//       router.push("/checkout")
//     }
//   }, [showAuthModal, redirectToCheckout, router, setRedirectToCheckout])

//   if (!showAuthModal) return null

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (authMode === "signin") {
//       signIn(formData.email, formData.password)
//     } else {
//       signUp(formData.name, formData.email, formData.password)
//     }
//   }

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }))
//   }

//   const handleClose = () => {
//     setShowAuthModal(false)
//     setRedirectToCheckout(false)
//   }

//   return (
//       <div className="fixed top-[130px] left-0 right-0 bottom-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center ">
//       <div className="relative mt-[90px] w-[800px] h-[500px] bg-black rounded-2xl border border-gray-800 overflow-hidden">
//         <button
//           onClick={handleClose}
//           className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
//         >
//           <X className="w-6 h-6" />
//         </button>

//         <div className="flex h-full">
         
//           <div className="w-[400px] relative ">
          
//             <div className="absolute top-8 left-8">
//               <div className="text-white text-2xl font-bold">
//                 <span className="text-orange-500"></span>
//               </div>
//             </div>

//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="relative">
//                 <img src="images/resource/offer-image-2.jpg" alt="Delicious food" className="w-60 h-40 object-contain" />
//               </div>
//             </div>

//             {redirectToCheckout && (
//               <div className="absolute bottom-8 left-8 right-8">
//                 <div>
//                   <p className="text-white text-[20px]">🛒 Sign in to continue with your order and proceed to checkout</p>
//                 </div>
//               </div>
//             )}
//           </div>

         
//           <div className="w-96 p-8 flex flex-col justify-center">
//             <div className="space-y-6">
//               <div>
//                 <h3 className="text-2xl font-bold text-white mb-2">{authMode === "signin" ? "Login" : "Sign Up"}</h3>
//                 {redirectToCheckout && <p className="text-gray-400 text-sm ">Sign in to complete your order</p>}
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 {authMode === "signup" && (
//                   <div className="space-y-2">
//                     <Label htmlFor="name" className="text-gray-300 text-sm ">
//                       Full Name
//                     </Label>
//                     <Input
//                       id="name"
//                       type="text"
//                       placeholder="Enter your full name"
//                       value={formData.name}
//                       onChange={(e) => handleInputChange("name", e.target.value)}
//                       className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-orange-500 "
//                       required
//                     />
//                   </div>
//                 )}

//                 <div className="space-y-2">
//                   <Label htmlFor="email" className="text-gray-300 text-sm">
//                     Email
//                   </Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="username@gmail.com"
//                     value={formData.email}
//                     onChange={(e) => handleInputChange("email", e.target.value)}
//                     className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-orange-500"
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="password" className="text-gray-300 text-sm">
//                     Password
//                   </Label>
//                   <div className="relative">
//                     <Input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       placeholder="Password"
//                       value={formData.password}
//                       onChange={(e) => handleInputChange("password", e.target.value)}
//                       className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-orange-500 pr-10"
//                       required
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
//                     >
//                       {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
//                     </button>
//                   </div>
//                 </div>

//                 {authMode === "signin" && (
//                   <div className="text-right">
//                     <button type="button" className="text-sm text-gray-400 hover:text-white transition-colors">
//                       Forgot Password?
//                     </button>
//                   </div>
//                 )}

//                 <Button type="submit" className="w-full bg-[#D2AC67] hover:bg-orange-600 text-white font-medium py-3 mt-3">
//                   {authMode === "signin" ? "Sign in & Continue" : "Sign up & Continue"}
//                 </Button>
//               </form>


//               <div className="flex gap-3">
              
//               </div>

//               <div className="text-center">
//                 <span className="text-gray-400 text-sm">
//                   {authMode === "signin" ? "Don't have an account yet? " : "Already have an account? "}
//                 </span>
//                 <button
//                   type="button"
//                   onClick={() => setAuthMode(authMode === "signin" ? "signup" : "signin")}
//                   className="text-[#D2AC67] hover:text-orange-400 text-sm font-medium"
//                 >
//                   {authMode === "signin" ? "Register for free" : "Sign in"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { X, Eye, EyeOff } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useAuthStore } from "../lib/auto-store"

export default function AuthModal() {
  const router = useRouter()
  const {
    showAuthModal,
    authMode,
    redirectToCheckout,
    setShowAuthModal,
    setAuthMode,
    signIn,
    signUp,
    setRedirectToCheckout,
  } = useAuthStore()

  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  useEffect(() => {
    if (!showAuthModal && redirectToCheckout) {
      setRedirectToCheckout(false)
      router.push("/checkout")
    }
  // }, [showAuthModal, redirectToCheckout, router, setRedirectToCheckout])
  },  [showAuthModal, redirectToCheckout])

  if (!showAuthModal) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      if (authMode === "signin") {
        await signIn(formData.email, formData.password)
      } else {
        const result= await signUp(formData.name, formData.email, formData.password)
        if (result?.success) {
        alert("Sign up successful! Redirecting to checkout...")
      }
      }
    } catch (err) {
      setError(err.message)
    }
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleClose = () => {
    setShowAuthModal(false)
    setRedirectToCheckout(false)
  }

  return (
    <div className="fixed top-[130px] left-0 right-0 bottom-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative mt-[90px] w-[800px] h-[500px] bg-black rounded-2xl border border-gray-800 overflow-hidden">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex h-full">
          {/* Left Side */}
          <div className="w-[400px] relative">
            <div className="absolute top-8 left-8">
              <div className="text-white text-2xl font-bold"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <img src="images/resource/offer-image-2.jpg" alt="Delicious food" className="w-60 h-40 object-contain" />
              </div>
            </div>
            {redirectToCheckout && (
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-[20px]">
                  🛒 Sign in to continue with your order and proceed to checkout
                </p>
              </div>
            )}
          </div>

          {/* Right Side */}
          <div className="w-96 p-8 flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {authMode === "signin" ? "Login" : "Sign Up"}
                </h3>
                {redirectToCheckout && (
                  <p className="text-gray-400 text-sm">Sign in to complete your order</p>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {authMode === "signup" && (
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300 text-sm">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-orange-500"
                      required
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300 text-sm">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="username@gmail.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-orange-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-300 text-sm">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-orange-500 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {authMode === "signin" && (
                  <div className="text-right">
                    <button type="button" className="text-sm text-gray-400 hover:text-white">
                      Forgot Password?
                    </button>
                  </div>
                )}

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <Button
                  type="submit"
                  className="w-full bg-[#D2AC67] hover:bg-orange-600 text-white font-medium py-3 mt-3"
                >
                  {authMode === "signin" ? "Sign in & Continue" : "Sign up & Continue"}
                </Button>
              </form>

              <div className="text-center">
                <span className="text-gray-400 text-sm">
                  {authMode === "signin"
                    ? "Don't have an account yet? "
                    : "Already have an account? "}
                </span>
                <button
                  type="button"
                  onClick={() => setAuthMode(authMode === "signin" ? "signup" : "signin")}
                  className="text-[#D2AC67] hover:text-orange-400 text-sm font-medium"
                >
                  {authMode === "signin" ? "Register for free" : "Sign in"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
