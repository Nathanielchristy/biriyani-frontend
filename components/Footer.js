import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="main-footer">
      <div
        className="image-layer"
        style={{ backgroundImage: "url(images/background/image-4.jpg)" }}
      />
      <div className="upper-section">
        <div className="auto-container">
          <div className="row clearfix">
            {/*Footer Col*/}
            <div className="footer-col info-col col-lg-6 col-md-12 col-sm-12">
              <div
                className="inner wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="content">
                  <div className="logo">
                    <a
                      href="#"
                      title=""
                    >
                      <img
                        src="images/logo.png"
                        alt=""
                        title=""
                      />
                    </a>
                  </div>
                  <div className="info">
                    <ul>
                      <li>Al Ahali Building, Ground Floor, 7-A Baghdad Street, NMC Hospital Square, Al Nahda 2, Dubai</li>
                      <li>
                        <a href="mailto:booking@domainname.com">
                          booking@domainname.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:+97143395123">
                          Booking Request : +97143395123
                        </a>
                      </li>
                      <li>Open : 10:00 am - 11:00 pm</li>
                    </ul>
                  </div>
                  <div className="separator">
                    <span />
                    <span />
                    <span />
                  </div>
                  {/* <div className="newsletter">
                    <h3>Get News &amp; Offers</h3>
                    <div className="text">
                      Subscribe us &amp; Get <span>25% Off.</span>
                    </div>
                    <div className="newsletter-form">
                      <form method="post" action="index.html">
                        <div className="form-group">
                          <span className="alt-icon far fa-envelope" />
                          <input
                            type="email"
                            name="email"
                            defaultValue=""
                            placeholder="Your email"
                            required=""
                          />
                          <button
                            type="submit"
                            className="theme-btn btn-style-one clearfix"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">subscribe</span>
                              <span className="text-two">subscribe</span>
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            {/*Footer Col*/}
            <div className="footer-col links-col col-lg-3 col-md-6 col-sm-12">
              <div
                className="inner wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <ul className="links">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Menus</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Our chefs</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            {/*Footer Col*/}
            <div className="footer-col links-col last col-lg-3 col-md-6 col-sm-12">
              <div
                className="inner wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <ul className="links">
                  <li>
                    <a href="#">facebook</a>
                  </li>
                  <li>
                    <a href="#">instagram</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Youtube</a>
                  </li>
                  <li>
                    <a href="#">Google map</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="copyright">
            © 2025 Biryaniwalla & Co Restaurt. All Rights Reserved | Crafted by{" "}
            <a
              href="https://hdmediauae.com/"
              target="blank"
            >
              HD Digital Media CO.LLC
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer

