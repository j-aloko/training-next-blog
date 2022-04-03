import React from "react";
import styles from "../styles/navbar.module.css";
//import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

function Navbar() {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.navbarLeft}>
          <div className={styles.logo}>
            <Link href="/">
              <img
                src="https://genki.fueko.net/content/images/2021/04/genki.svg"
                alt=""
                className={styles.image}
              />
            </Link>
          </div>
          <nav>
            <ul className={styles.navItems}>
              <li className={styles.leftNavItems}>Features</li>
              <li className={styles.leftNavItems}>Style Guide</li>
              <li className={styles.leftNavItems}>Membership</li>
            </ul>
          </nav>
        </div>
        <div className={styles.navbarRight}>
          <nav>
            <ul className={styles.navItems}>
              <li className={styles.rightNavAuthItems}>
                <button className={styles.signin}>Sign in</button>
                <button className={styles.signup}>Sign up</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
