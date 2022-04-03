import React from "react";
import styles from "../styles/social.module.css";

function Social() {
  return (
    <ul className={styles.container}>
      <li className={styles.socials}>Facebook</li>
      <li className={styles.socials}>Twitter</li>
      <li className={styles.socials}>Instagram</li>
    </ul>
  );
}

export default Social;
