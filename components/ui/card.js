// // import * as React from "react"
// // import { cn } from "@/lib/utils"

// // const Card = React.forwardRef(({ className, ...props }, ref) => (
// //   <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
// // ))
// // Card.displayName = "Card"

// // const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
// //   <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
// // ))
// // CardHeader.displayName = "CardHeader"

// // const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
// //   <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
// // ))
// // CardTitle.displayName = "CardTitle"

// // const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
// //   <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
// // ))
// // CardDescription.displayName = "CardDescription"

// // const CardContent = React.forwardRef(({ className, ...props }, ref) => (
// //   <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
// // ))
// // CardContent.displayName = "CardContent"

// // const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
// //   <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
// // ))
// // CardFooter.displayName = "CardFooter"

// // export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }



// "use client"

// import { useEffect } from "react"
// import { useRouter } from "next/navigation"
// import Link from "next/link"
// import { Button } from "../ui/button"
// // import { Card, CardContent, CardHeader } from "../ui/"
// import { Check, ArrowLeft, CreditCard, Shield, Truck, Plus, Minus, Trash2 } from "lucide-react"
// import useStore from "@/store/useStore"

// export default function CartPage() {
//   const router = useRouter()
//   const {
//     user,
//     isAuthenticated,
//     cartItems,
//     cartTotal,
//     isLoading,
//     updateQuantity,
//     removeFromCart,
//     calculateTotal,
//     initializeCart,
//     setLoading,
//   } = useStore()

//   useEffect(() => {
//     // Check authentication
//     if (!isAuthenticated || !user) {
//       router.push("/login")
//       return
//     }

//     // Initialize cart if empty
//     initializeCart()
//     calculateTotal()
//   }, [isAuthenticated, user, router, initializeCart, calculateTotal])

//   const handleCheckout = async () => {
//     setLoading(true)

//     // Simulate checkout process
//     await new Promise((resolve) => setTimeout(resolve, 2000))

//     alert("Checkout functionality would be implemented here!")
//     setLoading(false)
//   }

//   const handleQuantityChange = (productId, newQuantity) => {
//     updateQuantity(productId, newQuantity)
//   }

//   const handleRemoveItem = (productId) => {
//     removeFromCart(productId)
//   }

//   const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
//   const tax = subtotal * 0.08
//   const shipping = 0 // Free shipping

//   if (!isAuthenticated) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center">
//         <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <Link
//             href="/"
//             className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors font-light"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Continue Shopping
//           </Link>

//           <div className="text-white/70 text-sm font-light">Welcome back, {user?.email}</div>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Cart Items */}
//           <div className="lg:col-span-2">
//             <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl rounded-3xl">
//               <CardHeader>
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center">
//                     <Check className="w-6 h-6 text-green-400" />
//                   </div>
//                   <div>
//                     <h1 className="text-2xl font-light text-white">Your Cart</h1>
//                     <p className="text-white/70 text-sm font-light">
//                       {cartItems.length} {cartItems.length === 1 ? "item" : "items"} ready for checkout
//                     </p>
//                   </div>
//                 </div>
//               </CardHeader>

//               <CardContent className="space-y-4">
//                 {cartItems.length === 0 ? (
//                   <div className="text-center py-12">
//                     <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center">
//                       <div className="text-2xl">🛒</div>
//                     </div>
//                     <p className="text-white/70 font-light">Your cart is empty</p>
//                   </div>
//                 ) : (
//                   cartItems.map((item) => (
//                     <div key={item.id} className="bg-white/5 rounded-2xl p-6 border border-white/10">
//                       <div className="flex items-center gap-6">
//                         <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center text-3xl">
//                           {item.image}
//                         </div>

//                         <div className="flex-1">
//                           <h3 className="text-white font-light text-lg mb-1">{item.name}</h3>
//                           <p className="text-white/70 text-sm font-light mb-3">{item.description}</p>

