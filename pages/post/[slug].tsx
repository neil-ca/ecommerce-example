import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

const { CONTENT_API_KEY, API_URL } = process.env

async function getPost(slug: string) {
  const res = await fetch(
  `${API_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html`)
  .then((res) => res.json())
  
  const posts = res.posts
  return posts[0]
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //const a : string = "sell"
  const post = await getPost(params.slug)
  return {
    props: { post }
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  // paths -> slugs which are allowed
  // fallback -> 
  return {
    paths: [],
    fallback: true
  }
}

type Post = {
  title: string
  html: string
  slug: string
}
const Post: React.FC<{post: Post}> = (props) => {
  //console.log(props)
  const { post } = props
  const router = useRouter()
  if(router.isFallback) {
    return <h1>Loading . . .</h1>
  }
  return (
    <div>
      <Link href="/"><a>Go back</a></Link>
      <div dangerouslySetInnerHTML={{__html: post.html}}/>
    </div>
  )   
}

export default Post
