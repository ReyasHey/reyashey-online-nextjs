// import Header from '@components/Header'

import Footer from "@components/pageComponents/Index/Footer";
import CookiesPopup from "@components/generalComponents/CookiesPopup/CookiesPopup";
import Head from "next/head";
import Header from "@components/pageComponents/Index/Header";
import MainHero from "@components/pageComponents/Index/MainHero/MainHero";
import Tech from "@components/pageComponents/Index/Tech/Tech";
import Projects from "@components/pageComponents/Index/Projects/Projects";

export default function Home() {
  return (
    <div>

      <Head>
        <title>Portfolio - ReyasHey</title>
        <meta name="description" content="Hey, I'm Reyas, an aspiring Front End Developer and this is my portfolio." />
      </Head>

      <Header />

      <MainHero />

      <Tech />

      <Projects />

      <Footer />

      <CookiesPopup />

    </div>
  )
}
