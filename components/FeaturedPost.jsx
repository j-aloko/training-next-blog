import styles from "../styles/FeaturedPost.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

function FeaturedPost({ featuredPost }) {
  const router = useRouter();

  const handleRoute = () => {
    router.push(`/${featuredPost.id}`);
  };

  return (
    <>
      <article className={styles.wrapper} onClick={handleRoute}>
        <Image
          src={featuredPost.img}
          alt=""
          height={400}
          width={260}
          priority
          className={styles.image}
        />
        <div className={styles.details}>
          <span className={styles.category}>{featuredPost.category}</span>
          <h3 className={styles.title}>{featuredPost.title}</h3>
          <span className={styles.name}>{featuredPost.name}</span>
        </div>
      </article>
    </>
  );
}

export default FeaturedPost;
