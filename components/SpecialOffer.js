'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const dishes = [
  {
    name: 'Greek Salad',
    desc: 'Avocados with crab meat, red onion, crab salad red bell pepper...',
    img: '/images/resource/menu-image-11.jpg',
    price: '$39.00',
    link: '/menu-list-1',
  },
  {
    name: 'Tokusen Wagyu',
    desc: 'Tomatoes, green bell pepper, sliced cucumber onion, olives...',
    img: '/images/resource/menu-image-12.jpg',
    price: '$45.00',
    link: '/menu-list-2',
  },
  {
    name: 'Butternut Pumpkin',
    desc: 'Avocados with crab meat, red onion, crab salad stuffed bell pepper...',
    img: '/images/resource/menu-image-13.jpg',
    price: '$15.00',
    link: '/menu-list-3',
  },
  {
    name: 'Opu Fish',
    desc: 'Vegetables, cheeses, ground meats, tomato sauce, seasonings...',
    img: '/images/resource/menu-image-14.jpg',
    price: '$12.00',
    link: '/menu-list-4',
  },
  {
    name: 'Greek Salad',
    desc: 'Avocados with crab meat, red onion, crab salad red bell pepper...',
    img: '/images/resource/menu-image-11.jpg',
    price: '$39.00',
    link: '/menu-list-1',
  },
  {
    name: 'Tokusen Wagyu',
    desc: 'Tomatoes, green bell pepper, sliced cucumber onion, olives...',
    img: '/images/resource/menu-image-12.jpg',
    price: '$45.00',
    link: '/menu-list-2',
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
                      <Link href={dish.link}>
                        <Image
                          src={dish.img}
                          alt={dish.name}
                          width={400}
                          height={300}
                        />
                      </Link>
                    </div>
                    <h4>
                      <Link href={dish.link}>{dish.name}</Link>
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

