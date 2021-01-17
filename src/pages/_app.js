import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

import FontsGlobalStyles from "@/components/FontsGlobalStyles";
import NProgressGlobalStyles from "@/components/NProgressGlobalStyles";
import defaultSeo from "@/next-seo.config";
import theme from "@/theme";
import configureAndRunNProgress from "@/utils/nprogress";

configureAndRunNProgress();

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DefaultSeo {...defaultSeo} />

      <ChakraProvider theme={theme}>
        <FontsGlobalStyles />
        <NProgressGlobalStyles />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
