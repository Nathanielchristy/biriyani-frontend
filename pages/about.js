import React from 'react'
import Headers from '../components/Header'
import Footer from '../components/Footer'
import { useEffect } from "react";

const About = () => {
   useEffect(() => {
    const counters = document.querySelectorAll(".count-text");

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-stop");
        const speed = +counter.getAttribute("data-speed");
        const increment = target / (speed / 10);
        let count = +counter.innerText;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }, []);
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
 
  <Headers/>
 
  <section className="inner-banner">
    <div
      className="image-layer"
      style={{ backgroundImage: "url(images/background/banner-image-1.jpg)" }}
    />
    <div className="auto-container">
      <div className="inner">
        <div className="subtitle">
          <span>our story</span>
        </div>
        <div className="pattern-image">
          <img src="images/icons/separator.svg" alt="" title="" />
        </div>
        <h1>
          <span>About Us</span>
        </h1>
      </div>
    </div>
  </section>
  {/*End Banner Section */}
  {/*About Section*/}
  <section className="about-section">
    <div className="left-bg">
      <img src="images/background/bg-10.png" alt="" title="" />
    </div>
    <div className="right-bg">
      <img src="images/background/bg-11.png" alt="" title="" />
    </div>
    <div className="auto-container">
      <div className="title-box centered">
        <div className="subtitle">
          <span>who we are</span>
        </div>
        <div className="pattern-image">
          <img src="images/icons/separator.svg" alt="" title="" />
        </div>
        <h3>
          The list of our most loved dishes by our precious, ardent customers is endless{" "}
          {/* <span className="theme_color">since 45 years</span>. Enjoy our
          seasonal menu and experience the beauty of naturalness */}
        </h3>
      </div>
      <div className="row clearfix">
        {/*Block*/}
        <div className="about-block content-block col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div
            className="inner-box wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="0ms"
          >
            <div className="text">
              All Biryanis of course, Chicken 65, Talawa Gosht (Mutton Fry), Khatti Daal (Sour Lentils), and Pathar ka Gosht (Juicy chunks of Mutton cooked on Granite Stone). This is our exclusive delicacy; primarily due to its ethnicity. The recipe is traditional, pure, and unchanged from the olden times, originating from our roots when there were no cookers and people used to cook on stones. It is most tender and luscious.
Strongly recommend it to all. We try to cater to everyone; meatatarians, vegetarians, and seafood lovers, alike.
            </div>
            {/* <div className="signature">
              <img src="images/resource/signature-1.png" alt="" title="" />
            </div> */}
            {/* <div className="author">andrew joe - founder</div> */}
            <div className="video-box">
              <div className="image">
               
                  <img src="images/resource/about-image-1.jpg" alt="" />
                
                {/* <a
                  href="https://www.youtube.com/watch?v=ZETY_l3GVQg"
                  className="lightbox-image play-btn"
                > */}
                  {/* <span className="icon fal fa-play">
                    <i className="ripple" />
                  </span> */}
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
        {/*Block*/}
        <div className="about-block image-block col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div
            className="inner-box wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="300ms"
          >
            <div className="image">
              <img src="images/resource/about-image1.png" alt="about" />
            </div>
          </div>
        </div>
        {/*Block*/}
        <div className="about-block info-block col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div
            className="inner-box wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="600ms"
          >
            <ul className="info">
              <li>
                <strong>Lunch Time</strong>Monday to Sunday <br />
                11.00 am - 2.30pm
              </li>
              <li>
                <strong>Dinner Time</strong>Monday to Sunday <br />
                5.30 pm - 11.30 pm
              </li>
              <li className="separator">
                <span />
              </li>
              <li>
                <strong>Contact Us</strong>
                <span className="address">
                 Al Ahali Building, Ground Floor, 7-A Baghdad Street, NMC Hospital Square, Al Nahda 2, Dubai
                </span>{" "}
                <a href="tel:+88-123-123456">+97143395123</a> <br />
                <a href="mailto:reservation@restro.com">
                   booking@biryaniwallaandco.com
                </a>
              </li>
            </ul>
          </div>
        </div>
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
              <div className="fact-title">daily order</div>
            </div>
          </div>
          <div className="fact-block col-lg-3 col-md-6 col-sm-12">
            <div className="inner clearfix">
              <div className="fact-count">
                <div className="count-box">
                  <span className="count-text" data-stop={82} data-speed={1500}>
                    0
                  </span>
                  <i>+</i>
                </div>
              </div>
              <div className="fact-title">Special Dishes</div>
            </div>
          </div>
          <div className="fact-block col-lg-3 col-md-6 col-sm-12">
            <div className="inner clearfix">
              <div className="fact-count">
                <div className="count-box">
                  <span className="count-text" data-stop={35} data-speed={1000}>
                    0
                  </span>
                  <i>+</i>
                </div>
              </div>
              <div className="fact-title">expert chef</div>
            </div>
          </div>
          <div className="fact-block col-lg-3 col-md-6 col-sm-12">
            <div className="inner clearfix">
              <div className="fact-count">
                <div className="count-box">
                  <span className="count-text" data-stop={10} data-speed={1000}>
                    0
                  </span>
                  <i>+</i>
                </div>
              </div>
              <div className="fact-title">awards won</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Fluid Section*/}
  {/* <section className="fluid-section">
    <div className="outer-container">
      <div className="row clearfix">
        
        <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div
            className="inner wow fadeInLeft"
            data-wow-duration="1500ms"
            data-wow-delay="0ms"
          >
            <div
              className="image-layer"
              style={{ backgroundImage: "url(images/background/image-5.jpg)" }}
            />
            <div className="image">
              <img src="images/background/image-5.jpg" alt="" />
            </div>
          </div>
        </div>
        
        <div className="content-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="right-bg">
            <img src="images/background/bg-12.png" alt="" title="" />
          </div>
          <div
            className="inner clearfix wow fadeInRight"
            data-wow-duration="1500ms"
            data-wow-delay="0ms"
          >
            <div className="content-box">
              <div className="title-box centered">
                <div className="subtitle">
                  <span>35 year of experience</span>
                </div>
                <div className="pattern-image">
                  <img src="images/icons/separator.svg" alt="" title="" />
                </div>
                <h2>Award Winning Chef</h2>
                <div className="text">
                  Lorem Ipsum is simply dummy text of the printingand
                  typesetting industry lorem Ipsum has been the industrys
                  standard dummy text ever since the when an unknown printer
                  took a galley of type.
                </div>
              </div>
              <div className="info">
                <div className="signature">
                  <img src="images/resource/signature-2.png" alt="" title="" />
                </div>
                <div className="author">Henry - EXCUTIVE CHEF</div>
              </div>
              <div className="link-box">
                <a
                  href="our-chef.html"
                  className="theme-btn btn-style-two clearfix"
                >
                  <span className="btn-wrap">
                    <span className="text-one">meet our team</span>
                    <span className="text-two">meet our team</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/*Fluid Section*/}
  <section className="fluid-section alternate">
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
              style={{ backgroundImage: "url(images/background/image6.png)" }}
            />
            <div className="image">
              <img src="images/background/handi1.png" alt="" />
            </div>
          </div>
        </div>
        {/*Col*/}
        <div className="content-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="left-bg">
            <img src="images/background/bg-13.png" alt="" title="" />
          </div>
          <div
            className="inner clearfix wow fadeInRight"
            data-wow-duration="1500ms"
            data-wow-delay="0ms"
          >
            <div className="content-box">
              <div className="title-box centered">
                <div className="subtitle">
                  <span>Iftar Pack</span>
                </div>
                <div className="pattern-image">
                  <img src="images/icons/separator.svg" alt="" title="" />
                </div>
                <h2>BWCO RAMADAN SPECIAL</h2>
                <div className="text">
                  Rejoice in the Blessed Spirit of Ramadan with The Biryaniwalla and Co. sumptuous Iftar.

