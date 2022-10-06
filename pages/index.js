import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/index.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${styles.section} ${styles.aboutMe}`}>
        <h2>About Me</h2>
      </section>
      <section className={`${styles.section} ${styles.experience}`}>
        <h2>Experience</h2>
      </section>
      <section className={`${styles.section} ${styles.projects}`}>
        <h2>Projects</h2>
      </section>
      <section className={`${styles.section} ${styles.contact}`}>
        <h2>Contact</h2>
      </section>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
