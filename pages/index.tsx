import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { BsTwitter } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import Nav from "../Nav";
import Image from "next/image";
// import Card from '../Card'

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <h1>Hi, I'm Neil👋</h1>
        <h1 className="text-3xl font-bold underline">Rust, apis, database performance and dev ops</h1>
        <p>
          Software developer especialist in backend living in México, who love
          solve problems and build things, enthusiast of the open source and
          disruptive technologies. On and ever upward
        </p>

        <p>
          {" "}
          I dont like fullstack term but spend most of my time as{" "}
          <strong>web developer</strong> doing backend, frontend and databases
          designs helping people grow their businesses.{" "}
        </p>
        <div className={styles.me}>
          <Image src="/me.jpg" width="150" height="150" alt="me" />
        </div>

        <div className={styles.contact}>
          <Link href="https://github.com/neil-ca" target="_blank">
            Github <GoMarkGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/neil-campos/" target="_blank">
            <AiFillLinkedin />
          </Link>
          <Link href="https://twitter.com/ulicode" target="_blank">
            <BsTwitter />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
