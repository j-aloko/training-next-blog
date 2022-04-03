import styles from "../styles/postPage.module.css";
import { posts } from "../Dummy";
import { getSinglePost } from "../api-fetch-util";

function PostPage({ post }) {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <ul className={styles.categoryList}>
          <li className={styles.categories}>creative</li>
          <li className={styles.categories}>art</li>
          <li className={styles.categories}>Lifestyle</li>
        </ul>
        <h1 className={styles.title}>You must grow like a tree</h1>
        <div className={styles.writer}>
          <img src={post.img} alt="" className={styles.writersImage} />
          <div className={styles.extraDetails}>
            <span className={styles.name}>Joey Tsino</span>
            <span className={styles.datePosted}>12th march 2022</span>
          </div>
        </div>
        <img src={post.img} alt="" className={styles.postImage} />
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus
            qui blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat
          </p>
        </div>
      </div>
    </main>
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
    fallback: "blocking",
  };
}

export default PostPage;
