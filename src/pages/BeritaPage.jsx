import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/footer";
import BeritaList from "../components/BeritaList";

const BeritaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <BeritaList />

      <Footer />
    </>
  );
};

export default BeritaPage;
