import Head from 'next/head'

import Hero from './pageComponents/Hero/Hero';
import Projects from './pageComponents/Projects/Projects';
import Tech from './pageComponents/Tech/Tech';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export default function Page() {

  useEffect(() => {
    Cookies.set("Test", "theseNuts")
    Cookies.remove("Test")

    console.warn("Set and Removed Cookies");
  })


  return (
    <main>

      <Head>
        <title>Portfolio - ReyasHey</title>
        <meta name="description" content="Hey, I'm Reyas, an aspiring Front End Developer and this is my portfolio." />
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