//                           {/* Quantity Controls */}
//                           <div className="flex items-center gap-4">
//                             <div className="flex items-center gap-2 bg-white/10 rounded-xl p-1">
//                               <button
//                                 onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
//                                 className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
//                               >
//                                 <Minus className="w-4 h-4" />
//                               </button>
//                               <span className="text-white font-light px-3">{item.quantity}</span>
//                               <button
//                                 onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
//                                 className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
//                               >
//                                 <Plus className="w-4 h-4" />
//                               </button>
//                             </div>

//                             <span className="text-white/70 text-sm">•</span>
//                             <span className="text-green-400 text-sm font-light">In Stock</span>

//                             <button
//                               onClick={() => handleRemoveItem(item.id)}
//                               className="ml-auto text-red-400 hover:text-red-300 transition-colors p-2"
//                             >
//                               <Trash2 className="w-4 h-4" />
//                             </button>
//                           </div>
//                         </div>

//                         <div className="text-right">
//                           <div className="text-white font-light text-2xl">
//                             ${(item.price * item.quantity).toFixed(2)}
//                           </div>
//                           <div className="text-white/70 text-sm font-light">${item.price.toFixed(2)} each</div>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 )}

//                 {/* Features */}
//                 {cartItems.length > 0 && (
//                   <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
//                     <div className="text-center p-4">
//                       <Truck className="w-6 h-6 text-white/70 mx-auto mb-2" />
//                       <p className="text-white/70 text-xs font-light">Free Shipping</p>
//                     </div>
//                     <div className="text-center p-4">
//                       <Shield className="w-6 h-6 text-white/70 mx-auto mb-2" />
//                       <p className="text-white/70 text-xs font-light">2 Year Warranty</p>
//                     </div>
//                     <div className="text-center p-4">
//                       <Check className="w-6 h-6 text-white/70 mx-auto mb-2" />
//                       <p className="text-white/70 text-xs font-light">30 Day Returns</p>
//                     </div>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           </div>

//           {/* Order Summary */}
//           <div className="lg:col-span-1">
//             <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl rounded-3xl sticky top-4">
//               <CardHeader>
//                 <h2 className="text-xl font-light text-white">Order Summary</h2>
//               </CardHeader>

//               <CardContent className="space-y-6">
//                 {cartItems.length > 0 ? (
//                   <>
//                     {/* Price Breakdown */}
//                     <div className="space-y-3">
//                       <div className="flex justify-between items-center">
//                         <span className="text-white/70 font-light">Subtotal:</span>
//                         <span className="text-white font-light">${subtotal.toFixed(2)}</span>
//                       </div>
//                       <div className="flex justify-between items-center">
//                         <span className="text-white/70 font-light">Shipping:</span>
//                         <span className="text-green-400 font-light">Free</span>
//                       </div>
//                       <div className="flex justify-between items-center">
//                         <span className="text-white/70 font-light">Tax (8%):</span>
//                         <span className="text-white font-light">${tax.toFixed(2)}</span>
//                       </div>
//                       <div className="border-t border-white/10 pt-3">
//                         <div className="flex justify-between items-center">
//                           <span className="text-white font-light text-lg">Total:</span>
//                           <span className="text-white font-light text-2xl">${cartTotal.toFixed(2)}</span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Checkout Button */}
//                     <Button
//                       onClick={handleCheckout}
//                       disabled={isLoading}
//                       className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-xl h-12 font-light transition-all duration-300 flex items-center gap-2 disabled:opacity-50"
//                     >
//                       {isLoading ? (
//                         <>
//                           <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                           Processing...
//                         </>
//                       ) : (
//                         <>
//                           <CreditCard className="w-4 h-4" />
//                           Proceed to Checkout
//                         </>
//                       )}
//                     </Button>
//                   </>
//                 ) : (
//                   <div className="text-center py-8">
//                     <p className="text-white/70 font-light mb-4">Add items to see order summary</p>
//                     <Link href="/">
//                       <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-xl font-light">
//                         Start Shopping
//                       </Button>
//                     </Link>
//                   </div>
//                 )}

//                 {/* Security Notice */}
//                 <div className="text-center">
//                   <p className="text-white/70 text-xs font-light flex items-center justify-center gap-1">
//                     <Shield className="w-3 h-3" />
//                     Secure checkout with 256-bit SSL encryption
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


