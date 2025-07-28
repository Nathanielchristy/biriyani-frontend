// "use client"

// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import { ArrowLeft, CreditCard, MapPin, User } from "lucide-react"
// import { Button } from "./ui/button"
// // import { Button } from "../ui/button"
// import { Input } from "./ui/input"
// import { Label } from "./ui/label"
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
// import { useAuthStore} from '../lib/auto-store'
// // import { useAuthStore } from "./lib/auth-store"

// export default function CheckoutPage() {
//   const router = useRouter()
//   const { isAuthenticated, user, cartItem, setCartItem } = useAuthStore()

//   const [orderData, setOrderData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     zipCode: "",
//     cardNumber: "",
//     expiryDate: "",
//     cvv: "",
//     cardName: "",
//   })

//   // Redirect if not authenticated or no cart item
//   useEffect(() => {
//     if (!isAuthenticated) {
//       router.push("/")
//       return
//     }

//     if (!cartItem) {
//       router.push("/")
//       return
//     }

//     // Pre-fill user data if available
//     if (user) {
//       setOrderData((prev) => ({
//         ...prev,
//         fullName: user.name || "",
//         email: user.email || "",
//       }))
//     }
//   }, [isAuthenticated, cartItem, user, router])

//   const handleInputChange = (field, value) => {
//     setOrderData((prev) => ({ ...prev, [field]: value }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Simulate order processing
//     alert("Order placed successfully! 🎉")
//     setCartItem(null)
//     router.push("/")
//   }

//   const handleBack = () => {
//     router.push("/")
//   }

//   if (!cartItem) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">No items in cart</h2>
//           <Button onClick={() => router.push("/")} className="bg-orange-500 hover:bg-orange-600">
//             Continue Shopping
//           </Button>
//         </div>
//       </div>
//     )
//   }

//   const subtotal = cartItem.price
//   const deliveryFee = 2.99
//   const tax = subtotal * 0.08
//   const total = subtotal + deliveryFee + tax

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center h-16">
//             <Button variant="ghost" onClick={handleBack} className="mr-4 text-gray-600 hover:text-gray-900">
//               <ArrowLeft className="w-5 h-5 mr-2" />
//               Back
//             </Button>
//             <div className="text-2xl font-bold text-gray-900">
//               food<span className="text-orange-500">.</span>
//             </div>
//             <div className="ml-8">
//               <h1 className="text-xl font-semibold text-gray-900">Checkout</h1>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Order Form */}
//           <div className="space-y-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center">
//                   <User className="w-5 h-5 mr-2" />
//                   Contact Information
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <Label htmlFor="fullName">Full Name</Label>
//                     <Input
//                       id="fullName"
//                       value={orderData.fullName}
//                       onChange={(e) => handleInputChange("fullName", e.target.value)}
//                       placeholder="Enter your full name"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="phone">Phone Number</Label>
//                     <Input
//                       id="phone"
//                       type="tel"
//                       value={orderData.phone}
//                       onChange={(e) => handleInputChange("phone", e.target.value)}
//                       placeholder="(555) 123-4567"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <Label htmlFor="email">Email Address</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     value={orderData.email}
//                     onChange={(e) => handleInputChange("email", e.target.value)}
//                     placeholder="your@email.com"
//                     required
//                   />
//                 </div>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center">
//                   <MapPin className="w-5 h-5 mr-2" />
//                   Delivery Address
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div>
//                   <Label htmlFor="address">Street Address</Label>
//                   <Input
//                     id="address"
//                     value={orderData.address}
//                     onChange={(e) => handleInputChange("address", e.target.value)}
//                     placeholder="123 Main Street"
//                     required
//                   />
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <Label htmlFor="city">City</Label>
//                     <Input
//                       id="city"
//                       value={orderData.city}
//                       onChange={(e) => handleInputChange("city", e.target.value)}
//                       placeholder="New York"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="zipCode">ZIP Code</Label>
//                     <Input
//                       id="zipCode"
//                       value={orderData.zipCode}
//                       onChange={(e) => handleInputChange("zipCode", e.target.value)}
//                       placeholder="10001"
//                       required
//                     />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center">
//                   <CreditCard className="w-5 h-5 mr-2" />
//                   Payment Information
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div>
//                   <Label htmlFor="cardNumber">Card Number</Label>
//                   <Input
//                     id="cardNumber"
//                     value={orderData.cardNumber}
//                     onChange={(e) => handleInputChange("cardNumber", e.target.value)}
//                     placeholder="1234 5678 9012 3456"
//                     required
//                   />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <Label htmlFor="expiryDate">Expiry Date</Label>
//                     <Input
//                       id="expiryDate"
//                       value={orderData.expiryDate}
//                       onChange={(e) => handleInputChange("expiryDate", e.target.value)}
//                       placeholder="MM/YY"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="cvv">CVV</Label>
//                     <Input
//                       id="cvv"
//                       value={orderData.cvv}
//                       onChange={(e) => handleInputChange("cvv", e.target.value)}
//                       placeholder="123"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <Label htmlFor="cardName">Name on Card</Label>
//                   <Input
//                     id="cardName"
//                     value={orderData.cardName}
//                     onChange={(e) => handleInputChange("cardName", e.target.value)}
//                     placeholder="John Doe"
//                     required
//                   />
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Order Summary */}
//           <div className="space-y-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Order Summary</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   {/* Item */}
//                   <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
//                     <img
//                       src={cartItem.image || "/placeholder.svg"}
//                       alt={cartItem.name}
//                       className="w-16 h-16 object-cover rounded-lg"
//                     />
//                     <div className="flex-1">
//                       <h3 className="font-semibold text-gray-900">{cartItem.name}</h3>
//                       <p className="text-sm text-gray-600 line-clamp-2">{cartItem.description}</p>
//                       <div className="flex items-center mt-1">
//                         <span className="text-sm text-gray-500">Qty: 1</span>
//                       </div>
//                     </div>
//                     <div className="text-lg font-semibold text-gray-900">${cartItem.price.toFixed(2)}</div>
//                   </div>

