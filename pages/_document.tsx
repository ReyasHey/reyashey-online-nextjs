import { Html, Head, Main, NextScript } from 'next/document';
import { useState } from 'react';

export default function Document() {

const [bootstrapRel, setBootstrapRel] = useState<string>("stylesheet")

  function handleOnLoadBootstrap (){
    setBootstrapRel("stylesheet")
  }

  return (
    <Html lang="en" dir="ltr">
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel={bootstrapRel} as="style" onLoad={() => handleOnLoadBootstrap()}/>
        {/* <link href="main.css" rel="preload" as="style" onLoad={() => this.rel='stylesheet'} /> */}
        <meta name="trustpilot-one-time-domain-verification-id" content={process.env.trustpilot_one_time_domain_verification_id}/>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="canonical" href="https://reyashey.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
