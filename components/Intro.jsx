import React from "react";
import styles from "../styles/intro.module.css";

function Intro() {
  return (
    <section className={styles.container}>
      <p className={styles.Mainparagraph}>
        Thoughts, stories and ideas by the Genki team
      </p>
      <p className={styles.Subparagraph}>
        Genki is a minimal theme for Ghost. A beautiful way to share stories
        with your growing audience.
      </p>
      <button className={styles.subscribe}>Become a subscriber</button>
    </section>
  );
}

export default Intro;
