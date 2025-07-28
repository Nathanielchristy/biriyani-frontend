
"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check, ArrowLeft, CreditCard, Shield, Truck } from "lucide-react"

export default function CartPage() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is authenticated
    const authToken = localStorage.getItem("authToken")
    const userData = localStorage.getItem("user")

    if (!authToken || !userData) {
      router.push("/login")
      return
    }

    setUser(JSON.parse(userData))
    setIsLoading(false)
  }, [router])

  const handleCheckout = () => {
    // In a real app, this would integrate with a payment processor
    alert("Checkout functionality would be implemented here!")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors font-light"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>

          <div className="text-white/70 text-sm font-light">Welcome back, {user?.email}</div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl rounded-3xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-light text-white">Your Cart</h1>
                    <p className="text-white/70 text-sm font-light">Ready for checkout</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Product Item */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center text-3xl">📱</div>
                    <div className="flex-1">
                      <h3 className="text-white font-light text-lg mb-1">Premium Smartphone</h3>
                      <p className="text-white/70 text-sm font-light mb-2">Latest technology with stunning design</p>
                      <div className="flex items-center gap-4">
                        <span className="text-white/70 text-sm">Qty: 1</span>
                        <span className="text-white/70 text-sm">•</span>
                        <span className="text-white/70 text-sm">In Stock</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-light text-2xl">$899.99</div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4">
                    <Truck className="w-6 h-6 text-white/70 mx-auto mb-2" />
                    <p className="text-white/70 text-xs font-light">Free Shipping</p>
                  </div>
                  <div className="text-center p-4">
                    <Shield className="w-6 h-6 text-white/70 mx-auto mb-2" />
                    <p className="text-white/70 text-xs font-light">2 Year Warranty</p>
                  </div>
                  <div className="text-center p-4">
                    <Check className="w-6 h-6 text-white/70 mx-auto mb-2" />
                    <p className="text-white/70 text-xs font-light">30 Day Returns</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl rounded-3xl sticky top-4">
              <CardHeader>
                <h2 className="text-xl font-light text-white">Order Summary</h2>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Price Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 font-light">Subtotal:</span>
                    <span className="text-white font-light">$899.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 font-light">Shipping:</span>
                    <span className="text-green-400 font-light">Free</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 font-light">Tax:</span>
                    <span className="text-white font-light">$72.00</span>
                  </div>
                  <div className="border-t border-white/10 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-light text-lg">Total:</span>
                      <span className="text-white font-light text-2xl">$971.99</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-xl h-12 font-light transition-all duration-300 flex items-center gap-2"
                >
                  <CreditCard className="w-4 h-4" />
                  Proceed to Checkout
                </Button>

                {/* Security Notice */}
                <div className="text-center">
                  <p className="text-white/70 text-xs font-light flex items-center justify-center gap-1">
                    <Shield className="w-3 h-3" />
                    Secure checkout with 256-bit SSL encryption
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