//                   {/* Order Totals */}
//                   <div className="space-y-2 pt-4 border-t">
//                     <div className="flex justify-between text-gray-600">
//                       <span>Subtotal</span>
//                       <span>${subtotal.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between text-gray-600">
//                       <span>Delivery Fee</span>
//                       <span>${deliveryFee.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between text-gray-600">
//                       <span>Tax</span>
//                       <span>${tax.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between text-lg font-semibold text-gray-900 pt-2 border-t">
//                       <span>Total</span>
//                       <span>${total.toFixed(2)}</span>
//                     </div>
//                   </div>

//                   <form onSubmit={handleSubmit}>
//                     <Button
//                       type="submit"
//                       className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold"
//                     >
//                       Place Order - ${total.toFixed(2)}
//                     </Button>
//                   </form>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Delivery Info */}
//             <Card>
//               <CardContent className="pt-6">
//                 <div className="text-center space-y-2">
//                   <div className="text-sm text-gray-600">Estimated Delivery Time</div>
//                   <div className="text-lg font-semibold text-orange-500">25-35 minutes</div>
//                   <div className="text-xs text-gray-500">We'll send you updates about your order</div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }




// "use client"

// import { useEffect } from "react"
// import { useRouter } from "next/navigation"
// import { useAuthStore} from "../lib/auto-store"
// // import { useAuthStore } from "../../lib/auto-store"

// export default function CheckoutPage() {
//   const router = useRouter()
//   const { isAuthenticated, cartItem } = useAuthStore()

//   useEffect(() => {
//     if (!isAuthenticated) {
//       // If user is not authenticated, redirect to homepage or show modal (already handled)
//       router.push("/")
//     }
//   }, [isAuthenticated, router])

//   if (!isAuthenticated) return null

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4">
//       <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold mb-4 text-center">Checkout</h2>

//         {cartItem ? (
//           <div className="space-y-4">
//             <div className="flex items-center gap-4">
//               <img
//                 src={cartItem.image || "/placeholder.png"}
//                 alt={cartItem.name || "Cart Item"}
//                 className="w-24 h-24 object-cover rounded"
//               />
//               <div>
//                 <h3 className="text-lg font-semibold">{cartItem.name}</h3>
//                 <p className="text-gray-600">Price: ₹{cartItem.price}</p>
//                 <p className="text-gray-500 text-sm">{cartItem.description}</p>
//               </div>
//             </div>

//             <div className="mt-6">
//               <button className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition">
//                 Place Order
//               </button>
//             </div>
//           </div>
//         ) : (
//           <p className="text-center text-gray-500">No item in the cart.</p>
//         )}
//       </div>
//     </div>
//   )
// }


// "use client"

// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import { useAuthStore } from "../lib/auto-store"
// import {Button} from "./ui/button"
// import { Input } from "./ui/input"
// import { Label } from "./ui/label"
// import { User, MapPin, CreditCard, ArrowLeft } from "lucide-react"

// export default function CheckoutPage() {
//   const router = useRouter()
//   const { isAuthenticated, user, cartItem, setCartItem } = useAuthStore()

//   const [orderData, setOrderData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     zipCode: "",
//     cardNumber: "",
//     expiryDate: "",
//     cvv: "",
//     cardName: "",
//   })

