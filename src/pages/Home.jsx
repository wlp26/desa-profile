import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import InfografisPertama from "../components/InfografisPertama";
import Maps from "../components/Maps";
import GalleryCarousel from "../components/GalleryCarousel";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <InfografisPertama />
      <GalleryCarousel />
      <Maps />
    </>
  );
};

export default Home;
