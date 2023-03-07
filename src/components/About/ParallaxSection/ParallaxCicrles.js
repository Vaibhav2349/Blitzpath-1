import { Parallax } from "react-scroll-parallax";
import styles from "./parallax.module.css";
const ParallaxCircles = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Why Us?</h2>
      <div className={styles.reasons}>
        <Parallax speed={10}>
          <div className={styles.circles}>
            <div className={styles.contentWrapper}>
              <h3>400+</h3>
              <h5>Technical Services Resources</h5>
            </div>
          </div>
        </Parallax>
        <Parallax speed={20}>
          <div className={styles.circles}>
            <div className={styles.contentWrapper}>
              <h3>30+</h3>
              <h5>Law Professionals</h5>
            </div>
          </div>
        </Parallax>
        <Parallax speed={-7}>
          <div className={styles.circles}>
            <div className={styles.contentWrapper}>
              <h3>110+</h3>
              <h5>Content Developers</h5>
            </div>
          </div>
        </Parallax>
        <Parallax speed={12}>
          <div className={styles.circles}>
            <div className={styles.contentWrapper}>
              <h3>150+</h3>
              <h5>Language Experts</h5>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default ParallaxCircles;
