import React from "react";
import Section1 from "./Section1/Section1";
import AboutUs from "../Home/AboutUs/AboutUs";
import ParallaxCircles from "./ParallaxSection/ParallaxCicrles";
// import Section3 from './Section3/Section3.js'
// import Section2 from './Section2/Section2'
function About() {
  return (
    <div>
      <Section1 />
      {/* <Section2/> */}

      <ParallaxCircles />
      {/* <Section3/> */}
      <AboutUs />
    </div>
  );
}

export default About;
