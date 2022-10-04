import Head from "next/head";
import Image from "next/image";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import { HeaderAni } from "./miscComponents";
import Link from "next/link";

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
      <input id="menu-toggle" className={styles.menuToggle} type="checkbox" />
      <label className={styles.menuButtonContainer} htmlFor="menu-toggle">
        <div className={styles.menuButton}></div>
      </label>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.headerSection}>
            <div className={styles.logoContainer}>
              <Link href="/">
                <div className={styles.logoContainerInner}>
                  <HeaderAni />
                </div>
              </Link>
              <div className={styles.hamburguerMenuShadow}></div>
            </div>
            <div className={styles.routesContainer}>
              <div className={styles.routesSection}>
                <Link href="/app">
                  <a>App</a>
                </Link>
              </div>
              <div className={styles.routesSection}>
                <Link href="/about/">
                  <a>About</a>
                </Link>
              </div>
              <div className={styles.routesSection}>
                <Link href="/contact/">
                  <a>Contact</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
