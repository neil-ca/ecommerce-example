import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

const {CONTENT_API_KEY, API_URL }= process.env

type Post = {
  title: string
  slug: string
}

async function getPosts() {
  const res = await fetch(
    `${API_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,excerpt`)
  .then((res) => res.json())
  
  const posts = res.posts
  return posts
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getPosts()
  return {
    props: { posts }
  }
}

const Home: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props
  return (<>
    <Head>
      <title>ulicode</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  
  <div>
      <h1>Hello</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                <a>{post.title}{post.slug}</a>
              </Link>
            </li> )
          })}
      </ul>
    </div>
  </>)
}

export default Home
