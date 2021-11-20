import {FunctionComponent} from "react";
import Link from "next/link"
import styles from "../styles/Home.module.scss"
import { BiCodeCurly } from "react-icons/bi"
const Nav: FunctionComponent = () => {
  return <div className={styles.nav}>
    <Link href="/" ><h1>Ulicode <BiCodeCurly className={styles.logo}/></h1></Link>
    <Link href="/about"><a>About</a></Link>
    <Link href="/contact"><a>Contact</a></Link>
    <Link href="/portfolio"><a>Portfolio</a></Link>
  </div>
}

export default Nav
