import React from "react";
import styles from "../styles/authors.module.css";
import Author from "./Author";

function Authors({ topAuthors }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {topAuthors?.map((t) => (
          <Author key={t.id} image={t.img} />
        ))}
      </div>
      <span className={styles.description}>Meet our top authors</span>
    </div>
  );
}

export default Authors;
