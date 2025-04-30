import React, { useEffect } from "react";

import Navbar from "../components/Navbar";
import VisiMisiSection from "../components/VisiMisiSection";
import SejarahDesa from "../components/SejarahDesa";
import SejarahPanjangDesa from "../components/SejarahPanjangDesa";
import Footer from "../components/footer";
import VillageChart from "../components/VillageChart";

const DesaProfile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <VisiMisiSection />
      <VillageChart />
      <SejarahDesa />
      <SejarahPanjangDesa />
      <Footer />
    </>
  );
};

export default DesaProfile;
