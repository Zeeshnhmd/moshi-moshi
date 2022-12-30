import FooterSvg from "../../assets/footer-svg.svg";
import FooterGlass from "../../assets/footer-glass.png";
import LinkArrow from "../../assets/footer-arrow.svg";
import BackToTop from "../../assets/back-to-top.svg";

import styles from "./footer.module.scss";

const Footer = () => {
  const footerLinks = [
    { id: "1", title: "About", link: "/about" },
    { id: "2", title: "Beers", link: "/beers" },
    { id: "3", title: "Food", link: "/food" },
    { id: "4", title: "Shop", link: "/shop" },
    { id: "5", title: "Contact", link: "/contact" },
  ];
  return (
    <div className={styles["footer-wrapper"]}>
      <div className={styles["footer-svg"]}>
        <img src={FooterSvg} alt="" />
      </div>
      <div className={styles["footer-glass"]}>
        <img src={FooterGlass} alt="" />
      </div>

      <div className="container">
        <div className={styles["back-to-top"]}>
          <img className={styles["arrow"]} src={BackToTop} alt="" />
          <p className={styles["top"]}>Top</p>
        </div>
        <div className={styles["footer-content"]}>
          <div className={styles["footer-left-content"]}>
            <ul className={styles["footer-ul"]}>
              {footerLinks.map((el) => (
                <li key={el.id} className={styles["footer-li"]}>
                  <a className={styles["footer-a"]} href={el.link}>
                    <img src={LinkArrow} alt="" />
                    {el.title}
                  </a>
                </li>
              ))}
            </ul>
            <p className={styles["copyright"]}>© Copyright 2021 </p>
          </div>
          <div className={styles["footer-right-content"]}>
            <p className={styles["address"]}>
              298, 100 Ft Rd, <br /> Indira Nagar II Stage,
              <br /> Bengaluru 560038 <br /> Karnataka
            </p>
            <p className={styles["phone"]}>+91 90197 13388</p>
            <p className={styles["email"]}>toitblr@toit.in</p>
            <p className={styles["all-right"]}>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;