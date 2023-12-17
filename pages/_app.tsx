import '@styles/globals.css'
import "@styles/Footer.css"
import "@styles/Header.css"

import { Poppins } from "next/font/google";
import { QueryClient, QueryClientProvider } from 'react-query';

const poppins = Poppins({
    weight: ['400', '500', '600', '700', '800'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap'
  });

function Application({ Component, pageProps }) {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div className={poppins.className}>
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>

  )
}

export default Application
