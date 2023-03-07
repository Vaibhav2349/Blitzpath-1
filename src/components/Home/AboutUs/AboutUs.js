import styles from "./AboutUs.module.css";
import testImage from "../../../images/animate.png";
import animte2 from  "../../../images/animte2.png";
import animate3 from "../../../images/animate3.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
const AboutUs = () => {
  return (
    <div className={styles.about}>
      <div className={styles.craouselContainer}>
        <AnimationOnScroll    animateOnce={false}
              offset={150}
              animateIn="animate__fadeInUp">
          
        <h1>About Us</h1>
        </AnimationOnScroll>
        <div className={styles.type1}>
          <div className={styles.img}>
            <AnimationOnScroll
              animateOnce={false}
              offset={150}
              animateIn="animate__fadeInLeftBig"
            >
              <img src={testImage} alt="" />
              
            </AnimationOnScroll>
          </div>

          <div className={styles.content}>
            <AnimationOnScroll
              animateOnce={false}
              offset={150}
              animateIn="animate__fadeInRightBig"
            >
              <h2 style={{ margin: "0", marginBottom: "1rem" }}>Why choose Blitzpath</h2>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              leo a nisl aliquet aliquam. Sed euismod, nisl eu vulputate vel fel
              is. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vel leo a nisl aliquet aliquam. Sed euismod, nisl eu vulputate vel
              fel is. There was something beautiful in his hate. It wasn't the
              hate itself
            </AnimationOnScroll>
          </div>
        </div>
        <div className={styles.type2}>
          <div className={styles.content}>
            <AnimationOnScroll
              animateOnce={false}
              offset={150}
              animateIn="animate__fadeInLeftBig"
            >
              <h2 style={{ margin: "0", marginBottom: "1rem" }}>About our company</h2>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              leo a nisl aliquet aliquam. Sed euismod, nisl eu vulputate vel fel
              is. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vel leo a nisl aliquet aliquam. Sed euismod, nisl eu vulputate vel
              fel is. There was something beautiful in his hate. It wasn't the
              hate itself
            </AnimationOnScroll>
          </div>
          <div className={styles.img}>
            <AnimationOnScroll
              animateOnce={false}
              offset={150}
              animateIn="animate__fadeInRightBig"
            >
              <img src={animte2} alt="" />
            </AnimationOnScroll>
          </div>
        </div>
        <div className={styles.type1}>
          <div className={styles.img}>
            <AnimationOnScroll
              animateOnce={false}
              offset={150}
              animateIn="animate__fadeInLeftBig"
            >
              <img src={animate3} alt="" />
            </AnimationOnScroll>
          </div>
          <div className={styles.content}>
            <AnimationOnScroll
              animateOnce={false}
              offset={150}
              animateIn="animate__fadeInRightBig"
            >
              <h2 style={{ margin: "0", marginBottom: "1rem" }}>Title 1</h2>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              leo a nisl aliquet aliquam. Sed euismod, nisl eu vulputate vel fel
              is. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vel leo a nisl aliquet aliquam. Sed euismod, nisl eu vulputate vel
              fel is. There was something beautiful in his hate. It wasn't the
              hate itself
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
