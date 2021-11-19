import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { ImBlogger2 } from 'react-icons/im'

const Home: NextPage = () => {
  return (
    <div>
    <main className={styles.main}>
      <Head>
        <title>ulicod3_</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Image className={styles.me} src="/me.jpg" width={240} height={300}/>
        <h1>Neil Campos</h1>
    </main>
    <div>
      <p>Software developer. Go, Java, Linux, systems, and open source software
      enthusiast. On and ever upward.</p>
      <Link href="/blog/hello-world">
       <a>Blog Post<ImBlogger2 className={styles.icons}/></a>
      </Link>
          </div>
    </div>
  )
}

export default Home
