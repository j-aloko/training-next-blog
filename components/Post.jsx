import styles from "../styles/post.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function Post({ post }) {
  const router = useRouter();

  const handleRoute = () => {
    router.push(`/${post.id}`);
  };

  return (
    <>
      <article className={styles.wrapper} onClick={handleRoute}>
        <Image
          src={post.img}
          alt=""
          height={400}
          width={post.id === 1 ? 750 : 350}
          priority
          className={post.id === 1 ? styles.image1 : styles.image}
        />
        <div className={styles.details}>
          <span className={styles.category}>{post.category}</span>
          <h3 className={styles.title}>{post.title}</h3>
          <span className={styles.name}>{post.name}</span>
        </div>
      </article>
    </>
  );
}

export default Post;
