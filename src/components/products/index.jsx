import styles from "./products.module.scss";

const Products = () => {
  return (
    <div className={styles["produts-wrapper"]}>
      <div className={styles["product1"]}>
        <div className={styles["product-info"]}>
          <p className={styles["product-name"]}>
            ba<span className={styles["outline-text"]}>rs</span>
          </p>
          <p className={styles["prodcut-description"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            et.
          </p>
        </div>
      </div>
      <div className={styles["product2"]}>
        <div className={styles["product-info"]}>
          <p className={styles["product-name"]}>
            be<span className={styles["outline-text"]}>ers</span>
          </p>
          <p className={styles["prodcut-description"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            et.
          </p>
        </div>
      </div>
      <div className={styles["product3"]}>
        <div className={styles["product-info"]}>
          <p className={styles["product-name"]}>
            brew<span className={styles["outline-text"]}>ery</span>
          </p>
          <p className={styles["prodcut-description"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            et.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
