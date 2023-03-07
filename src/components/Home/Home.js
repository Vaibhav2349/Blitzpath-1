import React from 'react'
import AboutUs from './AboutUs/AboutUs'
import LastPage from './LastPage/LastPage'
import Services from './services/Services'
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
import ImageSlider from "./image_crousel/Image_crousel"
function Home() {
    const { height, width } = useWindowDimensions();
  return (
    <div>
        <ImageSlider/>
        <Services/>
        <AboutUs />
        <LastPage width={width}/>
    </div>
  )
}

export default Home