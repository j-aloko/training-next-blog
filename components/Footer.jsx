import React from "react";
import styles from "../styles/footer.module.css";
import Subscribe from "./Subscribe";
import Line from "./Line";
import Social from "./Social";
import About from "./About";
import Features from "./Features";
import Membership from "./Membership";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <Subscribe />
        <Line />
        <div className={styles.logo}>
          <img
            src="https://genki.fueko.net/content/images/2021/04/genki.svg"
            alt=""
            className={styles.image}
          />
        </div>
        <nav>
          <ul className={styles.navigationItems}>
            <li className={styles.headers}>
              <span className={styles.title}>SOCIAL</span>
              <Social />
            </li>
            <li className={styles.headers}>
              <span className={styles.title}>ABOUT</span>
              <About />
            </li>
            <li className={styles.headers}>
              <span className={styles.title}>FEATURES</span>
              <Features />
            </li>
            <li className={styles.headers}>
              <span className={styles.title}>MEMBERSHIP</span>
              <Membership />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
