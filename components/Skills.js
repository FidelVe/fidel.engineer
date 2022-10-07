import styles from "../styles/skills.module.css";

const filenames = [
  "aws.svg",
  "docker.png",
  "github.png",
  "vim.svg",
  "linux.svg",
  "html.svg",
  "css.svg",
  "javascript.svg",
  "typescript.svg",
  "react.svg",
  "next.svg",
  "node.svg",
  "mongo.png",
  "nginx.svg",
  "python.svg"
];
const path = "/images/logo-";

export default function Skills() {
  return (
    <>
      <h2>Skills</h2>
      <p>
        I have several years of experience working with many technologies in
        different aspects of software development, from running and creating
        containers with Docker, setting up web applications in AWS, using NGINX
        as a reverse proxy and load balancer, etc. Currently my focus on the
        frontend is with Javascript / Typescript using ReactJS and NextJS and on
        the backend with NodeJS, ExpressJS and MongoDB and MongooseJS for
        database solutions, last but not least my preferred text editor is Vim!.
      </p>
      <IconReel />
    </>
  );
}

function IconReel() {
  return (
    <div className={styles.reelContainer}>
      {filenames.map((filename, id) => {
        return (
          <div className={styles.logoContainer} key={`${filename}-${id}`}>
            <img
              src={`${path}${filename}`}
              alt={`${filename}`}
              className={styles.logo}
            />
          </div>
        );
      })}
    </div>
  );
}
