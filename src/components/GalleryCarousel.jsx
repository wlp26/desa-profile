import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "../css/GalleryCarousel.css";

import tateli1 from "../assets/tateli1.jpeg";
import tateli2 from "../assets/tateli2.jpeg";
import tateli3 from "../assets/tateli3.jpeg";
import tateli4 from "../assets/tateli4.jpg";
import tateli5 from "../assets/tateli5.jpg";
import tateli6 from "../assets/tateli5.jpg";

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
];

const GalleryCarousel = () => {
  return (
    <section className="gallery-section py-5">
      <div className="custom-container text-center">
        <h2 className="gallery-title">Galeri Desa</h2>
        <p className="gallery-subtitle mb-4">
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
