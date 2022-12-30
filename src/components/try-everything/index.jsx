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
        <img className={styles["small-circle"]} src={SmallCircle} alt="" />
        <img className={styles["beer-glass"]} src={BeerGlass} alt="" />
        <img className={styles["beer-bottle"]} src={BeerBottle} alt="" />
        <img className={styles["circle"]} src={Circle} alt="" />
        <div className={styles["try-everything-content"]}>
          <img className={styles["dog"]} src={Dog} alt="" />

          <p className={styles["come-by"]}>Come by. Try everything twice.</p>
          <span className={styles["love"]}>Love</span>
        </div>
      </div>
      <div className={styles["try-everything-bg"]}></div>
    </div>
  );
};

export default TryEveryThing;
