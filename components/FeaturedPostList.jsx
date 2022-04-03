import React from "react";
import FeaturedPost from "./FeaturedPost";
import styles from "../styles/featuredPostList.module.css";

function FeaturedPostList({ Featured }) {
  return (
    <div className={styles.wrapper}>
      {Featured?.map((f) => (
        <FeaturedPost key={f.id} featuredPost={f} />
      ))}
    </div>
  );
}

export default FeaturedPostList;
