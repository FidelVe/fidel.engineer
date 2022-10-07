import { ProjectBox } from "./miscComponents";
import styles from "../styles/projects.module.css";

const imgSrc = {
  github: "/images/logo-github.svg",
  website: "/images/image-website.svg",
  report: "/images/img-report.svg"
};

const data = [
  [
    {
      hover: "hover text",
      src: imgSrc.github,
      link: "https:google.com"
    },
    {
      hover: "hover text",
      src: imgSrc.website,
      link: "https:google.com"
    }
  ],
  [
    {
      hover: "hover text",
      src: imgSrc.github,
      link: "https:google.com"
    },
    {
      hover: "hover text",
      src: imgSrc.report,
      link: "https:google.com"
    }
  ]
];
export default function Projects() {
  return (
    <div className={styles.main}>
      <h2>Projects</h2>
      <ProjectBox
        title="Node Butler (web3 application for PoS node management)"
        arrayOfItems={data[0]}
      >
        <p>
          Node butler is a web app that allow validators to login using any ICON
          wallet that implements the ICON JS Provider API (currently ICONex and
          Hana) or any supported Ledger device, to allow management of on-chain
          node related tasks like adding bonds, updating node data, signing tx
          methods, voting on network proposals and more it will also show
          detailed information about the node.
        </p>
      </ProjectBox>
    </div>
  );
}
