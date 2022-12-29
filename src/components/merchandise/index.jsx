import ShopNowIcon from "../../assets/shop-now-icon.svg";
import MerchantProduct from "../../assets/merchant-product.png";
import HalfCircle from "../../assets/half-circle.svg";
import Circle from "../../assets/circle.svg";

import styles from "./merchandise.module.scss";

const Merchandise = () => {
  return (
    <div className={styles["merchandise-wrapper"]}>
      <div className={styles["left-side"]}>
        <p className={styles["title"]}>Want To purchase our merchandise</p>
        <p className={styles["description"]}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <a className={styles["shop-now"]} href="/">
          shop now <img src={ShopNowIcon} alt="" />
        </a>
        <img className={styles["half-circle"]} src={HalfCircle} alt="" />
      </div>
      <div className={styles["right-side"]}>
        <img
          className={styles["merchant-product"]}
          src={MerchantProduct}
          alt=""
        />
      </div>
      <img className={styles["circle"]} src={Circle} alt="" />
    </div>
  );
};

export default Merchandise;
