import Fade from "react-reveal/Fade";

import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import Image4 from "../../assets/image4.jpg";

import styles from "./imageGallery.module.scss";

const ImageGallery = () => {
  return (
    <div className={styles["image-gallery-wrapper"]}>
      <Fade left>
        <img
          className={`${styles["image"]} img-fluid`}
          src={Image1}
          alt="image1"
        />
      </Fade>
      <Fade left>
        <img
          className={`${styles["image"]} img-fluid`}
          src={Image2}
          alt="image2"
        />
      </Fade>
      <Fade right>
        <img
          className={`${styles["image"]} img-fluid`}
          src={Image3}
          alt="image3"
        />
      </Fade>
      <Fade right>
        <img
          className={`${styles["image"]} img-fluid`}
          src={Image4}
          alt="image4"
        />
      </Fade>
    </div>
  );
};

export default ImageGallery;
