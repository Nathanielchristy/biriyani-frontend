import React from 'react'

import Footer from '../components/Footer'


const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const phone = e.target.phone.value.trim();
    const message = e.target.message.value.trim();

    // Your WhatsApp number without '+' or leading zeros
    const whatsappNumber = "919047011760";

    // Message template
    const whatsappMsg = `New Request:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

    // Encode for URL
    const encodedMsg = encodeURIComponent(whatsappMsg);

    // Mobile or Desktop detection
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappURL = isMobile
      ? `https://wa.me/${whatsappNumber}?text=${encodedMsg}`
      : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMsg}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  };
  return (
    <>

    <div className="page-wrapper">
 
 
 
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
              <form onSubmit={handleSubmit}>
                <div className="clearfix">
                  <div className="form-group">
                    <div className="field-inner">
                      <input
                        type="text"
                        name="name"
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
                        name="email"
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
                        name="phone"
                        defaultValue=""
                        placeholder="Phone Number"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-group ">
                    <div className="field-inner">
                      <textarea
                        name="message"
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
          {/* <div className="loc-block col-lg-6 col-md-12 col-sm-12">
            <img src="images/resource/footer_resta.png" alt="" />
          </div> */}
        </div>
      </div>
    </div>
  </section>
  
   <div className="contact-map">
  
     <iframe
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14430.828889955978!2d55.34526700999687!3d25.28043254309939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAl%20Ahali%20Building%2C%20Ground%20Floor%2C%207-A%20Baghdad%20Street%2C%20NMC%20Hospital%20Square%2C%20Al%20Nahda%202%2C%20Dubai!5e0!3m2!1sen!2sae!4v1754566506950!5m2!1sen!2sae"
      width="100%"
      height={500}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    /> 
  </div> 
  {/*Main Footer*/}
  <Footer className="mt-[-220px]"/>
</div>

    </>
  )
}

export default Contact

