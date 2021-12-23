import Link from 'next/link'
import styles from './Blog.module.scss'
import Nav from '../../Nav'
const Blog: React.FC = () => {
  return (<>
  <Nav />
  <div className={styles.container}>
    <p>I like to write about anything that I am currently working or something
    new that interests me. I hope you enjoy you can find me on <a href="https://twitter.com/ulicode" 
    target="_blank">twitter</a></p>
      <ul>
        <li>
          <Link href="/blog/post/networks"><a>Overview of Networked systems</a></Link>
         </li> 
      </ul>
    </div>
  </>)

}
export default Blog

