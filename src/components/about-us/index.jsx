import ExploreIcon from "../../assets/explore.svg";
import AboutUsImage from "../../assets/aboutus.jpg";

import styles from "./about-us.module.scss";

const AboutUs = () => {
  return (
    <div className={styles["about-us-wrapper"]}>
      <div className={styles["about-us"]}>
        <div className="container">
          <div className={styles["about-us-content"]}>
            <div className={styles["left-side"]}>
              <p className={styles["heading"]}>About Us</p>
              <p className={styles["title"]}>
                We are Toit. <br /> You should be too…
              </p>
              <p className={styles["description"]}>
                Toit is a brew pub, brewing a revolutionary culture. We started
                out as a sweet little Bengaluru brewing culture with the promise
                of some bodacious brews, fabulous foods and a supreme brew-pub
                experience
              </p>

              <a href="/" className={styles["explore"]}>
                Explore <img className="img-fluid" src={ExploreIcon} alt="" />
              </a>
            </div>
            <div className={styles["right-side"]}>
              <img className="img-fluid" src={AboutUsImage} alt="" />
            </div>
          </div>
          <p className={styles["toit-brewery"]}>TOIT BREWERY</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
