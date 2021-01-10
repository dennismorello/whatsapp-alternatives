import "tailwindcss/tailwind.css";

import Head from "next/head";
import { DefaultSeo } from "next-seo";

import defaultSeo from "../next-seo.config";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DefaultSeo {...defaultSeo} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
