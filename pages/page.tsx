import Head from 'next/head'

import Hero from './pageComponents/Hero/Hero';
import Projects from './pageComponents/Projects/Projects';
import Tech from './pageComponents/Tech/Tech';

export default function Page() {
  return (
    <main>

      <Head>
        <title>Portfolio - ReyasHey</title>
      </Head>

      <nav style={{ position: "fixed", zIndex: "5" }}>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Technologies">Technologies</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contacts">Contacts</a></li>
        </ul>
      </nav>

      <Hero />

      <Tech />

      <Projects />

    </main>
  )
}
