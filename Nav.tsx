import Link from 'next/link'
import {FaBloggerB} from 'react-icons/fa'

import styles from './styles/Home.module.scss'
const Nav: React.FC = () => {
  return (
  <div className={styles.navbar}>
    <Link href="/"><h1>ulicode«»</h1></Link>
    <div>
      <Link href="/blog"><a>ßlog</a></Link>
    </div>
  </div>
  )
}
export default Nav
