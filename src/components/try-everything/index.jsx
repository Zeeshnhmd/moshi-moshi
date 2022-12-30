import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import Dog from "../../assets/dog.png";
import SmallCircle from "../../assets/small-circle.png";
import BeerGlass from "../../assets/beer-glass-70.png";
import BeerBottle from "../../assets/beer-bottle-130.png";
import Circle from "../../assets/circle.svg";

import styles from "./tryEveryThing.module.scss";

const TryEveryThing = () => {
  return (
    <div className={styles["try-everything-wrapper"]}>
      <div className={styles["try-everything"]}>
        <p className={styles["toit-brewery"]}>TOIT BREWERY</p>
        <Zoom>
          <img
            className={`${styles["small-circle"]} img-fluid`}
            src={SmallCircle}
            alt=""
          />
        </Zoom>
        <Fade left>
          <img
            className={`${styles["beer-glass"]} img-fluid`}
            src={BeerGlass}
            alt=""
          />
        </Fade>
        <Fade right>
          <img
            className={`${styles["beer-bottle"]} img-fluid`}
            src={BeerBottle}
            alt=""
          />
        </Fade>
        <Zoom>
          <img
            className={`${styles["circle"]} img-fluid`}
            src={Circle}
            alt=""
          />
        </Zoom>

        <div className={styles["try-everything-content"]}>
          <Zoom>
            <img className={`${styles["dog"]} img-fluid`} src={Dog} alt="" />
          </Zoom>

          <Fade top>
            <p className={styles["come-by"]}>Come by. Try everything twice.</p>
          </Fade>
          <Fade top>
            <span className={styles["love"]}>Love</span>
          </Fade>
        </div>
      </div>
      <div className={styles["try-everything-bg"]}></div>
    </div>
  );
};

export default TryEveryThing;
