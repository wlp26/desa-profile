import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Demografi from "../components/Demografi";
import InfografisPertama from "../components/InfografisPertama";
import BarchartUsia from "../components/BarchartUsia";
import StatusPerkawinan from "../components/StatusPerkawinan";
import AgamaInfografis from "../components/AgamaInfografis";
import PertumbuhanPenduduk from "../components/PertumbuhanPenduduk";
import PendidikanInfografis from "../components/PendidikanInfografis";
import GolonganDarahInfografis from "../components/GolonganDarahInfografis";
import PekerjaanCardSection from "../components/PekerjaanCardSection";

const DemografiPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />

      <Demografi />
      <InfografisPertama />
      <BarchartUsia />
      <StatusPerkawinan />
      <PertumbuhanPenduduk />
      <PendidikanInfografis />
      <AgamaInfografis />
      <PekerjaanCardSection />
      <GolonganDarahInfografis />
    </>
  );
};

export default DemografiPage;
