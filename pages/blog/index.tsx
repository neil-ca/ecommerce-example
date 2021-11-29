import Link from 'next/link'
//import styles from '../styles/Home.module.scss'
import { GetStaticProps } from 'next'
import Nav from '../../Nav'

const {CONTENT_API_KEY, API_URL }= process.env

type Post = {
  title: string
  slug: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`${API_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug`)
  const data = await res.json()
  const posts = data.posts
  if (!posts) {
    return { 
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: { posts },
    revalidate: 10
  }
}

const Blog: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props
  return (<>
  <Nav />
  <div>
    <h2>This blog is used only to clarify what was studied but if something works 
    for you, great!!</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link href="/blog/post/[slug]" as={`/blog/post/${post.slug}`}>
                <a>{post.title} ✍️</a>
              </Link>
            </li> )
          })}
      </ul>
    </div>
  </>)

}

export default Blog

