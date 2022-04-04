import styles from "../styles/postPage.module.css";
import Head from "../components/Head";
import Image from "next/image";

function PostPage({ post }) {
  return (
    <>
      <Head title={post?.title} content={post?.description} />
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <ul className={styles.categoryList}>
            {post.categories.map((c, index) => (
              <li className={styles.categories} key={index}>
                {c}
              </li>
            ))}
          </ul>
          <h1 className={styles.title}>{post?.title}</h1>
          <div className={styles.writer}>
            <img src={post?.img} alt="" className={styles.writersImage} />
            <div className={styles.extraDetails}>
              <span className={styles.name}>{post.username}</span>
              <span className={styles.datePosted}>12th march 2022</span>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={post?.img}
              alt=""
              layout="fill"
              priority
              className={styles.postImage}
            />
          </div>
          <div className={styles.descriptionWrapper}>
            <p className={styles.description}>{post?.description}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/posts/${params.postId}`, {
    method: "GET",
  });

  return {
    props: { post: res.data },
  };
}

export default PostPage;
