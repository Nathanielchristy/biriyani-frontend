// import Header from '../components/Header'
// import Footer from '../components/Footer'
// import React, { useState } from "react";
// import SignupModal from '../components/sign_in';
// import { Heart, Star, ShoppingCart } from "lucide-react"
// import { Button } from "./ui/button"
// import { Card, CardContent } from "./ui/card"
// import { useAuthStore } from "../lib/auto-store"
// import { useRouter } from "next/navigation"
// const menuData = [
//   {
//     id: 1,
//     title: "Greek Salad",
//     category: "Soup",
//     price: "$25.50",
//     desc: "Tomatoes, bell pepper, cucumber, onion, olives, and feta cheese.",
//     image: "images/resource/menu-image-5.png",
//   },
//   {
//     id: 2,
//     title: "Lasagne",
//     category: "Famous Kebab",
//     price: "$40.00",
//     desc: "Vegetables, cheeses, meats, tomato sauce, spices",
//     image: "images/resource/menu-image-6.png",
//   },
//   {
//     id: 3,
//     title: "Butternut Pumpkin",
//     category: "Platters",
//     price: "$10.00",
//     desc: "Dummy text of the printing industry.",
//     image: "images/resource/menu-image-7.png",
//   },
//   {
//     id: 4,
//     title: "Tokusen Wagyu",
//     category: "Non-Veg",
//     price: "$39.00",
//     desc: "Ground meats, cheeses, tomato sauce",
//     image: "images/resource/menu-image-8.png",
//   },
//   {
//     id: 5,
//     title: "Olivas Rellenas",
//     category: "Soup",
//     price: "$25.00",
//     desc: "Avocados with crab meat, salad stuffed pepper",
//     image: "images/resource/menu-image-9.png",
//   },
//   {
//     id: 6,
//     title: "Opu Fish",
//     category: "Non-Veg",
//     price: "$49.00",
//     desc: "Ground meats, cheese, vegetables, sauce",
//     image: "images/resource/menu-image-10.png",
//   },
// ];

// const categories = ["Soup", "Hyderabadi Specialities", "Famous Kebab", "Platters", "Chineese Specialities", "Rice & Noodle", "Famous Gravy", "Haleem", "Roti & Naan", "Rice", "Accompaniments", "BWCO Biryani", "Beverages","Desserts","Combo Meals", "Punjabi Kulchas"];


 
// const OnlineOrder = ({ id, name, description, price, image, rating, category }) => {
//   const router = useRouter()
//   const { isAuthenticated, addToCart } = useAuthStore()
//   const [showSignup, setShowSignup] = useState(false);
//    const [isModalOpen, setIsModalOpen] = useState(false)

//    const handleAddToCart = () => {
//     const item = { id, name, description, price, image, rating, category }

//     if (isAuthenticated) {
//       // If already authenticated, go directly to checkout
//       addToCart(item)
//       router.push("/checkout")
//     } else {
//       // If not authenticated, trigger auth modal first
//       addToCart(item)
//     }
//   }

//    const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredItems =
//     selectedCategory === "All"
//       ? menuData
//       : menuData.filter((item) => item.category === selectedCategory);

//   return (
//     <>
//      <>
//   <link href="css/bootstrap.css" rel="stylesheet" />
//   <link href="css/style.css" rel="stylesheet" />
//   <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
//   <link rel="icon" href="images/favicon.png" type="image/x-icon" />
//   {/* Responsive */}
//   <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//   <meta
//     name="viewport"
//     content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
//   />
//   <link href="css/responsive.css" rel="stylesheet" />
 
// </>
//      <div className="page-wrapper">
 
//  <Header/>

//   <div className="menu-backdrop" />

//  <section className="inner-banner">
//     <div
//       className="image-layer"
//       style={{ backgroundImage: "url(images/background/banner-image-2.jpg)" }}
//     />
//     <div className="auto-container">
//       <div className="inner">
//         <div className="subtitle">
//           <span>delicious &amp; amazing</span>
//         </div>
//         <div className="pattern-image">
//           <img src="images/icons/separator.svg" alt="" title="" />
//         </div>
//         <h1>
//           <span>Our Menu </span>
//         </h1>
//       </div>
//     </div>
//   </section>

