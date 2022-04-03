import React from "react";
import styles from "../styles/homeLayout.module.css";

function HomeLayout({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default HomeLayout;
