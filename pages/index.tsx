import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { GetStaticProps } from 'next'
import { BsTwitter } from 'react-icons/bs'
import { GoMarkGithub } from 'react-icons/go'
import { AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai'
import { RiCodeView} from 'react-icons/ri'
const {CONTENT_API_KEY, API_URL }= process.env

type Post = {
  title: string
  slug: string
}

async function getPosts() {
  const res = await fetch(
    `${API_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug`)
  .then((res) => res.json())
  
  const posts = res.posts
  return posts
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getPosts()
  return {
    props: { posts },
    revalidate: 10
  }
}

const Home: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props
  return (<>
  
  <div className={styles.navbar}>
    <h1>ulicode<RiCodeView className={styles.logo}/></h1>
    <div>
      <Link href="/porfolio"><a>Porfolio</a></Link>
      <Link href="/blog"><a>Blog</a></Link>
    </div>
  </div>
  <div >
    <h1>Hello, I'm Neil 👋</h1>
    <p>I'm a software developer living in México who love solve problems, enthusiast of the 
    open source and disruptive technologies. On and ever upward</p>
    <GoMarkGithub/> <BsTwitter/> <AiFillLinkedin /> <AiOutlineWhatsApp/>
    <p> I dont like fullstack term but spend most of my time as <strong>web developer</strong> doing
    backend and frontend developments also things like automation tools or system 
    programming</p>
    <h3>Skills On 🔥</h3>
      <ul>
        <li>Java</li>
        <li>Javascript (react, node)</li>
        <li>Docker, Kubernates, Cloud(aws)</li>
        <li>SQL(mysql, postgres, sqlite), NoSQL, Redis</li>
        <li>Linux - Networks and protocols, Golang, Nginx, Scale systems</li>
        <li>English</li>
      </ul>
    <h3>Knowledge Interest 📚</h3>
    <ul>
      <li>Blockchain</li>
      <li>Software security</li>
    </ul>
  </div>
  <div>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li> )
          })}
      </ul>
    </div>
  </>)

}

export default Home
