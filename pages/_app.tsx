import '@styles/globals.css'
import "@styles/Footer.css"
import "@styles/Header.css"

import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ['400', '500', '600', '700', '800'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap'
  });

function Application({ Component, pageProps }) {
  return (
    <div className={poppins.className}>
      <Component {...pageProps} />
    </div>
  )
}

export default Application
