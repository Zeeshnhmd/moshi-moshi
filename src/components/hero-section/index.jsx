import Navbar from "../navbar";
import styles from "./heroSection.module.scss";

const HeroSection = () => {
  return (
    <>
      <div className={styles["hero-section-wrapper"]}>
        <div className={styles["hero-section"]}>
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
