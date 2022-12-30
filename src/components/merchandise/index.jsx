import Fade from "react-reveal/Fade";

import ShopNowIcon from "../../assets/shop-now-icon.svg";
import MerchantProduct from "../../assets/merchant-product.png";
import HalfCircle from "../../assets/half-circle.svg";
import Circle from "../../assets/circle.svg";

import styles from "./merchandise.module.scss";

const Merchandise = () => {
  return (
    <div className={styles["merchandise-wrapper"]}>
      <div className={styles["left-side"]}>
        <Fade left>
          <p className={styles["title"]}>Want To purchase our merchandise</p>
          <p className={styles["description"]}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <a className={styles["shop-now"]} href="/">
            shop now{" "}
            <img
              className={`${styles["shop-now-arrow"]} img-fluid`}
              src={ShopNowIcon}
              alt=""
            />
          </a>
          <img
            className={`${styles["half-circle"]} img-fluid`}
            src={HalfCircle}
            alt=""
          />
        </Fade>
      </div>
      <div className={styles["right-side"]}>
        <Fade right>
          <img
            className={`${styles["merchant-product"]} img-fluid`}
            src={MerchantProduct}
            alt=""
          />
        </Fade>
      </div>
      <img className={`${styles["circle"]} img-fluid`} src={Circle} alt="" />
    </div>
  );
};

export default Merchandise;
