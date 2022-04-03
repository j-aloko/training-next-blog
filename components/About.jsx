import React from "react";
import styles from "../styles/about.module.css";

function About() {
  return (
    <ul className={styles.container}>
      <li className={styles.items}>Style Guide</li>
      <li className={styles.items}>Contact</li>
      <li className={styles.items}>Get theme</li>
    </ul>
  );
}

export default About;
