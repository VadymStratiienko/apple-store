import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Landing from '../components/Landing'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Apple Store</title>
        <link rel="icon" href="http://rb.gy/vsvv2o" />
      </Head>
      <Header />
        <main>
          <Landing />
        </main>
    </div>
  )
}

export default Home

