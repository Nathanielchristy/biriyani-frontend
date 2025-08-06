'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const dishes = [
  {
    name: 'Paneer Lahori', 
    desc: 'Paneer Lahori is a rich, creamy North Indian cottage cheese curry.',
    img: '/images/resource/menu-image11.png',
    price: 'AED 29.4',
    // link: '/menu-list-1',
  },
  {
    name: 'Murgh Lababdar',
    desc: 'Murgh Lababdar is a rich, creamy North Indian chicken curry cooked with tomatoes, cream, and spices.',
    img: '/images/resource/menu-image1.png',
    price: 'AED 16.00',
    // link: '/menu-list-2',
  },
  {
    name: 'Pathar Ka Gosht',
    desc: 'Pathar Ka Gosht is a Hyderabadi delicacy of marinated meat grilled on a heated stone',
    img: '/images/resource/menu-image3.png',
    price: 'AED 42.00',
    // link: '/menu-list-3',
  },
  {
    name: 'Veg Hot & Sour Soup',
    desc: 'A spicy and tangy Indo-Chinese soup with mixed vegetables, soy sauce, and bold flavors.',
    img: '/images/resource/menu-image4.png',
    price: 'AED 15.00',
    // link: '/menu-list-4',
  },
  {
    name: 'Qubani Ka Meetha',
    desc: 'Qubani Ka Meetha is a traditional Hyderabadi dessert made with apricots, sugar, and dry fruits.',
    img: '/images/resource/menu-image5.png',
    price: 'AED 15.00',
    // link: '/menu-list-1',
  },
  {
    name: 'Talawa Gosht Set',
    desc: 'Tender mutton pieces marinated with spices, shallow-fried to perfection, served as a flavorful traditional delicacy.',
    img: '/images/resource/menu-image6.png',
    price: 'AED 36.00',
    // link: '/menu-list-2',
  },
];

export default function SpecialOfferSection() {
  return (
    <section className="special-offer">
      <div className="outer-container">
        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle">
              <span>special offer</span>
            </div>
            <div className="pattern-image">
              <Image
                src="/images/icons/separator.svg"
                alt="separator"
                width={100}
                height={20}
              />
            </div>
            <h2>Best Specialties</h2>
          </div>

          {/* Swiper Slider */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="dish-gallery-slider"
          >
            {dishes.map((dish, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`offer-block-two ${index % 2 === 1 ? 'margin-top' : ''}`}
                >
                  <div className="inner-box">
                    <div className="image">
                      {/* <Link href={dish.link}> */}
                        <Image
                          src={dish.img}
                          alt={dish.name}
                          width={400}
                          height={300}
                        />
                      {/* </Link> */}
                    </div>
                    <h4>
                      {dish.name}
                    </h4>
                    <div className="text desc">{dish.desc}</div>
                    <div className="price">{dish.price}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="lower-link-box text-center">
            <Link href="/menu-list-1" className="theme-btn btn-style-two clearfix">
              <span className="btn-wrap">
                <span className="text-one">view all menu</span>
                <span className="text-two">view all menu</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

