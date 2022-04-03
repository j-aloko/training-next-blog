import React from "react";
import styles from "../styles/FeaturedPost.module.css";
import Link from "next/link";

function FeaturedPost({ featuredPost }) {
  return (
    <>
      <Link href={`/${featuredPost.id}`}>
        <article className={styles.wrapper}>
          <img src={featuredPost.img} alt="" className={styles.image} />
          <div className={styles.details}>
            <span className={styles.category}>{featuredPost.category}</span>
            <h3 className={styles.title}>{featuredPost.title}</h3>
            <span className={styles.name}>{featuredPost.name}</span>
          </div>
        </article>
      </Link>
    </>
  );
}

export default FeaturedPost;
