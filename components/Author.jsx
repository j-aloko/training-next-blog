import React from "react";
import styles from "../styles/author.module.css";

function Author({ image }) {
  return (
    <>
      <img src={image} alt="" className={styles.image} />
    </>
  );
}

export default Author;
