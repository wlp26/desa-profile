import React, { useEffect } from "react";

import Navbar from "../components/Navbar";

import Footer from "../components/footer";
import ImageSection from "../components/GallerySection";

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <ImageSection />

      <Footer />
    </>
  );
};

export default GalleryPage;
