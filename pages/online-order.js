"use client"

import { useState, useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import AuthModal from "../components/auth-modal"
import { Button } from "../components/ui/button"
import { useRouter } from "next/navigation"
import { useAuthStore } from "../lib/auth-store"   // updated import path
import { useCartStore } from "../lib/cart-store"
import { FaShoppingCart } from 'react-icons/fa';

const OnlineOrder = () => {
  const router = useRouter()
  const {
    isAuthenticated,
    setRedirectToCheckout,
    setShowAuthModal,
    redirectToCheckout,
  } = useAuthStore()
  const { addToCart, decreaseQuantity, increaseQuantity, cartItems  } = useCartStore()

  const [menuItems, setMenuItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

   // Calculate total quantity in cart for badge
  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  )

  useEffect(() => {
    if (isAuthenticated && redirectToCheckout) {
      router.push("/checkout")
      setRedirectToCheckout(false)
    }
  }, [isAuthenticated, redirectToCheckout, router, setRedirectToCheckout])

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
  const uniqueCategories = [...new Set(menuItems.map((item) => item.category))]

  // Find index of "Soup"
  const soupIndex = uniqueCategories.indexOf("Soup")

  // Categories start from "Soup" onward (if found), else all categories
  const categories =
    soupIndex !== -1 ? uniqueCategories.slice(soupIndex) : uniqueCategories

  // const categories = ["All", ...new Set(menuItems.map((item) => item.category))]

  // const handleAddToCart = (item) => {
  //   const processedItem = {
  //     ...item,
  //     price: Number.parseFloat(item.price),
  //   }
  //   addToCart(processedItem)
  //   if (isAuthenticated) {
  //     router.push("/checkout")
  //   } else {
  //     setRedirectToCheckout(true)
  //     setShowAuthModal(true)
  //   }
  // }

  useEffect(() => {
    if (categories.length && !categories.includes(selectedCategory)) {
      setSelectedCategory(categories[0])
    }
  }, [categories, selectedCategory])

  const [itemCounts, setItemCounts] = useState({})

const incrementCount = (id) => {
  setItemCounts((prev) => ({
    ...prev,
    [id]: (prev[id] || 1) + 1,
  }))
}

const decrementCount = (id) => {
  setItemCounts((prev) => ({
    ...prev,
    [id]: prev[id] > 1 ? prev[id] - 1 : 1,
  }))
}

// const handleAddToCart = (item) => {
//   const processedItem = {
//     ...item,
//     price: Number.parseFloat(item.price),
//     quantity:1,
//   }
//   addToCart(processedItem)
//   if (isAuthenticated) {
//     router.push("/checkout")
//   } else {
//     setRedirectToCheckout(true)
//     setShowAuthModal(true)
//   }
// }


  // const handleAddToCart = (item) => {
  //   const processedItem = {
  //     ...item,
  //     price: Number.parseFloat(item.price),
  //   }
  //   addToCart(processedItem)
  //   if (isAuthenticated) {
  //     router.push("/checkout")
  //   } else {
  //     setRedirectToCheckout(true)
  //     setShowAuthModal(true)
  //   }
  // }

  const handleAddToCart = (item) => {
  const qty = itemCounts[item._id] || 1;
  const processedItem = {
    ...item,
    price: Number.parseFloat(item.price),
  };
  addToCart(processedItem, qty);

  if (isAuthenticated) {
    router.push("/online-order");
  } else {
    setRedirectToCheckout(true);
    setShowAuthModal(true);
  }
};


  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory)

  return (
    <>
      {/* HEAD STYLES */}
      

      <div className="page-wrapper">
      
       
        <section className="inner-banner">
          <div
            className="image-layer"
            style={{ backgroundImage: "url(images/background/banner-image-2.jpg)" }}
          />
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
         <div style={{ position: "fixed", top: 20, right: 20, cursor:"pointer", zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,  }}  onClick={() => router.push("/checkout")}
          aria-label="Go to checkout">
      <FaShoppingCart size={30} color="#000" />
      {totalQuantity > 0 && (
            <span
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 7px",
                fontSize: "12px",
                fontWeight: "bold",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              {totalQuantity}
            </span>
          )}
    </div>
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
                    {filteredItems.length > 0 ? (
                      filteredItems.map((item) => (
                        <div
                          className="menu-col col-lg-6 col-md-12 col-sm-12"
                          key={item._id}
                        >
                          <div className="dish-block">
                            <div className="inner-box">
                              <div className="dish-image">
                                <img
                                  src={item.imageUrl || "/placeholder.svg"}
                                  alt={item.title}
                                />
                              </div>
                              <div className="title clearfix">
                                <div className="ttl clearfix">
                                  <h5>{item.name}</h5>
                                </div>
                                <div className="price">
                                  <span>AED{item.price}</span>
                                </div>
                              </div>
                              <div className="text desc">
                                <p>{item.description}</p>
                              </div>
                              <div
        className="quantity-control"
        style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px" }}
      >
       

        <Button
          onClick={() => handleAddToCart(item)}
          className="bg-[#D2AC67] hover:bg-orange-600 text-white"
        >
          Add to Cart 

          
        </Button>
         <button
          onClick={() => decrementCount(item._id)}
          style={{ padding: "5px 10px", cursor: "pointer" }}
        >
          -
        </button>
        <span>{itemCounts[item._id] || 1}</span>
        <button
          onClick={() => incrementCount(item._id)}
          style={{ padding: "5px 10px", cursor: "pointer" }}
        >
          +
        </button>
        </div>
                              {/* <Button
                                onClick={() => handleAddToCart(item)}
                                className="bg-[#D2AC67] hover:bg-orange-600 text-white"
                              >
                                Add to Cart
                              </Button> */}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p style={{ padding: "20px" }}>
                        No items found in this category.
                      </p>
                    )}
                  </div>
               

        {/* Modal & Footer */}
                  {/* <div className="row clearfix">
                    {filteredItems.map((item) => (
                      <div className="menu-col col-lg-6 col-md-12 col-sm-12" key={item._id}>
                        <div className="dish-block">
                          <div className="inner-box">
                            <div className="dish-image">
                              <img src={item.imageUrl || "/placeholder.svg"} alt={item.title} />
                            </div>
                            <div className="title clearfix">
                              <div className="ttl clearfix">
                                <h5>{item.name}</h5>
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
                  </div> */}
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
