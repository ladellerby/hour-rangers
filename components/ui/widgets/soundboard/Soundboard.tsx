import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import { Button } from "../../../../interfaces";
import SoundBoardButton from "./SoundboardButton";

type Props = {
  buttons: Button[];
};

function Soundboard(props: Props) {
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
        <Image src="/images/logo-black.png"></Image>
      </Box>

      <Grid
        templateColumns={[
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={2}
      >
        {props.buttons.map((button) => (
          <GridItem
            height={["150px", "150px", "150px", "200px"]}
            width={["150px", "150px", "150px", "200px"]}
          >
            <SoundBoardButton
              buttonName={button.name}
              keyName={button.key}
              icon={button.icon}
              sound={button.sound}
            />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
}

export default Soundboard;
