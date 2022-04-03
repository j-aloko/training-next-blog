import styles from "../styles/postPage.module.css";
import { posts } from "../Dummy";
import { getSinglePost } from "../api-fetch-util";
import Head from "../components/Head";
import Image from "next/image";

function PostPage({ post }) {
  return (
    <>
      <Head title={post.title} content={post.description} />
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <ul className={styles.categoryList}>
            <li className={styles.categories}>creative</li>
            <li className={styles.categories}>art</li>
            <li className={styles.categories}>Lifestyle</li>
          </ul>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.writer}>
            <img src={post.img} alt="" className={styles.writersImage} />
            <div className={styles.extraDetails}>
              <span className={styles.name}>Joey Tsino</span>
              <span className={styles.datePosted}>12th march 2022</span>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={post.img}
              alt=""
              layout="fill"
              priority
              className={styles.postImage}
            />
          </div>
          <div className={styles.descriptionWrapper}>
            <p className={styles.description}>{post.description}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const Id = context.params.postId;
  const post = getSinglePost(posts, Id);

  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const path = posts.map((p) => ({ params: { postId: p.id + "" } }));

  return {
    paths: path,
    fallback: true,
  };
}

export default PostPage;
