import FeaturedPostList from "../components/FeaturedPostList";
import HomeLayout from "../components/HomeLayout";
import styles from "../styles/Home.module.css";
import Header from "./../components/Head";
import Intro from "./../components/Intro";
import { Featured, topAuthors, posts } from "./../Dummy";
import Authors from "./../components/Authors";
import Posts from "./../components/Posts";

export default function Home({ Featured, posts, topAuthors }) {
  return (
    <>
      <Header
        title="Genki - Magazine Ghost blog"
        description="A beautiful way to share stories with your growing audience."
      />
      <HomeLayout>
        <main className={styles.main}>
          <Intro />
          <FeaturedPostList Featured={Featured} />
          <div className={styles.latestPost}>
            <p className={styles.whatsNew}>See what we’ve written lately</p>
            <Authors topAuthors={topAuthors} />
          </div>
          <Posts posts={posts} />
        </main>
      </HomeLayout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { Featured, posts, topAuthors },
  };
}
