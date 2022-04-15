import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
} from "./Data";
import Pricing from "../../components/Pricing/Pricing";
import BgVideo from "../../components/BgVideo/BgVideo";

function Home() {
  return (
    <>
      <BgVideo />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
      <HeroSection {...homeObjFive} />
      <Pricing />
    </>
  );
}

export default Home;
