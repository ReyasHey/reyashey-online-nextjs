import Head from 'next/head'

import Header from '@components/Header'

import Hero from './Hero/Hero'
import Tech from './Tech/Tech'
import Projects from './Projects/Projects'

export default function Page() {

  return (
    <main>

      <Head>
        <title>Portfolio - ReyasHey</title>
        <meta name="description" content="Hey, I'm Reyas, an aspiring Front End Developer and this is my portfolio." />
      </Head>

      <Header />

      <Hero />

      <Tech />

      <Projects />

    </main>
  )
}
