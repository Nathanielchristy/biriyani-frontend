// "use client"
// import Link from "next/link"
// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import { useAuthStore } from "../lib/auth-store" // auth Zustand store
// import { useCartStore } from "@/lib/cart-store"
// import { Button } from "../components/ui/button"
// import { Input } from "../components/ui/input"
// import { Label } from "../components/ui/label"
// import { User, MapPin, CreditCard, ArrowLeft } from "lucide-react"

// export default function CheckoutPage() {
//   const router = useRouter()
//   const { isAuthenticated, user, signOut  } = useAuthStore()
//   const { cartItems, clearCart } = useCartStore()
//   const [hydrated, setHydrated] = useState(false)
//   const [orderData, setOrderData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     street: "",
//     city: "",
//     zipCode: "",
//     cardNumber: "",
//     expiryDate: "",
//     cvv: "",
//     cardName: "",
//   })

//   // Mark hydration complete after mount
//   useEffect(() => {
//     setHydrated(true)
//   }, [])

//   useEffect(() => {
//     if (!hydrated) return

//     if (!isAuthenticated) {
//       router.push("/")
//       return
//     }

//     if (!cartItems || cartItems.length === 0) {
//       alert("Your cart is empty. Please add items to proceed with checkout.")
//       router.push("/online-order")
//       return
//     }

//     if (user) {
//       setOrderData((prev) => ({
//         ...prev,
//         fullName: user.name || "",
//         email: user.email || "",
//       }))
//     }
//   }, [hydrated, isAuthenticated, cartItems, user, router])

//   const handleInputChange = (field, value) => {
//     setOrderData((prev) => ({ ...prev, [field]: value }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (
//       !orderData.fullName ||
//       !orderData.email ||
//       !orderData.phone ||
//       !orderData.street ||
//       !orderData.city ||
//       !orderData.zipCode ||
//       !orderData.cardNumber ||
//       !orderData.expiryDate ||
//       !orderData.cvv ||
//       !orderData.cardName
//     ) {
//       alert("Please fill out all fields.")
//       return
//     }

//     alert("Order placed successfully! 🎉")
//     clearCart()
//     router.push("/")
//   }

//   const handleBack = () => {
//     router.push("/online-order")
//   }

//   const handleLogout = () => {
//   signOut()
//   clearCart()

//   router.push("/") // Redirect to homepage or login page
// }

//   if (!hydrated || !isAuthenticated || !cartItems) return null

//   // Calculate totals from cartItems
//   const subtotal = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
//   const deliveryFee = 2.99
//   const tax = subtotal * 0.08
//   const total = subtotal + deliveryFee + tax

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4">
//       <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         {/* Header */}
//         <div className="flex items-center mb-6">
//           <Button variant="ghost" onClick={handleBack} className="mr-4 text-gray-600 hover:text-gray-900">
//             <ArrowLeft className="w-5 h-5 mr-2" />
//             Back
//           </Button>
//           <h2 className="text-2xl font-semibold text-gray-900">Checkout</h2>
        
//         </div>
//  <div className="text-2xl font-semibold text-gray-900 text-right mt-[-50px]">
//     <Button  onClick={handleLogout} className="mr-4 text-gray-600 hover:text-gray-900 ">
            
//             Logout
//           </Button>
//  </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           {/* Left: Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Contact Info */}
//             <section>
//               <h3 className="flex items-center text-lg font-semibold mb-2 text-gray-900">
//                 <User className="w-5 h-5 mr-2" /> Contact Information
//               </h3>
//               <div className="space-y-4">
//                 <div>
//                   <Label htmlFor="fullName">Full Name</Label>
//                   <Input
//                     id="fullName"
//                     value={orderData.fullName}
//                     onChange={(e) => handleInputChange("fullName", e.target.value)}
//                     placeholder="Enter your full name"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="phone">Phone Number</Label>
//                   <Input
//                     id="phone"
//                     type="tel"
//                     value={orderData.phone}
//                     onChange={(e) => handleInputChange("phone", e.target.value)}
//                     placeholder="(555) 123-4567"
//                     required
//                   />
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
//               </div>
//             </section>

//             {/* Delivery Address */}
//             <section>
//               <h3 className="flex items-center text-lg font-semibold mb-2 text-gray-900">
//                 <MapPin className="w-5 h-5 mr-2" /> Delivery Address
//               </h3>
//               <div className="space-y-4">
//                 <div>
//                   <Label htmlFor="address">Street Address</Label>
//                   <Input
//                     id="address"
//                     value={orderData.street}
//                     onChange={(e) => handleInputChange("address", e.target.value)}
//                     placeholder="123 Main Street"
//                     required
//                   />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
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
//               </div>
//             </section>

//             {/* Payment Info */}
//             <section>
//               {/* <h3 className="flex items-center text-lg font-semibold mb-2 text-gray-900">
//                 <CreditCard className="w-5 h-5 mr-2" /> Payment Information
//               </h3> */}
//               {/* <div className="space-y-4">
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
//               </div> */}
              
