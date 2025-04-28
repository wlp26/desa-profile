import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "../css/GalleryCarousel.css";

import tateli1 from "../assets/tateli1.jpg";
import tateli2 from "../assets/tateli2.jpg";
import tateli3 from "../assets/tateli3.jpg";
import tateli4 from "../assets/tateli4.jpg";
import tateli5 from "../assets/tateli5.jpg";
import tateli6 from "../assets/tateli6.jpg";
import tateli7 from "../assets/tateli7.jpg";
import tateli8 from "../assets/tateli8.jpg";
import tateli9 from "../assets/tateli9.jpg";
import tateli10 from "../assets/tateli10.jpg";
import tateli11 from "../assets/tateli11.jpg";
import tateli12 from "../assets/tateli12.jpg";
import tateli13 from "../assets/tateli13.jpg";

const dataImages = [
  {
    src: tateli1,
  },
  {
    src: tateli2,
  },
  {
    src: tateli3,
  },
  {
    src: tateli4,
  },
  {
    src: tateli5,
  },
  {
    src: tateli6,
  },
  {
    src: tateli7,
  },
  {
    src: tateli8,
  },
  {
    src: tateli9,
  },
  {
    src: tateli10,
  },
  {
    src: tateli11,
  },
  {
    src: tateli12,
  },
  {
    src: tateli13,
  },
];

const GalleryCarousel = () => {
  return (
    <section id="gallery-section" className="gallery-section">
      <div className="custom-container text-center">
        <h2 className="chart-title">Galeri Desa</h2>
        <p className="gallery-subtitle">
          Potret keindahan alam dan aktivitas desa kami.
        </p>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="gallery-swiper"
        >
          {dataImages.map((item, index) => (
            <SwiperSlide key={index} className="gallery-slide">
              <img src={item.src} alt={item.title} />
              <div className="slide-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GalleryCarousel;