//   <section className="menu-two">
//       <div className="auto-container">
//         <div className="row clearfix">

//           {/* Left Side Categories */}
//           <div className="col-lg-3 col-md-12 col-sm-12 category-sidebar mt-4">
//             <div className="inner">
//               <h4>Categories</h4>
//               <ul className="category-list">
//                 {categories.map((cat) => (
//                   <li key={cat}>
//                     <button
//                       className={`category-btn ${
//                         selectedCategory === cat ? "active" : ""
//                       }`}
//                       onClick={() => setSelectedCategory(cat)}
//                     >
//                       {cat}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Right Side Menu Items */}
//           <div className="col-lg-9 col-md-12 col-sm-12">
//             <div className="title-box centered">
//               <div className="subtitle">
//                 <span>{selectedCategory} MENU</span>
//               </div>
//               <div className="pattern-image">
//                 <img src="images/icons/separator.svg" alt="" title="" />
//               </div>
//               <h2>{selectedCategory}</h2>
//             </div>
//             <div className="row clearfix">
//               {filteredItems.map((item) => (
//                 <div
//                   className="menu-col col-lg-6 col-md-12 col-sm-12"
//                   key={item.id}
//                 >
//                   <div className="dish-block">
//                     <div className="inner-box">
//                       <div className="dish-image">
//                         <img src={item.image} alt={item.title} />
//                       </div>
//                       <div className="title clearfix">
//                         <div className="ttl clearfix">
//                           <h5>{item.title}</h5>
//                         </div>
//                         <div className="price">
//                           <span>{item.price}</span>
//                         </div>
                       
//                       </div>
//                       <div className="text desc">
//                         <p>{item.desc}</p>
//                       </div>
//                        {/* <div>
                      
//                           <button className="bg-[#E4C590] text-black p-1 rounded-sm ">Add to Cart</button>
//                         </div> */}

//                         {/* <button
//   className="bg-[#E4C590] text-black px-3 py-1 rounded-sm"
//    onClick={() => setIsModalOpen(true)}
// >
//   Add to Cart
// </button> */}
//  <Button onClick={handleAddToCart} className="bg-orange-500 hover:bg-orange-600 text-white px-6">
//               <ShoppingCart className="w-4 h-4 mr-2" />
//               Add to Cart
//             </Button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               {filteredItems.length === 0 && (
//                 <p style={{ padding: "20px" }}>No items found in this category.</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
// {/* 
//   {showSignup && (
//   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[6px]">
//     <div className="relative w-[90%] max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl p-8 shadow-2xl text-white transform -translate-y-1/2 top-64">

     
//       <button
//         className="absolute top-3 right-4 text-white text-2xl hover:text-[#E4C590]"
//         onClick={() => setShowSignup(false)}
//       >
//         &times;
//       </button>

     
//       <h2 className="text-2xl font-semibold mb-6 text-center">
//         Sign Up
//       </h2>

 
//       <input
//         type="text"
//         placeholder="Name"
//         className="w-full p-3 mb-3 mt-3 rounded-md bg-white/20 placeholder-white/70 text-white border border-white/30 focus:outline-none"
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         className="w-full p-3 mb-3 rounded-md bg-white/20 placeholder-white/70 text-white border border-white/30 focus:outline-none"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         className="w-full p-3 mb-5 rounded-md bg-white/20 placeholder-white/70 text-white border border-white/30 focus:outline-none"
//       />

      
//       <button className="w-full py-3 bg-[#E4C590] text-black font-semibold rounded-md hover:bg-[#d9b567] transition">
//         Create Account
//       </button>
//     </div>
//   </div>
// )} */}
//  <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />


//   <Footer/>
 
// </div>
//     </>

  

//   )
// }

// export default OnlineOrder


"use client"

