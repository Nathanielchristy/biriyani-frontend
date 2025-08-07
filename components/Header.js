import React from 'react'
import Link from 'next/link'
import LogoutButton from './Logout'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useAuthStore } from "../lib/auth-store";



const Header = () => {
   const router = useRouter();
   const {
    isAuthenticated,
    user,
    setShowAuthModal,
  } = useAuthStore();
  // const { isAuthenticated,
  //   setShowAuthModal, } = useAuthStore();
  // const [showSignIn, setShowSignIn] = useState(false);
   
  return (
    
      <header className="main-header header-down">
      <div className="header-top">
        <div className="auto-container">
          <div className="inner clearfix">
            <div className="top-left clearfix">
              <ul className="top-info clearfix">
                <li>
                  <i className="icon far fa-map-marker-alt" />Al Ahali Building, Ground Floor, 7-A Baghdad Street, NMC Hospital Square, Al Nahda 2, Dubai
                </li>
                <li>
                  <i className="icon far fa-clock" /> Daily : 10.00 am to 11.00
                  pm
                </li>
              </ul>
            </div>
            <div className="top-right clearfix">
              <ul className="top-info clearfix">
                <li>
                  <Link href="tel:+11234567890">
                    <i className="icon far fa-phone" /> +97143395123
                </Link>
                </li>
                <li>
                  <Link href="mailto:booking@restaurant.com">
                    <i className="icon far fa-envelope" />{" "}
                    booking@biryaniwallaandco.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Header Upper */}
      <div className="header-upper">
        <div className="auto-container">
          {/* Main Box */}
          <div className="main-box clearfix">
            {/*Logo*/}
            <div className="logo-box">
              <div className="logo">
                <Link href="/" title="Biryaniwalla & Co., Al Nahda 2, Hor Al Anz, Hamriya Port, Al Barsha, Motor City, Discovery Gardens, Business Bay, Al Fahidi, Al Karama, Dubai">
                  <img
                    src="images/logo.png"
                    alt="Biryaniwalla Logo"
                    title="Biryaniwalla & Co., Al Nahda 2, Hor Al Anz, Hamriya Port, Al Barsha, Motor City, Discovery Gardens, Business Bay, Al Fahidi, Al Karama, Dubai | About"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-box clearfix">
              {/*Nav Outer*/}
              <div className="nav-outer clearfix">
                <nav className="main-menu">
                  <ul className="navigation clearfix">
                    <li className="current">
                      <Link href="/">Home</Link>
                    </li>
                  
                     <li>
                      <Link href="/online-order">Menu</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                   
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>

                    <li>
                      {isAuthenticated ? (
          <>
            <button onClick={() => router.push("/profile_page")}>
              👤 {user?.name || "Profile"}
            </button>
            <LogoutButton />
          </>
        ) : (
          <>
          <button onClick={() => setShowAuthModal(true) }>🔐 Sign In</button>
                        </>
        )}
                    </li>
                   
                  </ul>
                </nav>
                {/* Main Menu End*/}
              </div>
              {/*Nav Outer End*/}
              <div className="links-box clearfix">
                <div className="link link-btn">
                  <Link
                    href="/online-order"
                    className="theme-btn btn-style-one clearfix"
                  >
                    <span className="btn-wrap">
                      <span className="text-one">Online Order</span>
                      <span className="text-two">Online Order</span>
                    </span>
                  </Link>
                </div>
                {/* <div className="link info-toggler">
                  <button className="info-btn">
                    <span className="hamburger">
                      <span className="top-bun" />
                      <span className="meat" />
                      <span className="bottom-bun" />
                    </span>
                  </button>
                </div> */}
              </div>
              {/* Hidden Nav Toggler */}
              {/* <div className="nav-toggler">
                <button className="hidden-bar-opener">
                  <span className="hamburger">
                    <span className="top-bun" />
                    <span className="meat" />
                    <span className="bottom-bun" />
                  </span>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
    
  )
}

export default Header

