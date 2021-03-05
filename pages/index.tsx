import { Box, Image } from "@chakra-ui/react";
import React from "react";
import useKonami from "react-use-konami";
import Layout from "../components/Layout";
import BackgroundParticles from "../components/ui/widgets/soundboard/particles/BackgroundParticles";
import Soundboard from "../components/ui/widgets/soundboard/Soundboard";
import { ButtonList } from "../utils/buttons";
import { useRouter } from "next/router";

function IndexPage() {
  const router = useRouter();
  useKonami(
    () => {
      router.push("https://reactaroids.hour-rangers.xyz/");
    },
    {
      code: [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "b",
        "a",
        "Enter",
      ],
    }
  );
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