import { useState, useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import AuthModal from "../components/auth-modal"
import { Button } from "../components/ui/button"
import { useRouter } from "next/navigation"
import { useAuthStore } from "../lib/auto-store"
import { useCartStore } from "../lib/cart-store"

const OnlineOrder = () => {
  const router = useRouter()
  const { isAuthenticated, setRedirectToCheckout, setShowAuthModal, redirectToCheckout } = useAuthStore()
  const { addToCart } = useCartStore()

  const [menuItems, setMenuItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    if (isAuthenticated && redirectToCheckout){
      console.log("authenticate redirect")
      router.push("/checkout")
      setRedirectToCheckout(false)
    }
  }, [isAuthenticated, redirectToCheckout])

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("https://biriyanidev.onrender.com/api/menu/")
        if (!res.ok) throw new Error("Failed to fetch menu")
        const data = await res.json()
        setMenuItems(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMenu()
  }, [])

  const categories = ["All", ...new Set(menuItems.map((item) => item.category))]

  const handleAddToCart = (item) => {
    const processedItem = {
      ...item,
      price: Number.parseFloat(item.price),
    }
    addToCart(processedItem)
    if (isAuthenticated) {
      router.push("/checkout")
    } else {
      setRedirectToCheckout(true)
      setShowAuthModal(true)
    }
  }

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory)

  return (
    <>
      {/* HEAD STYLES */}
      <link href="/css/bootstrap.css" rel="stylesheet" />
      <link href="/css/style.css" rel="stylesheet" />
      <link href="/css/responsive.css" rel="stylesheet" />
      <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <div className="page-wrapper">
        <Header />
        <div className="menu-backdrop" />

        {/* Banner */}
        <section className="inner-banner">
          <div className="image-layer" style={{ backgroundImage: "url(images/background/banner-image-2.jpg)" }} />
          <div className="auto-container">
            <div className="inner">
              <div className="subtitle">
                <span>delicious & amazing</span>
              </div>
              <div className="pattern-image">
                <img src="images/icons/separator.svg" alt="" />
              </div>
              <h1>
                <span>Our Menu </span>
              </h1>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="menu-two">
          <div className="auto-container">
            {loading ? (
              <p>Loading menu...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <div className="row clearfix">
                {/* Categories */}
                <div className="col-lg-3 col-md-12 col-sm-12 category-sidebar mt-4">
                  <div className="inner">
                    <h4>Categories</h4>
                    <ul className="category-list">
                      {categories.map((cat) => (
                        <li key={cat}>
                          <button
                            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
                            onClick={() => setSelectedCategory(cat)}
                          >
                            {cat}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Items */}
                <div className="col-lg-9 col-md-12 col-sm-12">
                  <div className="title-box centered">
                    <div className="subtitle">
                      <span>{selectedCategory} MENU</span>
                    </div>
                    <div className="pattern-image">
                      <img src="images/icons/separator.svg" alt="" />
                    </div>
                    <h2>{selectedCategory}</h2>
                  </div>

                  <div className="row clearfix">
                    {filteredItems.map((item) => (
                      <div className="menu-col col-lg-6 col-md-12 col-sm-12" key={item._id}>
                        <div className="dish-block">
                          <div className="inner-box">
                            <div className="dish-image">
                              <img src={item.image || "/placeholder.svg"} alt={item.title} />
                            </div>
                            <div className="title clearfix">
                              <div className="ttl clearfix">
                                <h5>{item.title}</h5>
                              </div>
                              <div className="price">
                                <span>AED{item.price}</span>
                              </div>
                            </div>
                            <div className="text desc">
                              <p>{item.description}</p>
                            </div>
                            <Button
                              onClick={() => handleAddToCart(item)}
                              className="bg-[#D2AC67] hover:bg-orange-600 text-white"
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    {filteredItems.length === 0 && (
                      <p style={{ padding: "20px" }}>No items found in this category.</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Modal & Footer */}
        <AuthModal />
        <Footer />
      </div>
    </>
  )
}

export default OnlineOrder



// "use client"

// import Header from "../components/Header"
// import Footer from "../components/Footer"
// import { useState, useEffect } from "react"
// import AuthModal from "../components/auth-modal"
// import { Button } from "../components/ui/button"
// import { useAuthStore } from "../lib/auto-store"
// import { useCartStore } from "../lib/cart-store"
// import { useRouter } from "next/navigation"

// const OnlineOrder = () => {
//   const router = useRouter()
//   const { isAuthenticated, setShowAuthModal, setCartItem, setRedirectToCheckout } = useAuthStore()
//   const { addToCart } = useCartStore()

//   const [menuItems, setMenuItems] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [selectedCategory, setSelectedCategory] = useState("All")

//   // ✅ Fetch menu items from API
//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const res = await fetch("https://biriyanidev.onrender.com/api/menu/")
//         if (!res.ok) throw new Error("Failed to fetch menu")
//         const data = await res.json()
//         setMenuItems(data)
//       } catch (err) {
//         setError(err.message)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchMenu()
//   }, [])

//   // 🧠 Extract unique categories from data
//   const categories = ["All", ...new Set(menuItems.map((item) => item.category))]

//   const handleAddToCart = async (item) => {
//     const processedItem = {
//       ...item,
//       price: Number.parseFloat(item.price),
//     }

//     if (!isAuthenticated) {
//       setCartItem(processedItem)
//       setRedirectToCheckout(true)
//       setShowAuthModal(true)
//     } else {
//       try {
//         const res = await fetch("https://biriyanidev.onrender.com/api/orders/", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             items: [processedItem],
//             customerEmail: useAuthStore.getState().user?.email || "",
//           }),
//         })

//         if (!res.ok) throw new Error("Failed to place order")

//         addToCart(processedItem)
//         router.push("/checkout")
//       } catch (err) {
//         console.error("Order API Error:", err)
//       }
//     }
//   }

//   const filteredItems =
//     selectedCategory === "All"
//       ? menuItems
//       : menuItems.filter((item) => item.category === selectedCategory)

//   return (
//     <>
//       <div className="page-wrapper">
//         <Header />
//         <div className="menu-backdrop" />

//         <section className="inner-banner">
//           <div className="image-layer" style={{ backgroundImage: "url(images/background/banner-image-2.jpg)" }} />
//           <div className="auto-container">
//             <div className="inner">
//               <div className="subtitle">
//                 <span>delicious &amp; amazing</span>
//               </div>
//               <div className="pattern-image">
//                 <img src="images/icons/separator.svg" alt="" />
//               </div>
//               <h1>
//                 <span>Our Menu</span>
//               </h1>
//             </div>
//           </div>
//         </section>

//         <section className="menu-two">
//           <div className="auto-container">
//             {loading ? (
//               <p>Loading menu...</p>
//             ) : error ? (
//               <p>Error loading menu: {error}</p>
//             ) : (
//               <div className="row clearfix">
//                 {/* Categories */}
//                 <div className="col-lg-3 col-md-12 col-sm-12 category-sidebar mt-4">
//                   <div className="inner">
//                     <h4>Categories</h4>
//                     <ul className="category-list">
//                       {categories.map((cat) => (
//                         <li key={cat}>
//                           <button
//                             className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
//                             onClick={() => setSelectedCategory(cat)}
//                           >
//                             {cat}
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 {/* Menu Items */}
//                 <div className="col-lg-9 col-md-12 col-sm-12">
//                   <div className="title-box centered">
//                     <div className="subtitle">
//                       <span>{selectedCategory} MENU</span>
//                     </div>
//                     <div className="pattern-image">
//                       <img src="images/icons/separator.svg" alt="" />
//                     </div>
//                     <h2>{selectedCategory}</h2>
//                   </div>

//                   <div className="row clearfix">
//                     {filteredItems.length > 0 ? (
//                       filteredItems.map((item) => (
//                         <div className="menu-col col-lg-6 col-md-12 col-sm-12" key={item._id}>
//                           <div className="dish-block">
//                             <div className="inner-box">
//                               <div className="dish-image">
//                                 <img src={item.image || "/placeholder.svg"} alt={item.title} />
//                               </div>
//                               <div className="title clearfix">
//                                 <div className="ttl clearfix">
//                                   <h5>{item.title}</h5>
//                                 </div>
//                                 <div className="price">
//                                   <span>₹{item.price}</span>
//                                 </div>
//                               </div>
//                               <div className="text desc">
//                                 <p>{item.description}</p>
//                               </div>

//                               <Button
//                                 onClick={() => handleAddToCart(item)}
//                                 className="bg-[#D2AC67] hover:bg-orange-600 text-white"
//                               >
//                                 Add to Cart
//                               </Button>
//                             </div>
//                           </div>
//                         </div>
//                       ))
//                     ) : (
//                       <p style={{ padding: "20px" }}>No items found in this category.</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </section>

//         <AuthModal />
//         <Footer />
//       </div>
//     </>
//   )
// }

// export default OnlineOrder
