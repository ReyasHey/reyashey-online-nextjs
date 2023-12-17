import Head from "next/head";
import { useState } from "react";

import Header from "@components/pageComponents/Index/Header";
import Footer from "@components/pageComponents/Index/Footer";
import CookiesPopup from "@components/generalComponents/CookiesPopup/CookiesPopup";
import MainHero from "@components/pageComponents/Index/MainHero/MainHero";
import Tech from "@components/pageComponents/Index/Tech/Tech";
import Projects from "@components/pageComponents/Index/Projects/Projects";
import NavBlob from "@components/generalComponents/OptionsBlob/NavBlob";

export default function Home() {

  const [navMenuToggle, setNavMenuToggle] = useState(false)
  function navToggle () {
    setNavMenuToggle(!navMenuToggle)
  }

  return (
    <div>

      <Head>
        <title>Portfolio - ReyasHey</title>
        <meta name="description" content="Hey, I'm Reyas, an aspiring Front End Developer and this is my portfolio." />
      </Head>

      <NavBlob
        navToggled={navMenuToggle}
        navToggle={navToggle}
      />

      {/*
        Change display css instead of hiding component for ssg reasons
        bots will still see nav on first render
      */}
      <Header display={navMenuToggle} />

      <MainHero />

      <Tech />

      <Projects />

      <Footer />

      <CookiesPopup />

    </div>
  )
}
