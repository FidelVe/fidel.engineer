import { ExpBox } from "./miscComponents";
import styles from "../styles/experience.module.css";

export default function Experience() {
  return (
    <div className={styles.main}>
      <h2>Experience</h2>
      <ExpBox
        title="Project Lead."
        company="Espanicon (ICON Network Validator)"
        timeframe="2018 - Present"
      >
        <p>
          Espanicon is a project created to build blockchain based solutions in
          the ICON Network as well as run a node validator in its PoS chain.
        </p>
        <ul>
          <li>
            Remote administration of servers running validator nodes on mainnet
            and testnets, and RPC API nodes.
          </li>
          <li>
            Created several articles documenting technical specifications
            regarding the ICON Network ecosystem.
          </li>
          <li>Submitted improvements on specification for the network.</li>
          <li>
            Developed several projects focused on web3, NFT gaming, node
            monitoring, etc.
          </li>
        </ul>
      </ExpBox>
      <ExpBox
        title="Web Developer (FullStack)."
        company="Freelance - Remote"
        timeframe="2016 - Present"
      >
        <p>
          Worked on several projects related to front-end and back-end
          development using technologies such as Javascript, NodeJS and MongoDB.
        </p>
        <ul>
          <li>
            Developed web applications with ReactJS and NextJS (like this
            page!).
          </li>
          <li>Created REST API servers with nodeJS and ExpressJS.</li>
          <li>Developed and managed databases with MongoDB and mongooseJS.</li>
        </ul>
      </ExpBox>
      <ExpBox
        title="Web3 Developer."
        company="Freelance - Remote"
        timeframe="2020 - Present"
      >
        <p>
          Developed web applications that communicate and interact with
          blockchain networks, allowing users to login using blockchain wallets,
          interacted with smart contracts on the ICON Network fetching wallet
          information data, transactions data, signing transactions for token
          transfers and specific interactions with smart contracts that required
          wallet signing.
        </p>
      </ExpBox>
      <ExpBox
        title="Drilling Fluids Engineer."
        company="Halliburton"
        timeframe="2011 - 2019"
      >
        <p>
          Worked on remote drilling locations being in charge of the formulation
          and maintainance of the drilling fluid. as a DF Engineer some of my
          task were the following:
        </p>
        <ul>
          <li>
            Performing computer modeling to design new drilling fluid formulas
            that meet customer specifications
          </li>
          <li>
            Developing new drilling fluid formulas for existing drilling
            operations
          </li>
          <li>
            Consulting with clients to determine their needs and specifications
            for drilling fluid components
          </li>
          <li>
            Conducting research on chemicals used in drilling fluids to develop
            new products or improve existing ones
          </li>
          <li>
            Developing plans for the storage, handling, and disposal of
            hazardous materials used in drilling operations
          </li>
          <li>
            Conducting tests on new drilling fluids to ensure they meet
            requirements for a wide range of chemical and physical properties
          </li>
        </ul>
      </ExpBox>
    </div>
  );
}
