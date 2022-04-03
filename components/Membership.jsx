import React from "react";
import styles from "../styles/membership.module.css";

function Membership() {
  return (
    <ul className={styles.container}>
      <li className={styles.items}>Account</li>
      <li className={styles.items}>Sign in</li>
      <li className={styles.items}>Sign up</li>
    </ul>
  );
}

export default Membership;
