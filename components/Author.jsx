import React from "react";
import styles from "../styles/author.module.css";
import Image from "next/image";

function Author({ image }) {
  return (
    <>
      <Image
        src={image}
        alt=""
        height={60}
        width={60}
        priority
        className={styles.image}
      />
    </>
  );
}

export default Author;
