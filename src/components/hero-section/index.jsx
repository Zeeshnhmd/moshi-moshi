import Navbar from "../navbar";

import BeerText from "../../assets/beer-text.svg";
import ScrollDown from "../../assets/scroll-down.svg";

import styles from "./heroSection.module.scss";

const HeroSection = ({ scrollToProduct }) => {
  return (
    <>
      <div className={styles["hero-section-wrapper"]}>
        <div className={styles["hero-section"]}>
          <Navbar />
          <div className={styles["hero-content"]}>
            <div className={styles["title"]}>
              <p className={styles["toit"]}>Toit</p>
              <img
                className={`${styles["beer"]} img-fluid`}
                src={BeerText}
                alt=""
              />
            </div>
            <div className={styles["scroll-down"]} onClick={scrollToProduct}>
              <img
                className={`${styles["scroll-arrow"]} img-fluid`}
                src={ScrollDown}
                alt=""
              />
              <p className={styles["scroll-down-text"]}>Scroll down</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
