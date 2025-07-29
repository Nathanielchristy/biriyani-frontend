import React from 'react'
import Headers from '../components/Header'
import Footer from '../components/Footer'


const Contact = () => {
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
 
  {/* Preloader End */}
  {/* Main Header*/}
  <Headers/>
  {/*End Main Header */}
  {/*Menu Backdrop*/}
  <div className="menu-backdrop" />
 
 
  {/*End Hidden Bar */}
  {/* Inner Banner Section */}
  <section className="inner-banner">
    <div
      className="image-layer"
      style={{ backgroundImage: "url(images/background/banner-image-4.jpg)" }}
    />
    <div className="auto-container">
      <div className="inner">
        <div className="subtitle">
          <span>any query ?</span>
        </div>
        <div className="pattern-image">
          <img src="images/icons/separator.svg" alt="" title="" />
        </div>
        <h1>
          <span>Contact Us</span>
        </h1>
      </div>
    </div>
  </section>
  {/*End Banner Section */}
  {/*Map Section*/}
  {/* <div className="contact-map">
    <iframe
      src="https://www.google.com/maps/embed/v1/search?key=YOUR_API_KEY
    &q=Biryaniwalla+%26+Co,+Hamriya+Port,+Dubai"
      width="100%"
      height={500}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div> */}
  {/*Contact Info Section*/}
  <section className="contact-page">
    <div className="left-bg">
      <img src="images/background/bg-25.png" alt="" title="" />
    </div>
    <div className="right-bg">
      <img src="images/background/bg-6.png" alt="" title="" />
    </div>
    {/*location Section*/}
    <div className="location-center">
      <div className="auto-container">
        <div className="cinfo-box">
          <div className="row clearfix">
            {/*Block*/}
            <div className="contactinfo-block col-lg-4 col-md-4 col-sm-12">
              <div
                className="inner-box wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
                <h4>Lunch Time</h4>
                <div className="text">
                  Monday to Sunday <br /> 11.00 am - 2.30pm
                </div>
              </div>
            </div>
            {/*Block*/}
            <div className="contactinfo-block col-lg-4 col-md-4 col-sm-12">
              <div
                className="inner-box cp-seprator wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
                <h4>Contact Info</h4>
                <div className="text">
                Al Ahali Building, Ground Floor, 7-A Baghdad Street, NMC Hospital Square, Al Nahda 2, Dubai
                  <br />
                  Email : booking@biryaniwallaandco.com
                </div>
                <div className="more-link">
                  <a href="#">Booking :  +97143395123</a>
                </div>
              </div>
            </div>
            {/*Block*/}
            <div className="contactinfo-block col-lg-4 col-md-4 col-sm-12">
              <div
                className="inner-box wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <h4>Dinner Time</h4>
                <div className="text">
                  Monday to Sunday
                  <br />
                  5.30 pm - 11.30 pm
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Location form Section*/}
    <div className="auto-container">
      <div className="c-page-form-box">
        <div className="row clearfix">
          {/*form Section*/}
          <div className="loc-block col-lg-6 col-md-12 col-sm-12">
            <div className="title-box centered">
              <h2>Message us</h2>
              <div className="text desc">
                Have a question about the our service? We're here to help,
                contact us today
              </div>
            </div>
            <div className="default-form reservation-form">
              <form method="post" action="index.html">
                <div className="clearfix">
                  <div className="form-group">
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
                  <div className="form-group">
                    <div className="field-inner">
                      <input
                        type="text"
                        name="fieldname"
                        defaultValue=""
                        placeholder="Your Email"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-group ">
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
                  <div className="form-group ">
                    <div className="field-inner">
                      <textarea
                        name="fieldname"
                        placeholder="Special Request"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="theme-btn btn-style-one clearfix"
                    >
                      <span className="btn-wrap">
                        <span className="text-one">send your message</span>
                        <span className="text-two">send your message</span>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/*form image Section*/}
          <div className="loc-block col-lg-6 col-md-12 col-sm-12">
            <img src="images/resource/restaurant.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Main Footer*/}
  <Footer/>
</div>

    </>
  )
}

export default Contact

