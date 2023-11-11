import Head from 'next/head'
// import Header from '@components/Header'
import Footer from '@components/Footer'
import Page from './page'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page />

      <Footer />
    </div>
  )
}
