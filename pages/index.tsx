// import Header from '@components/Header'

import Footer from "@components/Footer";
import CookiesPopup from "@components/generalComponents/CookiesPopup/CookiesPopup";
import Page from "@components/pageComponents/Main/main";

export default function Home() {
  return (
    <div>
      <Page />

      <Footer />

      <CookiesPopup />
    </div>
  )
}
