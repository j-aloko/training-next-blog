import styles from "../styles/subscribe.module.css";

import React from "react";

function Subscribe() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Subscribe to <span className={styles.italic}>new posts</span>{" "}
      </p>
      <form className={styles.form}>
        <input
          type="email"
          className={styles.email}
          placeholder="Your email address"
        />
        <button className={styles.subscribe}>Subscribe</button>
      </form>
    </div>
  );
}

export default Subscribe;