//               <div className="space-y-2">
//                 <Label className="block font-medium mb-1">Payment Method</Label>
//                 <div className="flex gap-4">
//     <label className="flex items-center gap-2">
//       <input
//         type="radio"
//         name="paymentMethod"
//         value="card"
//         checked={orderData.paymentMethod === "card"}
//         onChange={(e) => handleInputChange("paymentMethod", e.target.value)}
//       />
//       Card Payment
//     </label>
//     <label className="flex items-center gap-2">
//       <input
//         type="radio"
//         name="paymentMethod"
//         value="cash"
//         checked={orderData.paymentMethod === "cash"}
//         onChange={(e) => handleInputChange("paymentMethod", e.target.value)}
//       />
//       Cash on Delivery
//     </label>
//   </div>
//               </div>
              
//             </section>

//             <Button
//               type="submit"
//               className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold"
//             >
//               Place Order - AED {total.toFixed(2)}
//             </Button>
//           </form>

//           {/* Right column: Order summary */}
//           <div className="border p-4 rounded-md bg-gray-50 flex flex-col justify-between">
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
//               {cartItems.length > 0 &&
//                 cartItems.map((item) => (
//                   <div key={item.id || item._id} className="flex items-center gap-4 mb-4">
//                     <img
//                       src={item.imageUrl || "/placeholder.png"}
//                       alt={item.name || "Item"}
//                       className="w-20 h-20 object-cover rounded"
//                     />
//                     <div>
//                       <h4 className="text-lg font-semibold">{item.name}</h4>
//                       <p className="text-gray-600">
//                         Price: AED {item.price.toFixed(2)} x {item.quantity || 1}
//                       </p>
//                       <p className="text-gray-500 text-sm">{item.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               <div className="border-t pt-4 space-y-1 text-right">
//                 <p className="text-gray-700">Subtotal: AED {subtotal.toFixed(2)}</p>
//                 <p className="text-gray-700">Delivery Fee: AED {deliveryFee.toFixed(2)}</p>
//                 <p className="text-gray-700">Tax (8%): AED {tax.toFixed(2)}</p>
//                 <p className="font-semibold text-lg">Total: AED {total.toFixed(2)}</p>
//               </div>
//             </div>

