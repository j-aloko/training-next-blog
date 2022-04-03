import styles from "../styles/post.module.css";
import Link from "next/link";

function Post({ post }) {
  return (
    <>
      <Link href={`/${post.id}`}>
        <article className={styles.wrapper}>
          <img
            src={post.img}
            alt=""
            className={post.id === 1 ? styles.image1 : styles.image}
          />

          <div className={styles.details}>
            <span className={styles.category}>{post.category}</span>
            <h3 className={styles.title}>{post.title}</h3>
            <span className={styles.name}>{post.name}</span>
          </div>
        </article>
      </Link>
    </>
  );
}

export default Post;
