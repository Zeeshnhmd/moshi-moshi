import MenuIcon from "../../assets/menu-icon.svg";
import FindBeerIcon from "../../assets/find-beer.svg";
import Logo from "../../assets/logo.png";

import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles["navbar-wrapper"]}>
      <div className={`${styles["navbar"]} container`}>
        <div className={styles["logo-menu"]}>
          <img
            className={`${styles["menu-icon"]} img-fluid`}
            src={MenuIcon}
            alt=""
          />
          <span className={styles["brand-name"]}>Menu</span>
        </div>
        <img className={`${styles["logo"]} img-fluid`} src={Logo} alt="" />
        <ul className={styles["nav-menus"]}>
          <li className={styles["nav-link"]}>kudix</li>
          <li className={styles["nav-link"]}>Reservation</li>
          <li className={styles["nav-link"]}>brewery tour</li>
          <li className={styles["nav-link"]}>
            <span>Find My Beer</span>{" "}
            <img className="img-fluid" src={FindBeerIcon} alt="" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
