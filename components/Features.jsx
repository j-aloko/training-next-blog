import React from "react";
import styles from "../styles/features.module.css";

function Features() {
  return (
    <ul className={styles.container}>
      <li className={styles.items}>Features</li>
      <li className={styles.items}>Authors</li>
      <li className={styles.items}>Tags</li>
    </ul>
  );
}

export default Features;
