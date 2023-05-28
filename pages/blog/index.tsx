import Link from 'next/link'
import styles from './Blog.module.scss'
import Nav from '../../Nav'
// import { addListener } from 'process'
const Blog: React.FC = () => {
  return (<>
  <Nav />
  <div className={styles.container}>
    <p>I like to write about anything that I am currently working or something
    new that interests me. I hope you enjoy you can find me on <Link href="https://twitter.com/ulicode" 
    target="_blank">twitter</Link></p>
      <ul>
        <li>
          <Link href="/blog/post/networks">Overview of Networked systems</Link>
         </li> 
      </ul>
    </div>
  </>)

}
export default Blog

