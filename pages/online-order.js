"use client"

import { useState, useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import AuthModal from "../components/auth-modal"
import { Button } from "../components/ui/button"
import { useRouter } from "next/navigation"
import { useAuthStore } from "../lib/auth-store"   // updated import path
import { useCartStore } from "../lib/cart-store"

const OnlineOrder = () => {
  const router = useRouter()
  const {
    isAuthenticated,
    setRedirectToCheckout,
    setShowAuthModal,
    redirectToCheckout,
  } = useAuthStore()
  const { addToCart } = useCartStore()

  const [menuItems, setMenuItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("Soup")

  useEffect(() => {
    if (isAuthenticated && redirectToCheckout) {
      router.push("/checkout")
      setRedirectToCheckout(false)
    }
  }, [isAuthenticated, redirectToCheckout, router, setRedirectToCheckout])
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://biriyanidev.onrender.com/api/menu/categories");
        const data = await res.json();
        setCategories(data);

        // Set default category to "Soup" or the first one
        if (data.includes("Soup")) {
          setSelectedCategory("Soup");
        } else if (data.length > 0) {
          setSelectedCategory(data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);
  useEffect(() => {
    const fetchMenu = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `https://biriyanidev.onrender.com/api/menu?category=${encodeURIComponent(selectedCategory)}`
        )
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
  }, [selectedCategory])

  // const uniqueCategories = [...new Set(menuItems.map((item) => item.category))]

  // // Find index of "Soup"
  // const soupIndex = uniqueCategories.indexOf("Soup")

  // // Categories start from "Soup" onward (if found), else all categories
  // const categories =
  //   soupIndex !== -1 ? uniqueCategories.slice(soupIndex) : uniqueCategories

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

  // useEffect(() => {
  //   if (categories.length && !categories.includes(selectedCategory)) {
  //     setSelectedCategory(categories[0])
  //   }
  // }, [categories, selectedCategory])

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

  const handleAddToCart = (item, quantity = 1) => {
    const processedItem = {
      ...item,
      price: Number.parseFloat(item.price),
      quantity,
    }
    addToCart(processedItem)
    if (isAuthenticated) {
      router.push("/checkout")
    } else {
      setRedirectToCheckout(true)
      setShowAuthModal(true)
    }
  }


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

  // const filteredItems =
  //   selectedCategory === "All"
  //     ? menuItems
  //     : menuItems.filter((item) => item.category === selectedCategory)

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
        {/* <div className="menu-backdrop" /> */}

        {/* Banner */}
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
                    {menuItems.length > 0 ? (
                      menuItems.map((item) => (
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
                                  onClick={() => handleAddToCart(item, itemCounts[item._id] || 1)}
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
