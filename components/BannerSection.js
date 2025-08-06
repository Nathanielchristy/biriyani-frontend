import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function BannerSlider() {
  return (
    <section className="banner-section">
      <div className="banner-container">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="banner-slider"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div
              className="slide-item"
              style={{
                backgroundImage: "url(images/main-slider/biriyanislider1.png)",
              }}
            >
              <div className="auto-container">
                <div className="content-box">
                  <div className="content">
                    <div className="clearfix">
                      <div className="inner">
                        <div className="subtitle">
                          <span>delightful experience</span>
                        </div>
                        <div className="pattern-image">
                          <img
                            src="images/icons/separator.svg"
                            alt=""
                            title=""
                          />
                        </div>
                        <h1>
                          <span>
                            The Pride Of Hyderabad
                          </span>
                        </h1>
                        <div className="text">
                         Tantalizing Your Taste Buds
                        </div>
                        <div className="links-box">
                          <a
                            href="/online-order"
                            className="theme-btn btn-style-two clearfix"
                          >
                            <span className="btn-wrap">
                              <span className="text-one1">view our menu</span>
                              <span className="text-two">view our menu</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Repeat for other slides */}
          <SwiperSlide>
            <div
              className="slide-item"
              style={{
                backgroundImage: "url(images/main-slider/biriyanislider2.png)",
              }}
            >
              <div className="auto-container">
                <div className="content-box">
                  <div className="content">
                    <div className="clearfix">
                      <div className="inner">
                        <div className="subtitle">
                          <span>amazing & delicious</span>
                        </div>
                        <div className="pattern-image">
                          <img
                            src="images/icons/separator.svg"
                            alt=""
                            title=""
                          />
                        </div>
                        <h1>
                          <span>
                           World’s Favourite Biryani
                          </span>
                        </h1>
                        <div className="text">
                          Full of savoury flavours, a testament to our Brand
                        </div>
                        <div className="links-box">
                          <a
                            href="/online-order"
                            className="theme-btn btn-style-two clearfix"
                          >
                            <span className="btn-wrap">
                              <span className="text-one1">view our menu</span>
                              <span className="text-two">view our menu</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Add 3rd slide here the same way */}
        </Swiper>

        {/* Navigation buttons */}
        <div className="swiper-button-prev">
          <span className="fal fa-angle-left" />
        </div>
        <div className="swiper-button-next">
          <span className="fal fa-angle-right" />
        </div>
      </div>

      {/* Book a table button */}
      <div className="book-btn">
        <a href="/online-order" className="theme-btn">
          <span className="icon">
            <img src="images/resource/book-icon-1.png" alt="" title="" />
          </span>
          <span className="txt">Menu</span>
        </a>
      </div>
    </section>
  );
}

