import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

import Fonts from "@/components/Fonts";
import defaultSeo from "@/next-seo.config";
import theme from "@/theme";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DefaultSeo {...defaultSeo} />

      <ChakraProvider theme={theme}>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;
