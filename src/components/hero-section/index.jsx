import Fade from "react-reveal/Fade";

import Navbar from "../navbar";

import BeerText from "../../assets/beer-text.svg";
import ScrollDown from "../../assets/scroll-down.svg";

import styles from "./heroSection.module.scss";

const HeroSection = ({ scrollToProduct }) => {
  return (
    <>
      <div className={styles["hero-section-wrapper"]}>
        <div className={styles["hero-section"]}>
          <Fade top>
            <Navbar />
          </Fade>
          <div className={styles["hero-content"]}>
            <div className={styles["title"]}>
              <Fade top>
                <p className={styles["toit"]}>Toit</p>
              </Fade>
              <Fade top>
                <img
                  className={`${styles["beer"]} img-fluid`}
                  src={BeerText}
                  alt=""
                />
              </Fade>
            </div>
            <Fade top>
              <div className={styles["scroll-down"]} onClick={scrollToProduct}>
                <img
                  className={`${styles["scroll-arrow"]} img-fluid`}
                  src={ScrollDown}
                  alt=""
                />
                <p className={styles["scroll-down-text"]}>Scroll down</p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
