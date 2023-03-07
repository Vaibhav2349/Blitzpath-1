import React from 'react'
import images from '../../../images/Image' 
import "./Section2.css"
function Section2() {
  // console.log(images)
  return (
       <section className="Section2_Container">
        <div className="Section2_Heading">
          <h1>Gallery</h1>
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
