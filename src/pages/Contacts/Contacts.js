import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { homeObjOne, homeObjTheree, homeObjTwo } from "./Data";
import ContactUs from "../../components/ContactUs/ContacUs";
import Pricing from "../../components/Pricing/Pricing";

function ContanctsForm() {
  return (
    <>
      <ContactUs />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjTheree} />
      <Pricing />
    </>
  );
}

export default ContanctsForm;
