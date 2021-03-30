import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { extendTheme } from "@chakra-ui/react";
import BackgroundParticles from "../components/ui/widgets/soundboard/particles/BackgroundParticles";

const colors = {
  brand: {},
};

function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ChakraProvider theme={extendTheme({ colors })}>
      <BackgroundParticles />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default App;