//   // Redirect if not authenticated or no cart item
//   useEffect(() => {
//     if (!isAuthenticated || !cartItem) {
//       router.push("/")
//       return
//     }
//     if (user) {
//       setOrderData((prev) => ({
//         ...prev,
//         fullName: user.name || "",
//         email: user.email || "",
//       }))
//     }
//   }, [isAuthenticated, cartItem, user, router])

//   const handleInputChange = (field, value) => {
//     setOrderData((prev) => ({ ...prev, [field]: value }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     alert("Order placed successfully! 🎉")
//     setCartItem(null)
//     router.push("/")
//   }

//   const handleBack = () => {
//     router.push("/")
//   }

//   if (!isAuthenticated || !cartItem) return null

//   const subtotal = cartItem.price
//   const deliveryFee = 2.99
//   const tax = subtotal * 0.08
//   const total = subtotal + deliveryFee + tax

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4">
//       <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         {/* Header */}
//         <div className="flex items-center mb-6">
//           <Button variant="ghost" onClick={handleBack} className="mr-4 text-gray-600 hover:text-gray-900">
//             <ArrowLeft className="w-5 h-5 mr-2" />
//             Back
//           </Button>
//           <h2 className="text-2xl font-semibold text-gray-900">Checkout</h2>
//         </div>

//         {/* Order Summary */}
//         <div className="mb-6 border p-4 rounded-md bg-gray-50">
//           <div className="flex items-center gap-4">
//             <img
//               src={cartItem.image || "/placeholder.png"}
//               alt={cartItem.name}
//               className="w-20 h-20 object-cover rounded"
//             />
//             <div>
//               <h3 className="text-lg font-semibold">{cartItem.name}</h3>
//               <p className="text-gray-600">Price: ₹{cartItem.price.toFixed(2)}</p>
//               <p className="text-gray-500 text-sm">{cartItem.description}</p>
//             </div>
//           </div>
//           <div className="mt-4 border-t pt-2 text-right space-y-1">
//             <p className="text-gray-700">Subtotal: ₹{subtotal.toFixed(2)}</p>
//             <p className="text-gray-700">Delivery Fee: ₹{deliveryFee.toFixed(2)}</p>
//             <p className="text-gray-700">Tax (8%): ₹{tax.toFixed(2)}</p>
//             <p className="font-semibold text-lg">Total: ₹{total.toFixed(2)}</p>
//           </div>
//         </div>

//         {/* Checkout Form */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Contact Info */}
//           <section>
//             <h3 className="flex items-center text-lg font-semibold mb-2 text-gray-900">
//               <User className="w-5 h-5 mr-2" /> Contact Information
//             </h3>
//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="fullName">Full Name</Label>
//                 <Input
//                   id="fullName"
//                   value={orderData.fullName}
//                   onChange={(e) => handleInputChange("fullName", e.target.value)}
//                   placeholder="Enter your full name"
//                   required
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="phone">Phone Number</Label>
//                 <Input
//                   id="phone"
//                   type="tel"
//                   value={orderData.phone}
//                   onChange={(e) => handleInputChange("phone", e.target.value)}
//                   placeholder="(555) 123-4567"
//                   required
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="email">Email Address</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   value={orderData.email}
//                   onChange={(e) => handleInputChange("email", e.target.value)}
//                   placeholder="your@email.com"
//                   required
//                 />
//               </div>
//             </div>
//           </section>

