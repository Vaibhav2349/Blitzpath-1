import React from 'react'
import images from '../../../images/Image' 
import "./Section2.css"
import { AnimationOnScroll } from 'react-animation-on-scroll'
function Section2() {
  // console.log(images)
  return (
       <section className="Section2_Container">
        <div className="Section2_Heading">
        <AnimationOnScroll
              animateOnce={false}
              offset={150}
              animateIn="animate__fadeInUp">
      
          
          <h1>Our Team</h1>
          </AnimationOnScroll>
        </div>
       
          <section className='Gallery_Stories'>
            <section class="Gallery_section">
              { images.map((ele,index)=>{
               return (<div class="Gallery-container" key={index}>
                  <img src={ele.src}/>
                </div>  )  
              })
}   
            </section>
        </section>
    </section>
  )
}

export default Section2
