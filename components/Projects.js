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
      hover: "Website",
      src: imgSrc.website,
      link: "https://butler.espanicon.team/"
    },
    {
      hover: "github backend",
      src: imgSrc.github,
      link: "https://github.com/Espanicon/node-butler-backend"
    },
    {
      hover: "github frontend",
      src: imgSrc.github,
      link: "https://github.com/Espanicon/node-butler-frontend"
    },
    {
      hover: "Project Proposal",
      src: imgSrc.report,
      link:
        "https://forum.icon.community/t/node-butler-icon-node-monitor-tools-to-simplify-node-management-and-monitoring/2778/7"
    }
  ],
  [
    {
      hover: "Github",
      src: imgSrc.github,
      link: "https://github.com/Espanicon/icon-node-monitor"
    },
    {
      hover: "Project Proposal",
      src: imgSrc.report,
      link:
        "https://forum.icon.community/t/node-butler-icon-node-monitor-tools-to-simplify-node-management-and-monitoring/2778/7"
    }
  ],
  [
    {
      hover: "Website",
      src: imgSrc.website,
      link: "https://www.supernode.racing/"
    },
    {
      hover: "Project Proposal",
      src: imgSrc.report,
      link: "https://forum.icon.community/t/supernode-racing-cps-proposal/2129"
    }
  ],
  [
    {
      hover: "Github",
      src: imgSrc.github,
      link: "https://github.com/Espanicon/espanicon-sdk"
    }
  ],
  [
    {
      hover: "Github",
      src: imgSrc.github,
      link: "https://github.com/Espanicon/Balanced-PNL"
    }
  ],
  [
    {
      hover: "Github",
      src: imgSrc.github,
      link: "https://github.com/Espanicon/ICON-Login"
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
      <ProjectBox
        title="ICON-Node-Monitor (telegram bot for PoS node monitoring)"
        arrayOfItems={data[1]}
      >
        <p>
          Icon-node-monitor is a bot intended to keep track of the status of a
          node (or list of nodes) in the ICON Network. The bot allows for a user
          to be the bot admin and has a lock/unlock state, if the bot is locked
          only the bot admin is allow to modify certain configurations
          (add/remove nodes to be monitored and users to the report list) and
          run certain commands (i.e stopping and starting the version check for
          the nodes).
        </p>
      </ProjectBox>
      <ProjectBox title="SuperNode Racing (Marketplace)" arrayOfItems={data[2]}>
        <p>
          SuperNode Racing is an upcoming NFT Racing game being built in the
          ICON Network. For this project I have developed the marketplace that
          will allow users to buy/sell and auction NFT items related to the
          game. The following are key details to summarize the development of
          this project:
          <ul>
            <li>
              Marketplace web page built using ReactJs. As a new project I was
              able to optimize the web page using the latest industry
              recommendations and updates regarding React, mainly in the use of
              functional components, hooks and state management without using
              external libraries.
            </li>
            <li>
              Web3 elements. To allow user interaction with the ICON blockchain
              a library for communication between the frontend and the ICON
              blockchain was developed enabling the possibility to safely sign
              transactions without exposing users private keys by connecting
              with native wallets in the ICON ecosystem.
            </li>
          </ul>
        </p>
      </ProjectBox>
      <ProjectBox
        title="Espanicon SDK (JS based SDK for the ICON Network)"
        arrayOfItems={data[3]}
      >
        <p>
          Espanicon SDK is a custom JS SDK for the ICON Network created
          specifically to be used in Espanicon projects related to development
          in the ICON Network. The benefit of using the Espanicon SDK is a more
          simpler syntax to make very common read-only queries to the ICON
          Network, and the methods for signed transactions returns a JSON object
          (ICON JSON-RPC) that can be given to any ICON wallet that implements
          the JS Provider standard (currently ICONex and Hana) and this will
          allow the signed transactions to be handled securely with the wallets
          without the need to expose the private keys.
        </p>
      </ProjectBox>
      <ProjectBox title="Balanced-PNL (Telegram bot)" arrayOfItems={data[4]}>
        <p>
          BalancedPNL is a bot intended to keep track of a wallet position on
          the Balanced Network. The bot gets your wallet debt on the platform
          and compares that debt to the value of all the tokens in the wallet to
          calculate a PNL.
        </p>
      </ProjectBox>
      <ProjectBox
        title="ICON-Login (Web3 React component)"
        arrayOfItems={data[5]}
      >
        <p>
          ICON-login is a react component that allows for user login based on
          ICON wallet addresses. It supports login via ICONex /Hana wallets and
          ledger devices.
        </p>
      </ProjectBox>
    </div>
  );
}