Please book now for our Iftar Buffet at just AED 49 at all our dine-in branches, or get your private Iftar Parties Catered by us in the comfort of your home, for your loved ones.
                </div>
              </div>
              <div className="link-box">
                <a
                  href="/contact"
                  className="theme-btn btn-style-two clearfix"
                >
                  <span className="btn-wrap">
                    <span className="text-one">Discover Now</span>
                    <span className="text-two">Discover Now</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Services Section*/}
  <section className="services-section">
    <div className="left-bg">
      <img src="images/background/bg-14.png" alt="" title="" />
    </div>
    <div className="right-bg">
      <img src="images/background/bg-15.png" alt="" title="" />
    </div>
    <div className="auto-container">
      <div className="title-box centered">
        <div className="subtitle">
          <span>our services</span>
        </div>
        <div className="pattern-image">
          <img src="images/icons/separator.svg" alt="" title="" />
        </div>
        <h2>Exquisite Restaurant in Dubai</h2>
      </div>
      <div className="row clearfix">
        <div className="s-col col-lg-4 col-md-6 col-sm-12">
          <div
            className="inner wow fadeInLeft"
            data-wow-duration="1500ms"
            data-wow-delay="0ms"
          >
            <div className="s-block">
              <div className="inner">
                <div className="icon-box">
                  <img src="images/resource/s-icon-1.png" alt="" title="" />
                </div>
                <h4>Door Delivery</h4>
                <div className="text">
                  Door Delivery available at your doorstep, fast and hassle-free.
                </div>
              </div>
            </div>
            <div className="s-block alternate">
              <div className="inner">
                <div className="icon-box">
                  <img src="images/resource/s-icon-2.png" alt="" title="" />
                </div>
                <h4>Fine Dining</h4>
                <div className="text">
                  Experience elegant cuisine and impeccable service in a luxurious fine dining setting.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="s-col last col-lg-4 col-md-6 col-sm-12">
          <div
            className="inner wow fadeInRight"
            data-wow-duration="1500ms"
            data-wow-delay="0ms"
          >
            <div className="s-block alternate">
              <div className="inner">
                <div className="icon-box">
                  <img src="images/resource/s-icon-3.png" alt="" title="" />
                </div>
                <h4>Outdoor Catering</h4>
                <div className="text">
                  Experience exceptional flavors and seamless service with our premium outdoor catering solutions.
                </div>
              </div>
            </div>
            <div className="s-block">
              <div className="inner">
                <div className="icon-box">
                  <img src="images/resource/s-icon-4.png" alt="" title="" />
                </div>
                <h4>Banquets Hall</h4>
                <div className="text">
                  Elegant and spacious banquet hall perfect for weddings, parties, and corporate events.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-col col-lg-4 col-md-12 col-sm-12">
          <div
            className="inner wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="0ms"
          >
            <div className="image-box">
              <img src="images/resource/service-image.png" alt="" title="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Testimonials Section*/}
  {/* <section className="testimonials-two">
    <div
      className="image-layer"
      style={{ backgroundImage: "url(images/background/image-7.jpg)" }}
    />
    <div className="auto-container">
      <div className="title-box centered">
        <div className="subtitle">
          <span>testimonials</span>
        </div>
        <div className="pattern-image">
          <img src="images/icons/separator.svg" alt="" title="" />
        </div>
        <h2>What People Are Saying</h2>
      </div>
      <div className="carousel-box">
        <div className="testimonial-slider owl-theme owl-carousel">
        
          <div className="testi-block">
            <div className="inner-box">
              <div className="quote-icon">
                <img src="images/icons/quotes-1.png" alt="" title="" />
              </div>
              <div className="rating">
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
              </div>
              <div className="text">
                The taste of food was really amazing, Wow ! outstanding dinner
                made by Mater chef John Rute, I never forget this delicious food
                experience.
              </div>
              <div className="auth-info">
                <div className="image">
                  <img src="images/resource/author-thumb-4.jpg" alt="" />
                </div>
                <div className="auth-title">willium joe</div>
                <div className="location">New York</div>
              </div>
            </div>
          </div>
         
          <div className="testi-block">
            <div className="inner-box">
              <div className="quote-icon">
                <img src="images/icons/quotes-1.png" alt="" title="" />
              </div>
              <div className="rating">
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
              </div>
              <div className="text">
                Hygienic food &amp; fresh enviroment, everyone had a wonderful
                delite experience. It was FABULOUS! great experience at The
                Italian gourmet.
              </div>
              <div className="auth-info">
                <div className="image">
                  <img src="images/resource/author-thumb-5.jpg" alt="" />
                </div>
                <div className="auth-title">Theresa Tin</div>
                <div className="location">Chicago</div>
              </div>
            </div>
          </div>
         
          <div className="testi-block">
            <div className="inner-box">
              <div className="quote-icon">
                <img src="images/icons/quotes-1.png" alt="" title="" />
              </div>
              <div className="rating">
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
              </div>
              <div className="text">
                Special treat to dine, It was wow experience food was really
                delicious! outstanding dinner made by Mater chef, food
                experience was unfogetable!
              </div>
              <div className="auth-info">
                <div className="image">
                  <img src="images/resource/author-thumb-6.jpg" alt="" />
                </div>
                <div className="auth-title">Michel Byrd</div>
                <div className="location">Denmark</div>
              </div>
            </div>
          </div>
         
          <div className="testi-block">
            <div className="inner-box">
              <div className="quote-icon">
                <img src="images/icons/quotes-1.png" alt="" title="" />
              </div>
              <div className="rating">
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
              </div>
              <div className="text">
                The taste of food was really amazing, Wow ! outstanding dinner
                made by Mater chef John Rute, I never forget this delicious food
                experience.
              </div>
              <div className="auth-info">
                <div className="image">
                  <img src="images/resource/author-thumb-4.jpg" alt="" />
                </div>
                <div className="auth-title">willium joe</div>
                <div className="location">New York</div>
              </div>
            </div>
          </div>
          
          <div className="testi-block">
            <div className="inner-box">
              <div className="quote-icon">
                <img src="images/icons/quotes-1.png" alt="" title="" />
              </div>
              <div className="rating">
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
              </div>
              <div className="text">
                Hygienic food &amp; fresh enviroment, everyone had a wonderful
                delite experience. It was FABULOUS! great experience at The
                Italian gourmet.
              </div>
              <div className="auth-info">
                <div className="image">
                  <img src="images/resource/author-thumb-5.jpg" alt="" />
                </div>
                <div className="auth-title">Theresa Tin</div>
                <div className="location">Chicago</div>
              </div>
            </div>
          </div>
          
          <div className="testi-block">
            <div className="inner-box">
              <div className="quote-icon">
                <img src="images/icons/quotes-1.png" alt="" title="" />
              </div>
              <div className="rating">
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
              </div>
              <div className="text">
                Special treat to dine, It was wow experience food was really
                delicious! outstanding dinner made by Mater chef, food
                experience was unfogetable!
              </div>
              <div className="auth-info">
                <div className="image">
                  <img src="images/resource/author-thumb-6.jpg" alt="" />
                </div>
                <div className="auth-title">Michel Byrd</div>
                <div className="location">Denmark</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/*Why Us Section*/}
  <section className="why-us-two">
    <div className="auto-container">
      <div className="title-box centered">
        <div className="subtitle">
          <span>why choose us</span>
        </div>
        <div className="pattern-image">
          <img src="images/icons/separator.svg" alt="separator" title="" />
        </div>
        <h2>Our Strength</h2>
      </div>
      <div className="row clearfix">
        {/*Block*/}
        <div className="why-block-two col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div
            className="inner-box wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="0ms"
          >
            <div className="image-box">
              <img src="images/resource/feature6.png" alt="" />
            </div>
            <div className="over-box">
              <div className="icon-box">
                <img src="images/resource/why-icon-1.png" alt="" />
              </div>
              <h4>Hygienic Food</h4>
            </div>
          </div>
        </div>
        {/*Block*/}
        <div className="why-block-two m-top col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div
            className="inner-box wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="300ms"
          >
            <div className="image-box">
              <img src="images/resource/feature1.png" alt="" />
            </div>
            <div className="over-box">
              <div className="icon-box">
                <img src="images/resource/why-icon-2.png" alt="" />
              </div>
              <h4>Fresh Environment</h4>
            </div>
          </div>
        </div>
        {/*Block*/}
        <div className="why-block-two col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div
            className="inner-box wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="600ms"
          >
            <div className="image-box">
              <img src="images/resource/featured-6.jpg" alt="" />
            </div>
            <div className="over-box">
              <div className="icon-box">
                <img src="images/resource/why-icon-3.png" alt="" />
              </div>
              <h4>Skilled Chefs</h4>
            </div>
          </div>
        </div>
        {/*Block*/}
        <div className="why-block-two m-top col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div
            className="inner-box wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="900ms"
          >
            <div className="image-box">
              <img src="images/resource/feature2.png" alt="" />
            </div>
            <div className="over-box">
              <div className="icon-box">
                <img src="images/resource/why-icon-4.png" alt="" />
              </div>
              <h4>Event &amp; Party</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Gallery Section*/}
  {/* <section className="image-gallery">
    <div className="carousel-box">
      <div className="auto-container">
        <div className="image-gallery-slider owl-theme owl-carousel">
        
          <div className="gallery-block">
            <div className="image">
              <a
                href="images/resource/gallery-1.jpg"
                className="lightbox-image"
                data-fancybox="gallery"
              >
                <img src="images/resource/gallery-1.jpg" alt="" />
              </a>
            </div>
          </div>
        
          <div className="gallery-block">
            <div className="image">
              <a
                href="images/resource/gallery-2.jpg"
                className="lightbox-image"
                data-fancybox="gallery"
              >
                <img src="images/resource/gallery-2.jpg" alt="" />
              </a>
            </div>
          </div>
         
          <div className="gallery-block">
            <div className="image">
              <a
                href="images/resource/gallery-3.jpg"
                className="lightbox-image"
                data-fancybox="gallery"
              >
                <img src="images/resource/gallery-3.jpg" alt="" />
              </a>
            </div>
          </div>
        
          <div className="gallery-block">
            <div className="image">
              <a
                href="images/resource/gallery-1.jpg"
                className="lightbox-image"
                data-fancybox="gallery"
              >
                <img src="images/resource/gallery-1.jpg" alt="" />
              </a>
            </div>
          </div>
         
          <div className="gallery-block">
            <div className="image">
              <a
                href="images/resource/gallery-2.jpg"
                className="lightbox-image"
                data-fancybox="gallery"
              >
                <img src="images/resource/gallery-2.jpg" alt="" />
              </a>
            </div>
          </div>
         
          <div className="gallery-block">
            <div className="image">
              <a
                href="images/resource/gallery-3.jpg"
                className="lightbox-image"
                data-fancybox="gallery"
              >
                <img src="images/resource/gallery-3.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
 
   <Footer/>
</div>
    </>
    

  )
}

export default About

