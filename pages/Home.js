import React from 'react'
import BannerSlider from '../components/BannerSection'
import MenuTabs from '../components/MenuTab'
import SpecialOfferSection from '../components/SpecialOffer'
import Headers from '../components/Header'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
   <>
   <>
  <link href="css/bootstrap.css" rel="stylesheet" />
  <link href="css/style.css" rel="stylesheet" />
  <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
  <link rel="icon" href="images/favicon.png" type="image/x-icon" />
  {/* Responsive */}
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
  />
  <link href="css/responsive.css" rel="stylesheet" />
  {/*[if lt IE 9]><![endif]*/}
</>

  <div className="page-wrapper">
    {/* Preloader */}
    {/* <div className="loader-wrap">
      <div className="preloader">
        <div className="preloader-close">x</div>
        <div id="handle-preloader" className="handle-preloader">
          <div className="animation-preloader">
            <div className="spinner" />
            <div className="txt-loading">
              <span data-text-preloader="D" className="letters-loading">
                D
              </span>
              <span data-text-preloader="E" className="letters-loading">
                E
              </span>
              <span data-text-preloader="L" className="letters-loading">
                L
              </span>
              <span data-text-preloader="I" className="letters-loading">
                I
              </span>
              <span data-text-preloader="C" className="letters-loading">
                C
              </span>
              <span data-text-preloader="I" className="letters-loading">
                I
              </span>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/* Preloader End */}
    {/* Main Header*/}
    {/* <header className="main-header header-down">
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
                  <a href="tel:+11234567890">
                    <i className="icon far fa-phone" /> +97143395123
                  </a>
                </li>
                <li>
                  <a href="mailto:booking@restaurant.com">
                    <i className="icon far fa-envelope" />{" "}
                    booking@biryaniwallaandco.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
     
      <div className="header-upper">
        <div className="auto-container">
         
          <div className="main-box clearfix">
           
            <div className="logo-box">
              <div className="logo">
                <a href="index.html" title="Biryaniwalla & Co., Al Nahda 2, Hor Al Anz, Hamriya Port, Al Barsha, Motor City, Discovery Gardens, Business Bay, Al Fahidi, Al Karama, Dubai">
                  <img
                    src="images/logo.png"
                    alt="Biryaniwalla Logo"
                    title="Biryaniwalla & Co., Al Nahda 2, Hor Al Anz, Hamriya Port, Al Barsha, Motor City, Discovery Gardens, Business Bay, Al Fahidi, Al Karama, Dubai | About"
                  />
                </a>
              </div>
            </div>
            <div className="nav-box clearfix">
             
              <div className="nav-outer clearfix">
                <nav className="main-menu">
                  <ul className="navigation clearfix">
                    <li className="current">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="dropdown has-mega-menu">
                      <a href="menu-list.html">Menus</a>
                      <ul>
                        <li>
                          <div className="mega-menu">
                            <div className="menu-inner">
                              <div className="auto-container">
                                <div className="row clearfix">
                                  <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                    <div className="image">
                                      <a href="menu-list-1.html">
                                        <img
                                          src="images/resource/menu-image-1.jpg"
                                          alt=""
                                        />
                                      </a>
                                    </div>
                                    <div className="title">
                                      <a href="menu-list-1.html">Menu list 1</a>
                                    </div>
                                  </div>
                                  <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                    <div className="image">
                                      <a href="menu-list-2.html">
                                        <img
                                          src="images/resource/menu-image-2.jpg"
                                          alt=""
                                        />
                                      </a>
                                    </div>
                                    <div className="title">
                                      <a href="menu-list-2.html">Menu list 2</a>
                                    </div>
                                  </div>
                                  <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                    <div className="image">
                                      <a href="menu-list-3.html">
                                        <img
                                          src="images/resource/menu-image-3.jpg"
                                          alt=""
                                        />
                                      </a>
                                    </div>
                                    <div className="title">
                                      <a href="menu-list-3.html">Menu list 3</a>
                                    </div>
                                  </div>
                                  <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                    <div className="image">
                                      <a href="menu-list-4.html">
                                        <img
                                          src="images/resource/menu-image-4.jpg"
                                          alt=""
                                        />
                                      </a>
                                    </div>
                                    <div className="title">
                                      <a href="menu-list-4.html">Menu list 4</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="our-chef.html">Our chefs</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Pages</a>
                      <ul>
                        <li>
                          <a href="#">Dropdown Menu 1</a>
                        </li>
                        <li>
                          <a href="#">Dropdown Menu 2</a>
                        </li>
                        <li>
                          <a href="#">Dropdown Menu 3</a>
                        </li>
                        <li className="dropdown">
                          <a href="#">Dropdown Menu 4</a>
                          <ul>
                            <li>
                              <a href="#">Dropdown Menu level 2</a>
                            </li>
                            <li>
                              <a href="#">Dropdown Menu level 2</a>
                            </li>
                            <li>
                              <a href="#">Dropdown Menu Level 3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Dropdown Lorem 5</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact</a>
                    </li>
                  </ul>
                </nav>
               
              </div>
             
              <div className="links-box clearfix">
                <div className="link link-btn">
                  <a
                    href="reservation-opentable.html"
                    className="theme-btn btn-style-one clearfix"
                  >
                    <span className="btn-wrap">
                      <span className="text-one">Online Order</span>
                      <span className="text-two">Online Order</span>
                    </span>
                  </a>
                </div>
                <div className="link info-toggler">
                  <button className="info-btn">
                    <span className="hamburger">
                      <span className="top-bun" />
                      <span className="meat" />
                      <span className="bottom-bun" />
                    </span>
                  </button>
                </div>
              </div>
            
              <div className="nav-toggler">
                <button className="hidden-bar-opener">
                  <span className="hamburger">
                    <span className="top-bun" />
                    <span className="meat" />
                    <span className="bottom-bun" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header> */}
    <Headers/>
    {/*End Main Header */}
    {/*Menu Backdrop*/}
    <div className="menu-backdrop" />
    {/* Hidden Navigation Bar */}
    <section className="hidden-bar">
      {/* Hidden Bar Wrapper */}
      <div className="inner-box">
        <div className="cross-icon hidden-bar-closer">
          <span className="far fa-close" />
        </div>
        <div className="logo-box">
          <a href="#" title="Biryaniwall & Co. The Pride of Hyderabad India UAE">
            <img
              src="images/resource/sidebar-logo.png"
              alt=""
              title="Biryaniwall & Co. The Pride of Hyderabad India UAE"
            />
          </a>
        </div>
        {/* .Side-menu */}
        <div className="side-menu">
          <ul className="navigation clearfix">
            <li className="current">
              <a href="/index">Home</a>
            </li>
            <li className="dropdown">
              <a href="menu-list.html">Menus</a>
              <ul>
                <li>
                  <a href="menu-list-1.html">Menu List 1</a>
                </li>
                <li>
                  <a href="menu-list-2.html">Menu List 2</a>
                </li>
                <li>
                  <a href="menu-list-3.html">Menu List 3</a>
                </li>
                <li>
                  <a href="menu-list-4.html">Menu List 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="about.html">About Us</a>
            </li>
            <li>
              <a href="our-chef.html">Our chefs</a>
            </li>
            <li className="dropdown">
              <a href="#">Pages</a>
              <ul>
                <li>
                  <a href="#">Dropdown Menu 1</a>
                </li>
                <li>
                  <a href="#">Dropdown Menu 2</a>
                </li>
                <li>
                  <a href="#">Dropdown Menu 3</a>
                </li>
                <li className="dropdown">
                  <a href="#">Dropdown Menu 4</a>
                  <ul>
                    <li>
                      <a href="#">Dropdown Menu level 2</a>
                    </li>
                    <li>
                      <a href="#">Dropdown Menu level 2</a>
                    </li>
                    <li>
                      <a href="#">Dropdown Menu Level 3</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Dropdown Lorem 5</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact-us.html">Contact</a>
            </li>
          </ul>
        </div>
        {/* /.Side-menu */}
        <h2>Visit Us</h2>
        <ul className="info">
          <li>
            Restaurant St, Delicious City, <br />
            London 9578, UK
          </li>
          <li>Open: 9.30 am - 2.30pm</li>
          <li>
            <a href="mailto:booking@domainame.com">booking@domainame.com</a>
          </li>
        </ul>
        <div className="separator">
          <span />
        </div>
        <div className="booking-info">
          <div className="bk-title">Booking request</div>
          <div className="bk-no">
            <a href="tel:+88-123-123456">+88-123-123456</a>
          </div>
        </div>
      </div>
      {/* / Hidden Bar Wrapper */}
    </section>
    {/* / Hidden Bar */}
    {/*Info Back Drop*/}
    <div className="info-back-drop" />
    {/* Hidden Bar */}
    <section className="info-bar">
      <div className="inner-box">
        <div className="cross-icon">
          <span className="far fa-close" />
        </div>
        <div className="logo-box">
          <a href="index.html" title="Delici - Restaurants HTML Template">
            <img
              src="images/resource/sidebar-logo.png"
              alt=""
              title="Delici - Restaurants HTML Template"
            />
          </a>
        </div>
        <div className="image-box">
          <img src="images/resource/sidebar-image.jpg" alt="" title="" />
        </div>
        <h2>Visit Us</h2>
        <ul className="info">
          <li>
            Restaurant St, Delicious City, <br />
            London 9578, UK
          </li>
          <li>Open: 9.30 am - 2.30pm</li>
          <li>
            <a href="mailto:booking@domainame.com">booking@domainame.com</a>
          </li>
        </ul>
        <div className="separator">
          <span />
        </div>
        <div className="booking-info">
          <div className="bk-title">Booking request</div>
          <div className="bk-no">
            <a href="tel:+88-123-123456">+88-123-123456</a>
          </div>
        </div>
      </div>
    </section>
    {/*End Hidden Bar */}
    {/* Banner Section */}
   
    <BannerSlider/>
    
    {/*End Banner Section */}
    {/*We Offer Section*/}
    <section className="we-offer-section">
      <div className="left-bot-bg">
        <img src="images/background/bg-1.png" alt="" title="" />
      </div>
      <div className="right-top-bg">
        <img src="images/background/bg-2.png" alt="" title="" />
      </div>
      <div className="auto-container">
        <div className="title-box centered">
          <div className="subtitle">
            <span>Our Ethos</span>
          </div>
          <div className="pattern-image">
            <img src="images/icons/separator.svg" alt="" title="" />
          </div>
          <h2>OUR USP is Purely in The Way We Work</h2>
          <div className="text">
            What sets BWCO apart is originality in recipes, purity, consistency in taste, and service excellence; focusing on a complete end-to-end customer centric experience. We value our customers’ feedback and strive for continuous enhancement in our food and service delivery; maintaining and honoring the trust placed in us by our customers. We simply love delighting the UAE and India crowd and thrive on them enjoying our food.
          </div>
        </div>
        <div className="row justify-content-center clearfix">
          {/*Block*/}
          <div className="offer-block col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="image">
                <a href="menu-list-1.html">
                  <img src="images/resource/biryani.png" alt="BWCO Biryani" />
                </a>
              </div>
              <h3>
                <a href="menu-list-1.html">BWCO Biryani</a>
              </h3>
              <div className="more-link">
                <a href="/online-order">view menu</a>
              </div>
            </div>
          </div>
          {/*Block*/}
          <div className="offer-block col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div className="image">
                <a href="menu-list-2.html">
                  <img src="images/resource/dessert.png" alt="Dessert" />
                </a>
              </div>
              <h3>
                <a href="menu-list-2.html">Dessert</a>
              </h3>
              <div className="more-link">
                <a href="/online-order">view menu</a>
              </div>
            </div>
          </div>
          {/*Block*/}
          <div className="offer-block col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="600ms"
            >
              <div className="image">
                <a href="menu-list-3.html">
                  <img src="images/resource/offer-image-3.jpg" alt="" />
                </a>
              </div>
              <h3>
                <a href="/online-order">Beverages</a>
              </h3>
              <div className="more-link">
                <a href="/online-order">view menu</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Story Section*/}
    <section className="story-section">
      <div className="left-bg">
        <img src="images/background/bg-3.png" alt="" title="" />
      </div>
      <div className="auto-container">
        <div className="row clearfix">
          {/*Col*/}
          <div className="text-col col-xl-5 col-lg-5 col-md-12 col-sm-12">
            <div
              className="inner wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="title-box centered">
                <div className="subtitle">
                  <span>Best Biryani Restaurant in Dubai</span>
                </div>
                <div className="pattern-image">
                  <img src="images/icons/separator.svg" alt="" title="" />
                </div>
                <h3>Discover the Perfect Blend of Spices and Flavors</h3>
                <div className="text">
                 Satisfy your cravings today and get a load of the best hyderabadi biryani in Dubai at Biryaniwalla and Co. We are the pride of Hyderabad and as a Hyderabadi biryani restaurant in Dubai, our goal is to have you taste our exotic dishes made by our passionate cooks in the kitchen! At Biryaniwalla and Co., we believe that biryani is more than just a dish - it's an experience. 
                </div>
              </div>
              <div className="booking-info">
                <div className="bk-title">Book Through Call</div>
                <div className="bk-no">
                  <a href="tel:+97143395123">+97143395123</a>
                </div>
                <div className="link-box">
                  <a
                    href="about.html"
                    className="theme-btn btn-style-two clearfix"
                  >
                    <span className="btn-wrap">
                      <span className="text-one">Read More</span>
                      <span className="text-two">Read More</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*Col*/}
          <div className="image-col col-xl-7 col-lg-7 col-md-12 col-sm-12">
            <div
              className="inner wow fadeInRight"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="round-stamp">
                <img src="images/resource/badge-1.png" alt="" />
              </div>
              <div className="images parallax-scene-1">
                <div className="image" data-depth="0.15">
                  <img src="images/resource/image-1.jpg" alt="" />
                </div>
                <div className="image" data-depth="0.30">
                  <img src="images/resource/image-2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Special Dish Section*/}
    <section className="special-dish">
      <div className="bottom-image">
        <img src="images/resource/image-3.png" alt="" title="" />
      </div>
      <div className="outer-container">
        <div className="row clearfix">
          {/*Col*/}
          <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div
              className="inner wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div
                className="image-layer"
                style={{
                  backgroundImage: "url(images/background/image-1.jpg)"
                }}
              />
              <div className="image">
                <img src="images/background/image-1.jpg" alt="" />
              </div>
            </div>
          </div>
          {/*Col*/}
          <div className="content-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="right-bg">
              <img src="images/background/bg-4.png" alt="" title="" />
            </div>
            <div
              className="inner wow fadeInRight"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="title-box">
                <span className="badge-icon">
                  <img src="images/resource/badge-2.png" alt="" title="" />
                </span>
                <div className="subtitle">
                  <span>Only at Biryaniwalla and Co</span>
                </div>
                <div className="pattern-image">
                  <img src="images/icons/separator.svg" alt="" title="" />
                </div>
                <h3>Experience the Authentic Taste of Biryani in Dubai</h3>
                <div className="text">
                  Biryani should be accessible to every person in every culture. The source of our food is meant to be tasted by a diverse and multicultural community of diners who share our appreciation for great cuisine. Food is a universal language and Biryaniwalla and Co. understands this very well. That’s why we also offer a range of options for dietary restrictions and preferences, including vegetarian and vegan dishes. You won’t ever have to worry about not knowing what you should eat at Biryaniwalla and Co. because we make sure to cater to your needs.</div>
                  {/* <div className="text">
                  As a biryani restaurant in Dubai, we had our humble beginnings in the 80s. Now, we have branches across the UAE so people from all walks of life and culture can have a taste of our pride and joy. In Deira but don’t want to travel to our main branch? Get a taste of the best biryani in Deira Dubai at Biryaniwalla and Co. Living in Al Nahda? No problem! We’ve got the best biryani in Al Nahda Dubai as well. For the best biryani in Karama, expect to find us there too! Biryaniwalla and Co. is everywhere and we might just be in a corner or street near you!


                </div> */}
              </div>
              {/* <div className="price">
                <span className="old">$40.00</span>{" "}
                <span className="new">$20.00</span>
              </div> */}
              <div className="link-box">
                <a
                  href="menu-list-1.html"
                  className="theme-btn btn-style-two clearfix"
                >
                  <span className="btn-wrap">
                    <span className="text-one">view all menu</span>
                    <span className="text-two">view all menu</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Menu Section*/}
   
    <MenuTabs/>

    {/*Special Offer Section*/}
    
    <SpecialOfferSection/>
    {/*Testimonials Section*/}
    {/* <section className="testimonials-section">
      <div
        className="image-layer"
        style={{ backgroundImage: "url(images/background/image-2.jpg)" }}
      />
      <div className="auto-container">
        <div className="carousel-box">
          <div className="testi-top owl-theme owl-carousel">
            <div className="slide-item">
              <div className="slide-content">
                <div className="quotes">”</div>
                <div className="text quote-text">
                  I wanted to thank you for inviting me down for that amazing
                  dinner the other night. The food was extraordinary.
                </div>
              </div>
            </div>
            <div className="slide-item">
              <div className="slide-content">
                <div className="quotes">”</div>
                <div className="text quote-text">
                  I wanted to thank you for inviting me down for that amazing
                  dinner the other night. The food was extraordinary.
                </div>
              </div>
            </div>
            <div className="slide-item">
              <div className="slide-content">
                <div className="quotes">”</div>
                <div className="text quote-text">
                  I wanted to thank you for inviting me down for that amazing
                  dinner the other night. The food was extraordinary.
                </div>
              </div>
            </div>
            <div className="slide-item">
              <div className="slide-content">
                <div className="quotes">”</div>
                <div className="text quote-text">
                  I wanted to thank you for inviting me down for that amazing
                  dinner the other night. The food was extraordinary.
                </div>
              </div>
            </div>
            <div className="slide-item">
              <div className="slide-content">
                <div className="quotes">”</div>
                <div className="text quote-text">
                  I wanted to thank you for inviting me down for that amazing
                  dinner the other night. The food was extraordinary.
                </div>
              </div>
            </div>
            <div className="slide-item">
              <div className="slide-content">
                <div className="quotes">”</div>
                <div className="text quote-text">
                  I wanted to thank you for inviting me down for that amazing
                  dinner the other night. The food was extraordinary.
                </div>
              </div>
            </div>
          </div>
          <div className="separator">
            <span />
            <span />
            <span />
          </div>
          <div className="thumbs-carousel-box">
            <div className="testi-thumbs owl-theme owl-carousel">
              <div className="slide-item">
                <div className="image">
                  <img src="images/resource/author-thumb-1.jpg" alt="" />
                </div>
                <div className="auth-title">Sam Jhonson</div>
              </div>
              <div className="slide-item">
                <div className="image">
                  <img src="images/resource/author-thumb-2.jpg" alt="" />
                </div>
                <div className="auth-title">Ian Botham</div>
              </div>
              <div className="slide-item">
                <div className="image">
                  <img src="images/resource/author-thumb-3.jpg" alt="" />
                </div>
                <div className="auth-title">Dan Bitson</div>
              </div>
              <div className="slide-item">
                <div className="image">
                  <img src="images/resource/author-thumb-1.jpg" alt="" />
                </div>
                <div className="auth-title">Sam Jhonson</div>
              </div>
              <div className="slide-item">
                <div className="image">
                  <img src="images/resource/author-thumb-2.jpg" alt="" />
                </div>
                <div className="auth-title">Ian Botham</div>
              </div>
              <div className="slide-item">
                <div className="image">
                  <img src="images/resource/author-thumb-3.jpg" alt="" />
                </div>
                <div className="auth-title">Dan Bitson</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/*Reservation Section*/}
    <section className="reserve-section">
      <div className="auto-container">
        <div className="outer-box">
          <div className="row clearfix">
            <div className="reserv-col col-lg-8 col-md-12 col-sm-12">
              <div className="inner">
                <div className="title">
                  <h2>Online Reservation</h2>
                  <div className="request-info">
                    Booking request <a href="#">+97143395123</a> or fill out
                    the order form
                  </div>
                </div>
                <div className="default-form reservation-form">
                  <form method="post" action="index.html">
                    <div className="row clearfix">
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <div className="field-inner">
                          <input
                            type="text"
                            name="fieldname"
                            defaultValue=""
                            placeholder="Your Name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <div className="field-inner">
                          <input
                            type="text"
                            name="fieldname"
                            defaultValue=""
                            placeholder="Phone Number"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div className="field-inner">
                          <span className="alt-icon far fa-user" />
                          <select className="l-icon">
                            <option>1 Person</option>
                            <option>2 Person</option>
                            <option>3 Person</option>
                            <option>4 Person</option>
                            <option>5 Person</option>
                            <option>6 Person</option>
                            <option>7 Person</option>
                          </select>
                          <span className="arrow-icon far fa-angle-down" />
                        </div>
                      </div>
                      <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div className="field-inner">
                          <span className="alt-icon far fa-calendar" />
                          <input
                            className="l-icon datepicker"
                            type="text"
                            name="fieldname"
                            defaultValue=""
                            placeholder="DD-MM-YYYY"
                            required=""
                            readOnly=""
                          />
                          <span className="arrow-icon far fa-angle-down" />
                        </div>
                      </div>
                      <div className="form-group col-lg-4 col-md-12 col-sm-12">
                        <div className="field-inner">
                          <span className="alt-icon far fa-clock" />
                          <select className="l-icon">
                            <option>08 : 00 am</option>
                            <option>09 : 00 am</option>
                            <option>10 : 00 am</option>
                            <option>11 : 00 am</option>
                            <option>12 : 00 pm</option>
                            <option>01 : 00 pm</option>
                            <option>02 : 00 pm</option>
                            <option>03 : 00 pm</option>
                            <option>04 : 00 pm</option>
                            <option>05 : 00 pm</option>
                            <option>06 : 00 pm</option>
                            <option>07 : 00 pm</option>
                            <option>08 : 00 pm</option>
                            <option>09 : 00 pm</option>
                            <option>10 : 00 pm</option>
                          </select>
                          <span className="arrow-icon far fa-angle-down" />
                        </div>
                      </div>
                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <div className="field-inner">
                          <textarea
                            name="fieldname"
                            placeholder="Message"
                            required=""
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <div className="field-inner">
                          <button
                            type="submit"
                            className="theme-btn btn-style-one clearfix"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">book a table</span>
                              <span className="text-two">book a table</span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="info-col col-lg-4 col-md-12 col-sm-12">
              <div className="inner">
                <div className="title">
                  <h2>Contact Us</h2>
                </div>
                <div className="data">
                  <div className="booking-info">
                    <div className="bk-title">Booking request</div>
                    <div className="bk-no">
                      <a href="tel:+88-123-123456">+97143395123</a>
                    </div>
                  </div>
                  <div className="separator">
                    <span />
                  </div>
                  <ul className="info">
                    <li>
                      <strong>Location</strong>
                      <br />
                     Al Ahali Building, Ground Floor, 7-A Baghdad Street, NMC Hospital Square, Al Nahda 2, Dubai
                    </li>
                    <li>
                      <strong>Lunch Time</strong>
                      <br />
                      Monday to Sunday <br />
                      11.00 am - 2.30pm
                    </li>
                    <li>
                      <strong>Dinner Time</strong>
                      <br />
                      Monday to Sunday <br />
                      05.00 pm - 10.00pm
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Why Us Section*/}
    <section className="why-us">
      <div className="left-bg">
        <img src="images/background/bg-8.png" alt="" title="" />
      </div>
      <div className="right-bg">
        <img src="images/background/bg-7.png" alt="" title="" />
      </div>
      <div className="auto-container">
        <div className="title-box centered">
          <div className="subtitle">
            <span>why choose us</span>
          </div>
          <div className="pattern-image">
            <img src="images/icons/separator.svg" alt="" title="" />
          </div>
          <h2>Our Strength</h2>
        </div>
        <div className="row clearfix">
          {/*Block*/}
          <div className="why-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="icon-box">
                <img src="images/resource/why-icon-1.png" alt="" />
              </div>
              <h4>Fresh Ingredients</h4>
              <div className="text">
               What’s better than your typical ingredients? Fresh ones! Biryaniwalla and Co. ensures the quality of the dishes by providing only the freshest of ingredients so every bite you take is worth it!
              </div>
            </div>
          </div>
          {/*Block*/}
          <div className="why-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div className="icon-box">
                <img src="images/resource/why-icon-2.png" alt="" />
              </div>
              <h4>Big Servings</h4>
              <div className="text">
                Sharing is caring! We believe that serving in big portions gathers friends and family together. With our big portions, eating biryani in Dubai with the most important people in your life
              </div>
            </div>
          </div>
          {/*Block*/}
          <div className="why-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="600ms"
            >
              <div className="icon-box">
                <img src="images/resource/why-icon-3.png" alt="" />
              </div>
              <h4>Cooked to Perfection</h4>
              <div className="text">
               We don’t just serve for the sake of serving. Biryaniwalla cooks to perfection and serves the best chicken biryani in Dubai. 
              </div>
            </div>
          </div>
          {/*Block*/}
          <div className="why-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="900ms"
            >
              <div className="icon-box">
                <img src="images/resource/why-icon-4.png" alt="" />
              </div>
              <h4>Flavorful Dishes</h4>
              <div className="text">
               Biryaniwalla and Co. makes use of all the spices available to make our food a unique experience to discover. From our exotic masala rice to our heavenly and best mutton biryani in Dubai
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Featured Links Section*/}
    {/* <section className="featured-links">
      <div className="outer-container">
        <div className="row clearfix">
         
          <div className="link-block col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="text-block">
                <div className="bl-inner">
                  <div className="content">
                    <div className="subtitle">World’s Favourite Biryani</div>
                    <h3>Full of savoury flavours, a testament to our Brand</h3>
                    <div className="text">
                     Taste, as you like it – Perfect Customization to delight your palate.
Eat at Biryaniwalla and Co. or order in – a memorable time with your loved ones
                    </div>
                    <div className="link">
                      <a href="menu-list-1.html" className="theme-btn">
                        <span>Order Online</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-box">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: "url(images/resource/featured-1.jpg)"
                  }}
                />
                <div className="image">
                  <img src="images/resource/featured-1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="link-block alternate col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div className="image-box">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: "url(images/resource/featured-2.jpg)"
                  }}
                />
                <div className="image">
                  <img src="images/resource/handi1.png" alt="" />
                </div>
              </div>
              <div className="text-block">
                <div className="bl-inner">
                  <div className="content">
                    <div className="subtitle">Latest</div>
                    <h3>Upcoming Events</h3>
                    <div className="text">
                      Simply dummy printing and setting.
                    </div>
                    <div className="link">
                      <a href="menu-list-2.html" className="theme-btn">
                        <span>join event</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="link-block col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div
              className="inner wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="600ms"
            >
              <div className="text-block">
                <div className="bl-inner">
                  <div className="content">
                    <div className="subtitle">selected</div>
                    <h3>Chef Choice</h3>
                    <div className="text">
                      Dummy printing lorem Ipsum simply.
                    </div>
                    <div className="link">
                      <a href="menu-list-3.html" className="theme-btn">
                        <span>view menu</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-box">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: "url(images/resource/featured-3.jpg)"
                  }}
                />
                <div className="image">
                  <img src="images/resource/featured-3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/*Team Section*/}
    {/* <section className="team-section">
      <div className="left-bg">
        <img src="images/background/bg-21.png" alt="" title="" />
      </div>
      <div className="right-bg">
        <img src="images/background/bg-9.png" alt="" title="" />
      </div>
      <div className="auto-container">
        <div className="title-box centered">
          <div className="subtitle">
            <span>experienced team</span>
          </div>
          <div className="pattern-image">
            <img src="images/icons/separator.svg" alt="" title="" />
          </div>
          <h2>Meet Our Chef</h2>
        </div>
        <div className="row justify-content-center clearfix">
        
          <div className="team-block col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="image">
                <img src="images/resource/team-1.jpg" alt="" />
                <div className="overlay-box">
                  <div className="overlay-inner">
                   
                    <ul className="social-box">
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          className="fab fa-facebook-f"
                        />
                      </li>
                      <li>
                        <a
                          href="https://www.twitter.com/"
                          className="fab fa-twitter"
                        />
                      </li>
                      <li>
                        <a
                          href="https://dribbble.com/"
                          className="fab fa-dribbble"
                        />
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/"
                          className="fab fa-linkedin"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <h3>
                <a href="menu-list.html">Willium Joe</a>
              </h3>
              <div className="designation">Master chef</div>
              <div className="text desc">
                Lorem Ipsum is simply dummy printing and typeset industry lorem
                Ipsum has been the industrys.
              </div>
            </div>
          </div>
         
          <div className="team-block col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div className="image">
                <img src="images/resource/team-2.jpg" alt="" />
                <div className="overlay-box">
                  <div className="overlay-inner">
                   
                    <ul className="social-box">
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          className="fab fa-facebook-f"
                        />
                      </li>
                      <li>
                        <a
                          href="https://www.twitter.com/"
                          className="fab fa-twitter"
                        />
                      </li>
                      <li>
                        <a
                          href="https://dribbble.com/"
                          className="fab fa-dribbble"
                        />
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/"
                          className="fab fa-linkedin"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <h3>
                <a href="menu-list.html">Steave Den</a>
              </h3>
              <div className="designation">Master chef</div>
              <div className="text desc">
                Lorem Ipsum is simply dummy printing and typeset industry lorem
                Ipsum has been the industrys.
              </div>
            </div>
          </div>
         
          <div className="team-block col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="600ms"
            >
              <div className="image">
                <img src="images/resource/team-3.jpg" alt="" />
                <div className="overlay-box">
                  <div className="overlay-inner">
                  
                    <ul className="social-box">
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          className="fab fa-facebook-f"
                        />
                      </li>
                      <li>
                        <a
                          href="https://www.twitter.com/"
                          className="fab fa-twitter"
                        />
                      </li>
                      <li>
                        <a
                          href="https://dribbble.com/"
                          className="fab fa-dribbble"
                        />
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/"
                          className="fab fa-linkedin"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <h3>
                <a href="menu-list.html">Lily Sopy</a>
              </h3>
              <div className="designation">Master chef</div>
              <div className="text desc">
                Lorem Ipsum is simply dummy printing and typeset industry lorem
                Ipsum has been the industrys.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/*Intro Section*/}
    {/* <section className="intro-section">
      <div
        className="image-layer"
        style={{ backgroundImage: "url(images/background/image-3.jpg)" }}
      />
      <div className="auto-container">
        <div className="content-box">
          <div className="title-box centered">
            <div className="subtitle">
              <span>amazing experience</span>
            </div>
            <div className="pattern-image">
              <img src="images/icons/separator.svg" alt="" title="" />
            </div>
            <h2>Watch Our Video</h2>
          </div>
          <div className="play-btn">
            <a
              href="https://www.youtube.com/watch?v=dZ9O_l1dIzs"
              className="lightbox-image theme-btn"
            >
              <span className="icon fal fa-play">
                <i className="ripple" />
              </span>
            </a>
          </div>
          <div className="separator">
            <span />
            <span />
            <span />
          </div>
          <h3>
            A modern restaurant with a menu that will make your mouth water.
          </h3>
          <div className="auth-title">Willium Joe - Master chef</div>
        </div>
        <div className="fact-counter">
          <div className="row clearfix">
            <div className="fact-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner clearfix">
                <div className="fact-count">
                  <div className="count-box">
                    <span
                      className="count-text"
                      data-stop={150}
                      data-speed={2000}
                    >
                      0
                    </span>
                    <i>+</i>
                  </div>
                </div>
                <div className="fact-title">
                  daily <br />
                  order
                </div>
              </div>
            </div>
            <div className="fact-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner clearfix">
                <div className="fact-count">
                  <div className="count-box">
                    <span
                      className="count-text"
                      data-stop={82}
                      data-speed={1500}
                    >
                      0
                    </span>
                    <i>+</i>
                  </div>
                </div>
                <div className="fact-title">
                  Special <br />
                  Dishes
                </div>
              </div>
            </div>
            <div className="fact-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner clearfix">
                <div className="fact-count">
                  <div className="count-box">
                    <span
                      className="count-text"
                      data-stop={35}
                      data-speed={1000}
                    >
                      0
                    </span>
                    <i>+</i>
                  </div>
                </div>
                <div className="fact-title">
                  expert <br />
                  chef
                </div>
              </div>
            </div>
            <div className="fact-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner clearfix">
                <div className="fact-count">
                  <div className="count-box">
                    <span
                      className="count-text"
                      data-stop={10}
                      data-speed={1000}
                    >
                      0
                    </span>
                    <i>+</i>
                  </div>
                </div>
                <div className="fact-title">
                  awards <br />
                  won
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/*Recnt Updates Section*/}
    {/* <section className="news-section">
      <div className="auto-container">
        <div className="title-box centered">
          <div className="subtitle">
            <span>recent updates</span>
          </div>
          <div className="pattern-image">
            <img src="images/icons/separator.svg" alt="" title="" />
          </div>
          <h2>Upcoming Event</h2>
        </div>
        <div className="row justify-content-center clearfix">
        
          <div className="news-block col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="image-box">
                <div className="date">
                  <span>15/09/2022</span>
                </div>
                <div className="image">
                  <a href="#">
                    <img src="images/resource/news-2.jpg" alt="" />
                  </a>
                </div>
                <div className="over-content">
                  <div className="cat">Food, flavour</div>
                  <h4>
                    <a href="menu-list.html">
                      Flavour so good you’ll try to eat with your eyes.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        
          <div className="news-block col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div className="image-box">
                <div className="date">
                  <span>08/09/2022</span>
                </div>
                <div className="image">
                  <a href="#">
                    <img src="images/resource/news-1.jpg" alt="" />
                  </a>
                </div>
                <div className="over-content">
                  <div className="cat">healthy food</div>
                  <h4>
                    <a href="menu-list.html">
                      Flavour so good you’ll try to eat with your eyes.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        
          <div className="news-block col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="600ms"
            >
              <div className="image-box">
                <div className="date">
                  <span>03/09/2022</span>
                </div>
                <div className="image">
                  <a href="#">
                    <img src="images/resource/news-3.jpg" alt="" />
                  </a>
                </div>
                <div className="over-content">
                  <div className="cat">recipie</div>
                  <h4>
                    <a href="menu-list.html">
                      Flavour so good you’ll try to eat with your eyes.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lower-link-box text-center">
          <a href="#" className="theme-btn btn-style-two clearfix">
            <span className="btn-wrap">
              <span className="text-one">view our blog</span>
              <span className="text-two">view our blog</span>
            </span>
          </a>
        </div>
      </div>
    </section> */}
    {/*Main Footer*/}
   <Footer/>
  </div>
  {/*End pagewrapper*/}
  {/*Scroll to top*/}
  <div className="scroll-to-top scroll-to-target" data-target="html">
    <span className="icon fa fa-angle-up" />
  </div>
</>

  )
}

export default HomePage

