import Head from 'next/head'

import Hero from './pageComponents/Hero/Hero';
import Projects from './pageComponents/Projects/Projects';
import Tech from './pageComponents/Tech/Tech';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import Header from '../components/Header';

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
