'use client'
// import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Carousel = () => {
  const images = [
    '/images/hero/dashboard.png',
    '/images/blog/blog-details-02.jpg',
    '/images/blog/blog-details-01.jpg',
    '/images/blog/blog-details-02.jpg',
  ];
  return (
    <div className="absolute -bottom-[160px] sm:-bottom-[220px] md:-bottom-[15rem] lg:-bottom-[20rem] xl:-bottom-[21rem] 2xl:-bottom-[25rem] z-20 left-2/4 -translate-x-1/2 w-full px-8 md:px-0 md:w-9/12 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[380px] xl:h-[450px] 2xl:h-[550px] rounded-lg">
      {/* <Image src={"/images/hero/dashboard.png"} alt="Dashboard" fill className="shadow-[0_8px_39px_rgb(0,0,0,0.12)]"/> */}
      <div>
        {/* Swiper Carousel for Additional Images */}
        <div style={{ position: 'relative' }}>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            loop={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={20}
            style={{
              padding: '20px 0',
            }}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Dashboard ${index + 1}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '10px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Carousel
