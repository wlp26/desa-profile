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
import tateli14 from "../assets/tateli14.jpg";
import tateli15 from "../assets/tateli15.jpg";
import tateli16 from "../assets/tateli16.jpg";
import tateli17 from "../assets/tateli17.jpg";
import tateli18 from "../assets/tateli18.jpg";
import tateli19 from "../assets/tateli19.jpg";
import tateli20 from "../assets/tateli20.jpg";
import tateli21 from "../assets/tateli21.jpg";
import tateli22 from "../assets/tateli22.jpg";
import tateli23 from "../assets/tateli23.jpg";
import tateli24 from "../assets/tateli24.jpg";
import tateli25 from "../assets/tateli25.jpg";
import tateli26 from "../assets/tateli26.jpg";
import tateli27 from "../assets/tateli27.jpg";
import tateli28 from "../assets/tateli28.jpg";
import tateli29 from "../assets/tateli29.jpg";
import tateli30 from "../assets/tateli30.jpg";
import tateli31 from "../assets/tateli31.jpg";
import tateli32 from "../assets/tateli32.jpg";
import tateli33 from "../assets/tateli33.jpg";
import tateli34 from "../assets/tateli34.jpg";
import tateli35 from "../assets/tateli35.jpg";
import tateli36 from "../assets/tateli36.jpg";
import tateli37 from "../assets/tateli37.jpg";
import tateli38 from "../assets/tateli38.jpg";
import tateli39 from "../assets/tateli39.jpg";
import tateli40 from "../assets/tateli40.jpg";
import tateli41 from "../assets/tateli41.jpg";
import tateli42 from "../assets/tateli42.jpg";
import tateli43 from "../assets/tateli43.jpg";
import tateli44 from "../assets/tateli44.jpg";
import tateli45 from "../assets/tateli45.jpg";
import tateli46 from "../assets/tateli46.jpg";
import tateli47 from "../assets/tateli47.jpg";

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
  { src: tateli14 },
  { src: tateli15 },
  { src: tateli16 },
  { src: tateli17 },
  { src: tateli18 },
  { src: tateli19 },
  { src: tateli20 },
  { src: tateli21 },
  { src: tateli22 },
  { src: tateli23 },
  { src: tateli24 },
  { src: tateli25 },
  { src: tateli26 },
  { src: tateli27 },
  { src: tateli28 },
  { src: tateli29 },
  { src: tateli30 },
  { src: tateli31 },
  { src: tateli32 },
  { src: tateli33 },
  { src: tateli34 },
  { src: tateli35 },
  { src: tateli36 },
  { src: tateli37 },
  { src: tateli38 },
  { src: tateli39 },
  { src: tateli40 },
  { src: tateli41 },
  { src: tateli42 },
  { src: tateli43 },
  { src: tateli44 },
  { src: tateli45 },
  { src: tateli46 },
  { src: tateli47 },
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
