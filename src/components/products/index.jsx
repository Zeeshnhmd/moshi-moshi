import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import styles from "./products.module.scss";

const Products = () => {
  return (
    <div className={styles["produts-wrapper"]}>
      <Fade left>
        <div className={styles["product1"]}>
          <Fade top>
            <div className={styles["product-info"]}>
              <p className={styles["product-name"]}>
                ba<span className={styles["outline-text"]}>rs</span>
              </p>
              <p className={styles["prodcut-description"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, et.
              </p>
            </div>
          </Fade>
        </div>
      </Fade>
      <Zoom cascade>
        <div className={styles["product2"]}>
          <div className={styles["product-info"]}>
            <p className={styles["product-name"]}>
              be<span className={styles["outline-text"]}>ers</span>
            </p>
            <p className={styles["prodcut-description"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, et.
            </p>
          </div>
        </div>
      </Zoom>
      <Fade right>
        <div className={styles["product3"]}>
          <Fade top>
            <div className={styles["product-info"]}>
              <p className={styles["product-name"]}>
                brew<span className={styles["outline-text"]}>ery</span>
              </p>
              <p className={styles["prodcut-description"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, et.
              </p>
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

export default Products;
