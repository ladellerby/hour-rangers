import {
  Box,
  Center,
  Flex,
  Grid,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Button } from "../../../../interfaces";
import ThemeSelector from "../ThemeSelectorButton";
import SoundBoardButton from "./SoundboardButton";

type Props = {
  buttons: Button[];
};

function Soundboard(props: Props) {
  const logo = useColorModeValue(
    "/images/logo-black.png",
    "/images/logo-white.png"
  );
  return (
    <Flex
      w={["100%", "100%", "100%", "100%"]}
      direction="column"
      boxShadow="md"
      rounded="lg"
      p="4"
      align="center"
      m="2.5px"
    >
      <Box>
        <Image src={logo}></Image>
      </Box>
      <Center>
        <ThemeSelector />
      </Center>

      <Grid
        templateColumns={[
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={6}
      >
        {props.buttons.map((button) => (
          <SoundBoardButton
            buttonName={button.name}
            keyName={button.key}
            icon={button.icon}
            sound={button.sound}
          />
        ))}
      </Grid>
    </Flex>
  );
}

export default Soundboard;
