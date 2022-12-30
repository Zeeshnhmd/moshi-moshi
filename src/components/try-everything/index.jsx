import styles from "./tryEveryThing.module.scss";
import Dog from "../../assets/dog.png";
import SmallCircle from "../../assets/small-circle.png";
import BeerGlass from "../../assets/beer-glass-70.png";
import BeerBottle from "../../assets/beer-bottle-130.png";
import Circle from "../../assets/circle.svg";

const TryEveryThing = () => {
  return (
    <div className={styles["try-everything-wrapper"]}>
      <div className={styles["try-everything"]}>
        <p className={styles["toit-brewery"]}>TOIT BREWERY</p>
        <img
          className={`${styles["small-circle"]} img-fluid`}
          src={SmallCircle}
          alt=""
        />
        <img
          className={`${styles["beer-glass"]} img-fluid`}
          src={BeerGlass}
          alt=""
        />
        <img
          className={`${styles["beer-bottle"]} img-fluid`}
          src={BeerBottle}
          alt=""
        />
        <img className={`${styles["circle"]} img-fluid`} src={Circle} alt="" />
        <div className={styles["try-everything-content"]}>
          <img className={`${styles["dog"]} img-fluid`} src={Dog} alt="" />

          <p className={styles["come-by"]}>Come by. Try everything twice.</p>
          <span className={styles["love"]}>Love</span>
        </div>
      </div>
      <div className={styles["try-everything-bg"]}></div>
    </div>
  );
};

export default TryEveryThing;
