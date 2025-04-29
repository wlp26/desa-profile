import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import InfografisPertama from "../components/InfografisPertama";
import Maps from "../components/Maps";
import GalleryCarousel from "../components/GalleryCarousel";
import JelajahiDesaSection from "../components/JelajahiDesa";
import Footer from "../components/footer";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <JelajahiDesaSection />
      <InfografisPertama />
      <GalleryCarousel />
      <Maps />
      <Footer />
    </>
  );
};

export default Home;
