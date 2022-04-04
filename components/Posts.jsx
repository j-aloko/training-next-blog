import styles from "../styles/posts.module.css";
import React, { useState } from "react";
import Post from "./Post";

function Posts({ posts }) {
  const [load, setLoad] = useState(8);

  const loadMoreData = (e) => {
    e.preventDefault();
    setLoad(load + 3);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {posts.slice(0, load).map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
      {load !== posts.length && (
        <div className={styles.buttonWrapper}>
          <button className={styles.button} onClick={loadMoreData}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
}

export default Posts;
