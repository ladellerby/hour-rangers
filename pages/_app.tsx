import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { extendTheme } from "@chakra-ui/react";
import BackgroundParticles from "../components/ui/widgets/soundboard/particles/BackgroundParticles";
import { NextSeo } from "next-seo";

const colors = {
  brand: {},
};

function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <>
      <NextSeo
        robotsProps={{
          notranslate: true,
        }}
        additionalMetaTags={[
          {
            property: "google",
            content: "notranslate",
          },
        ]}
      />
      <ChakraProvider theme={extendTheme({ colors })}>
        <BackgroundParticles />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
export default App;
