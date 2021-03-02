import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Layout";
import BackgroundParticles from "../components/ui/widgets/soundboard/particles/BackgroundParticles";
import Soundboard from "../components/ui/widgets/soundboard/Soundboard";
import { ButtonList } from "../utils/buttons";

function IndexPage() {
  return (
    <Layout title="Home | Hour Rangers">
      <Box>
        <Image></Image>
      </Box>
      <BackgroundParticles />
      <Soundboard buttons={ButtonList} />
    </Layout>
  );
}

export default IndexPage;
