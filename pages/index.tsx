import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ulicode</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout/>
    </div>
  )
}

export default Home
