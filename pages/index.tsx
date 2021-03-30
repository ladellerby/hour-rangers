import React from "react";
import useKonami from "react-use-konami";
import Layout from "../components/Layout";
import Soundboard from "../components/ui/widgets/soundboard/Soundboard";
import { ButtonList } from "../utils/buttons";
import { useRouter } from "next/router";
import { Flex, useColorModeValue } from "@chakra-ui/react";

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
  const bg = useColorModeValue("white", "#171923");

  return (
    <>
      <Layout title="Home | Hour Rangers">
        <Flex
          w={["100%", "100%", "100%", "100%"]}
          direction={["column", "column", "row", "column"]}
          bg={bg}
          boxShadow="md"
          rounded="none"
          p="4"
          align="center"
          minH="70vh"
          m="0"
        >
          <Soundboard buttons={ButtonList} />
        </Flex>
      </Layout>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
        #tsparticles {
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          bottom: 0;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
}

export default IndexPage;
