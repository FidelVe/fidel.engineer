import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/index.module.css";
import utilStyles from "../styles/utils.module.css";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${styles.section} ${styles.aboutMe}`}>
        <AboutMe />
      </section>
      <section className={`${styles.section} ${styles.experience}`}>
        <Experience />
      </section>
      <section className={`${styles.section} ${styles.skills}`}>
        <Skills />
      </section>
      <section className={`${styles.section} ${styles.projects}`}>
        <Projects />
      </section>
      <section className={`${styles.section} ${styles.contact}`}>
        <Contact />
      </section>
    </Layout>
  );
}
