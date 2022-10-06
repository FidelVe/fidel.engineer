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
      <header className={styles.header}>
        <h1>Fidel Sanchez-Bueno / Developer</h1>
        <div className={styles.headerContainer}>
          <div className={styles.headerInfoCointainer}>
            <p>
              Graduated in Chemical Engineering, I&apos;m a Software Developer
              with experience in web development (both frontend and backend),
              currently focused on web3 and blockchain related projects. I have
              experience maintaining and setting up PoS nodes on Linux servers,
              I&apos;m very comfortable working on Linux environments. I have
              been a linux power user for about 15 years, I&apos;m very familiar
              with docker, SSH, the linux terminal and linux systems overall,
              etc.
            </p>
          </div>
          <div className={styles.profilePicContainer}>
            <Image
              priority
              src="/images/profile-pic.jpeg"
              className={utilStyles.borderCircle}
              height={374}
              width={374}
              alt={name}
            />
          </div>
        </div>
      </header>
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
