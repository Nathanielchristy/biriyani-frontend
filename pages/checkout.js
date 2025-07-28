

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
    if (!isAuthenticated) {
      router.push("/")
      return
    }

    if (cartItem === null) {
      // Instead of redirecting, show a message to the user
      alert("Your cart is empty. Please add items to proceed with checkout.")
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
