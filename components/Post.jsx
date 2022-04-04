import styles from "../styles/post.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function Post({ post }) {
  const router = useRouter();

  const handleRoute = () => {
    router.push(`/${post?._id}`);
  };

  return (
    <>
      <article className={styles.wrapper} onClick={handleRoute}>
        <Image
          src={post?.img}
          alt=""
          height={400}
          width={post?._id === "624ae192c687f0b6cb5bab84" ? 750 : 350}
          priority
          className={
            post?.id === "624ae192c687f0b6cb5bab84"
              ? styles.image1
              : styles.image
          }
        />
        <div className={styles.details}>
          <span className={styles.category}>{post?.categories[0]}</span>
          <h3 className={styles.title}>{post?.title}</h3>
          <span className={styles.name}>{post?.username}</span>
        </div>
      </article>
    </>
  );
}

export default Post;