//             <div className="mt-6 text-center">
//               <Link href="/online-order" className="text-orange-500 hover:underline font-semibold">
//                 ← Continue Shopping
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "../lib/auth-store"
import { useCartStore } from "@/lib/cart-store"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { User, MapPin, CreditCard, ArrowLeft } from "lucide-react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CheckoutPage() {
  const router = useRouter()
  const { isAuthenticated, user, signOut } = useAuthStore()
  const { cartItems, clearCart, removeFromCart } = useCartStore()
  const [hydrated, setHydrated] = useState(false)
  const [orderData, setOrderData] = useState({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    paymentMethod: "card", // <-- ADD THIS
  })

  useEffect(() => {
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return

    if (!isAuthenticated) {
      router.push("/")
      return
    }

    if (!cartItems || cartItems.length === 0) {
      // alert("Your cart is empty.")
        toast.error("Your cart is empty. Please add items.");
      router.push("/online-order")
      return
    }

    if (user) {
      setOrderData((prev) => ({
        ...prev,
        fullName: user.name || "",
        email: user.email || "",
      }))
    }
  }, [hydrated, isAuthenticated, cartItems, user, router])

  const handleInputChange = (field, value) => {
    setOrderData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const {
      fullName, email, phone, street, city, zipCode,
      paymentMethod, cardNumber, expiryDate, cvv, cardName
    } = orderData

    // Basic contact/address validation
    if (!fullName || !email || !phone || !street || !city || !zipCode) {
      toast.error("Please fill in all delivery details.")
      return
    }

    // Card payment validation
    if (paymentMethod === "card") {
      if (!cardNumber || !expiryDate || !cvv || !cardName) {
        toast.error("Please fill in all card details.")
        return
      }

      // Simulate dummy gateway
      if (cardNumber === "4242 4242 4242 4242") {
        toast.success("Card payment successful 🎉")
      } else {
        toast.error("Card declined. Use test card: 4242 4242 4242 4242.")
        return
      }
    }

    // COD
    if (paymentMethod === "cash") {
      toast.success("Order placed with Cash on Delivery 💵")
    }
    console.log("Order placed with Cash on Delivery 💵")

    clearCart()
    router.push("/")
  }

  const handleBack = () => {
    router.push("/online-order")
  }

  const handleLogout = () => {
    signOut()
    clearCart()
    router.push("/")
  }

  if (!hydrated || !isAuthenticated || !cartItems) return null

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
  const deliveryFee = 2.99
  const tax = subtotal * 0.08
  const total = subtotal + deliveryFee + tax

  return (
    <>
     <ToastContainer 
         position="top-right" 
         autoClose={3000} 
         hideProgressBar={false} 
         newestOnTop={false} 
         closeOnClick 
         rtl={false} 
         pauseOnFocusLoss 
         draggable 
         pauseOnHover
      />

    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-6">
          <Button variant="ghost" onClick={handleBack} className="mr-4 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Button>
          <h2 className="text-2xl font-semibold text-gray-900">Checkout</h2>
        </div>

        <div className="text-right mt-[-50px]">
          <Button onClick={handleLogout} className="mr-4 text-gray-600 hover:text-gray-900">
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Info */}
            <section>
              <h3 className="flex items-center text-lg font-semibold mb-2 text-gray-900">
                <User className="w-5 h-5 mr-2" /> Contact Information
              </h3>
              <div className="space-y-4">
                <Input label="Full Name" placeholder="Full Name" id="fullName" value={orderData.fullName} onChange={(e) => handleInputChange("fullName", e.target.value)} required />
                <Input label="Phone"  placeholder="Phone No" id="phone" value={orderData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} required />
                <Input label="Email"  placeholder="Email" id="email" value={orderData.email} onChange={(e) => handleInputChange("email", e.target.value)} required />
              </div>
            </section>

            {/* Address */}
            <section>
              <h3 className="flex items-center text-lg font-semibold mb-2 text-gray-900">
                <MapPin className="w-5 h-5 mr-2" /> Delivery Address
              </h3>
              <div className="space-y-4">
                <Input label="Street"  placeholder="Street" id="street" value={orderData.street} onChange={(e) => handleInputChange("street", e.target.value)} required />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="City" placeholder="City" id="city" value={orderData.city} onChange={(e) => handleInputChange("city", e.target.value)} required />
                  <Input label="ZIP"  placeholder="ZIP" id="zipCode" value={orderData.zipCode} onChange={(e) => handleInputChange("zipCode", e.target.value)} required />
                </div>
              </div>
            </section>

            {/* Payment Section */}
            <section>
              <h3 className="flex items-center text-lg font-semibold mb-2 text-gray-900">
                <CreditCard className="w-5 h-5 mr-2" /> Payment
              </h3>

              {/* Payment Method Select */}
              <div className="space-y-2 mb-4">
                <Label>Payment Method</Label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={orderData.paymentMethod === "card"}
                      onChange={(e) => handleInputChange("paymentMethod", e.target.value)}
                    />
                    Card
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={orderData.paymentMethod === "cash"}
                      onChange={(e) => handleInputChange("paymentMethod", e.target.value)}
                    />
                    Cash on Delivery
                  </label>
                </div>
              </div>

              {/* Conditional Card Fields */}
              {orderData.paymentMethod === "card" && (
                <div className="space-y-4">
                  <Input
                    label="Card Number"
                    id="cardNumber"
                    value={orderData.cardNumber}
                    onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                    placeholder="4242 4242 4242 4242"
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Expiry"
                      id="expiryDate"
                      value={orderData.expiryDate}
                      onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                      placeholder="MM/YY"
                      required
                    />
                    <Input
                      label="CVV"
                      id="cvv"
                      value={orderData.cvv}
                      onChange={(e) => handleInputChange("cvv", e.target.value)}
                      placeholder="123"
                      required
                    />
                  </div>
                  <Input
                    label="Name on Card"
                    id="cardName"
                    value={orderData.cardName}
                    onChange={(e) => handleInputChange("cardName", e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
              )}
            </section>

            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold">
              Place Order - AED {total.toFixed(2)}
            </Button>
          </form>

          {/* Order Summary */}
          <div className="border p-4 rounded-md bg-gray-50">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
           

            {cartItems.map((item) => (
  <div key={item._id} className="flex items-center gap-4 mb-4">
  <img src={item.imageUrl || "/placeholder.png"} className="w-20 h-20 object-cover rounded" alt={item.name} />
 <div>
 <h4 className="text-lg font-semibold">{item.name}</h4>
    <p className="text-gray-600">
      AED {item.price.toFixed(2)} × {item.quantity}
    </p>
    <p className="font-medium">
      AED {(item.price * item.quantity).toFixed(2)}
    </p>
    <button
        onClick={() => removeFromCart(item._id)}
        className="mt-2 text-red-600 hover:underline"
      >
        Remove
      </button>
  </div>
   </div>
))}
            <div className="border-t pt-4 text-right space-y-1">
              <p>Subtotal: AED {subtotal.toFixed(2)}</p>
              <p>Delivery Fee: AED {deliveryFee.toFixed(2)}</p>
              <p>Tax (8%): AED {tax.toFixed(2)}</p>
              <p className="font-semibold text-lg">Total: AED {total.toFixed(2)}</p>
            </div>
            <div className="mt-6 text-center">
              <Link href="/online-order" className="text-orange-500 hover:underline font-semibold">
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
  )
}