//           {/* Delivery Address */}
//           <section>
//             <h3 className="flex items-center text-lg font-semibold mb-2 text-gray-900">
//               <MapPin className="w-5 h-5 mr-2" /> Delivery Address
//             </h3>
//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="address">Street Address</Label>
//                 <Input
//                   id="address"
//                   value={orderData.address}
//                   onChange={(e) => handleInputChange("address", e.target.value)}
//                   placeholder="123 Main Street"
//                   required
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <Label htmlFor="city">City</Label>
//                   <Input
//                     id="city"
//                     value={orderData.city}
//                     onChange={(e) => handleInputChange("city", e.target.value)}
//                     placeholder="New York"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="zipCode">ZIP Code</Label>
//                   <Input
//                     id="zipCode"
//                     value={orderData.zipCode}
//                     onChange={(e) => handleInputChange("zipCode", e.target.value)}
//                     placeholder="10001"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Payment Information */}
//           <section>
//             <h3 className="flex items-center text-lg font-semibold mb-2 text-gray-900">
//               <CreditCard className="w-5 h-5 mr-2" /> Payment Information
//             </h3>
//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="cardNumber">Card Number</Label>
//                 <Input
//                   id="cardNumber"
//                   value={orderData.cardNumber}
//                   onChange={(e) => handleInputChange("cardNumber", e.target.value)}
//                   placeholder="1234 5678 9012 3456"
//                   required
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <Label htmlFor="expiryDate">Expiry Date</Label>
//                   <Input
//                     id="expiryDate"
//                     value={orderData.expiryDate}
//                     onChange={(e) => handleInputChange("expiryDate", e.target.value)}
//                     placeholder="MM/YY"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="cvv">CVV</Label>
//                   <Input
//                     id="cvv"
//                     value={orderData.cvv}
//                     onChange={(e) => handleInputChange("cvv", e.target.value)}
//                     placeholder="123"
//                     required
//                   />
//                 </div>
//               </div>
//               <div>
//                 <Label htmlFor="cardName">Name on Card</Label>
//                 <Input
//                   id="cardName"
//                   value={orderData.cardName}
//                   onChange={(e) => handleInputChange("cardName", e.target.value)}
//                   placeholder="John Doe"
//                   required
//                 />
//               </div>
//             </div>
//           </section>

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold"
//           >
//             Place Order - ₹{total.toFixed(2)}
//           </Button>
//         </form>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "../lib/auto-store"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { User, MapPin, CreditCard, ArrowLeft } from "lucide-react"

export default function CheckoutPage() {
  const router = useRouter()
  const { isAuthenticated, user, cartItem, setCartItem } = useAuthStore()

  const [orderData, setOrderData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  })

  useEffect(() => {
    if (!isAuthenticated || !cartItem) {
      router.push("/")
      return
    }
    if (user) {
      setOrderData((prev) => ({
        ...prev,
        fullName: user.name || "",
        email: user.email || "",
      }))
    }
  }, [isAuthenticated, cartItem, user, router])

  const handleInputChange = (field, value) => {
    setOrderData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Order placed successfully! 🎉")
    setCartItem(null)
    router.push("/")
  }

  const handleBack = () => {
    router.push("/")
  }

  if (!isAuthenticated || !cartItem) return null

  const subtotal = cartItem.price
  const deliveryFee = 2.99
  const tax = subtotal * 0.08
  const total = subtotal + deliveryFee + tax

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Button variant="ghost" onClick={handleBack} className="mr-4 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Button>
          <h2 className="text-2xl font-semibold text-gray-900">Checkout</h2>
        </div>

        {/* Two columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column: Checkout form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Info */}
            <section>
              <h3 className="flex items-center text-lg font-semibold mb-2 text-gray-900">
                <User className="w-5 h-5 mr-2" /> Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={orderData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={orderData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={orderData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Delivery Address */}
            <section>
              <h3 className="flex items-center text-lg font-semibold mb-2 text-gray-900">
                <MapPin className="w-5 h-5 mr-2" /> Delivery Address
              </h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="address">Street Address</Label>
                  <Input
                    id="address"
                    value={orderData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="123 Main Street"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={orderData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      placeholder="New York"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      value={orderData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      placeholder="10001"
                      required
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Information */}
            <section>
              <h3 className="flex items-center text-lg font-semibold mb-2 text-gray-900">
                <CreditCard className="w-5 h-5 mr-2" /> Payment Information
              </h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    value={orderData.cardNumber}
                    onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      value={orderData.expiryDate}
                      onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      value={orderData.cvv}
                      onChange={(e) => handleInputChange("cvv", e.target.value)}
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input
                    id="cardName"
                    value={orderData.cardName}
                    onChange={(e) => handleInputChange("cardName", e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold"
            >
              Place Order - ₹{total.toFixed(2)}
            </Button>
          </form>

          {/* Right column: Order summary + continue shopping */}
          <div className="border p-4 rounded-md bg-gray-50 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={cartItem.image || "/placeholder.png"}
                  alt={cartItem.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h4 className="text-lg font-semibold">{cartItem.name}</h4>
                  <p className="text-gray-600">Price: ₹{cartItem.price.toFixed(2)}</p>
                  <p className="text-gray-500 text-sm">{cartItem.description}</p>
                </div>
              </div>
              <div className="border-t pt-4 space-y-1 text-right">
                <p className="text-gray-700">Subtotal: ₹{subtotal.toFixed(2)}</p>
                <p className="text-gray-700">Delivery Fee: ₹{deliveryFee.toFixed(2)}</p>
                <p className="text-gray-700">Tax (8%): ₹{tax.toFixed(2)}</p>
                <p className="font-semibold text-lg">Total: ₹{total.toFixed(2)}</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => router.push("/online-order")}
                className="text-orange-500 hover:underline font-semibold"
              >
                ← Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
