import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
  homeObjSix,
  homeObjSeven,
} from "./Data";
import Pricing from "../../components/Pricing/Pricing";

function Services() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
      <HeroSection {...homeObjFive} />
      <HeroSection {...homeObjSix} />
      <HeroSection {...homeObjSeven} />
      <Pricing />
    </>
  );
}

export default Services;
