import React from 'react'

const Header = () => {
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
      {/* Header Upper */}
      <div className="header-upper">
        <div className="auto-container">
          {/* Main Box */}
          <div className="main-box clearfix">
            {/*Logo*/}
            <div className="logo-box">
              <div className="logo">
                <a href="/" title="Biryaniwalla & Co., Al Nahda 2, Hor Al Anz, Hamriya Port, Al Barsha, Motor City, Discovery Gardens, Business Bay, Al Fahidi, Al Karama, Dubai">
                  <img
                    src="images/logo.png"
                    alt="Biryaniwalla Logo"
                    title="Biryaniwalla & Co., Al Nahda 2, Hor Al Anz, Hamriya Port, Al Barsha, Motor City, Discovery Gardens, Business Bay, Al Fahidi, Al Karama, Dubai | About"
                  />
                </a>
              </div>
            </div>
            <div className="nav-box clearfix">
              {/*Nav Outer*/}
              <div className="nav-outer clearfix">
                <nav className="main-menu">
                  <ul className="navigation clearfix">
                    <li className="current">
                      <a href="/">Home</a>
                    </li>
                    <li className="dropdown has-mega-menu">
                      <a href="#">Menus</a>
                      {/* <ul>
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
                      </ul> */}
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    {/* <li>
                      <a href="#">Our chefs</a>
                    </li> */}
                    {/* <li className="dropdown">
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
                    </li> */}
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </nav>
                {/* Main Menu End*/}
              </div>
              {/*Nav Outer End*/}
              <div className="links-box clearfix">
                <div className="link link-btn">
                  <a
                    href="/online-order"
                    className="theme-btn btn-style-one clearfix"
                  >
                    <span className="btn-wrap">
                      <span className="text-one">Online Order</span>
                      <span className="text-two">Online Order</span>
                    </span>
                  </a>
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

