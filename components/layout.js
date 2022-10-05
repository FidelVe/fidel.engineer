import Head from "next/head";
import Image from "next/image";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import { HeaderAni } from "./miscComponents";
import Link from "next/link";

const waveImg = "/images/wave-blue.svg";
const name = "Fidel Sanchez-Bueno";
export const siteTitle = "Personal website - Fidel Sanchez-Bueno";
const siteDescription = "Personal website - Fidel Sanchez-Bueno";

export default function Layout({ children, home }) {
  return (
    <div className={styles.body}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteDescription} />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}></header>
      <main className={styles.main}>
        <div className={styles.mainTop}>
          <img className={styles.waveTop} src={waveImg} alt="wave background" />
        </div>
        <div className={styles.mainCenter}>{children}</div>
        <div className={styles.mainBottom}>
          <img
            className={styles.waveBottom}
            src={waveImg}
            alt="wave background"
          />
        </div>
      </main>
      <footer className={styles.footer}>
        <HeaderAni />
      </footer>
    </div>
  );
}
