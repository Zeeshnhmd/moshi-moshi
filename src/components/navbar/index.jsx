import { useState } from "react";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

import MenuIcon from "../../assets/menu-icon.svg";
import FindBeerIcon from "../../assets/find-beer.svg";
import Logo from "../../assets/logo.png";

import styles from "./navbar.module.scss";

const Navbar = () => {
  const [navState, setNavState] = useState(false);

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
        <div className={styles["toogle-container"]}>
          {navState ? (
            <MdClose
              className={styles["toogle"]}
              onClick={() => setNavState(false)}
            />
          ) : (
            <GiHamburgerMenu
              className={styles["toogle"]}
              onClick={() => setNavState(true)}
            />
          )}
        </div>
        <div
          className={`${styles["links-container"]} ${
            navState ? styles["nav-visible"] : ""
          }`}
        >
          <ul className={styles["nav-menus"]}>
            <li className={styles["nav-link"]}>
              <a href="/">kudix</a>
            </li>
            <li className={styles["nav-link"]}>
              <a href="/">Reservation</a>
            </li>
            <li className={styles["nav-link"]}>
              <a href="/">brewery tour</a>
            </li>
            <li className={styles["nav-link"]}>
              <a href="/">
                <span>Find My Beer</span>
                <img className="img-fluid" src={FindBeerIcon} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
