import Link from 'next/link'

import styles from './styles/Home.module.scss'
const Nav: React.FC = () => {
  return (
  <div className={styles.navbar}>
    <Link href="/"><h1>ulicode«»</h1></Link>
    <div>
      <Link href="/blog"><a>Blog</a></Link>
    </div>
  </div>
  )
}
export default Nav
