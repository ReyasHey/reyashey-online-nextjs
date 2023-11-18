// import Header from '@components/Header'
import Footer from '@components/Footer'
import Page from './main'
import CookiesPopup from '@components/generalComponents/CookiesPopup/CookiesPopup'

export default function Home() {
  return (
    <div>
      <Page />

      <Footer />

      <CookiesPopup />
    </div>
  )
}
