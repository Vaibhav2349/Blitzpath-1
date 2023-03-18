import React ,{useState,useEffect} from "react";
import Section1 from "./Section1/Section1";
import AboutUs from "../Home/AboutUs/AboutUs";
import ParallaxCircles from "./ParallaxSection/ParallaxCicrles";
// import Section3 from './Section3/Section3.js'
import Section2 from './Section2/Section2'
function About({isDarkMode}) {
  const [color,setColor] = useState('white')
  useEffect(() => {
    if(isDarkMode){
      setColor('white')
    }
    else{
      setColor('black')
    }
  }, [isDarkMode])
  return (
    <div >
      <div id='about'>

      <Section1 />
      </div>
    {/* {console.log(color)} */}
      <ParallaxCircles color={color}/>
      {/* <Section3/> */}
      <AboutUs color={color}/>
      <Section2 color={color}/>
    </div>
  );
}

export default About;
