import Link from "next/link";
import Image from "next/image";
import styles from "./styles/Home.module.scss";
const Nav: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <Image src="/icon.svg" width="22" height="22" alt="icon" />
      <Link href="/">
        <h1>ulicode</h1>
      </Link>
      <div>
        <Link href="/blog">BLOG</Link>
      </div>
    </div>
  );
};
export default Nav;
