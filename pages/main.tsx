import Header from '@components/Header'
import Hero from '@components/pageComponents/Hero/Hero'
import Projects from '@components/pageComponents/Projects/Projects'
import Tech from '@components/pageComponents/Tech/Tech'
import Head from 'next/head'

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
