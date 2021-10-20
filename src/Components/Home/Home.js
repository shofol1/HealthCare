import React from "react";
import MemberShip from "../../MemberShip/MemberShip";
import TeamUp from "../../TeamUp/TeamUp";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import SliderSection from "../Slider/SliderSection";

const Home = () => {
  return (
    <div>
      <SliderSection></SliderSection>
      <Services></Services>
      <TeamUp></TeamUp>
      <MemberShip></MemberShip>
    </div>
  );
};

export default Home;
