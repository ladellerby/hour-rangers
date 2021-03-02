import { Button, Kbd, Text, VStack } from "@chakra-ui/react";
import React from "react";
import useSound from "use-sound";

type Props = {
  buttonName: string;
  keyName: string;
  icon: any;
  sound: string;
};

function SoundBoardButton(props: Props) {
  const [play]: any = useSound(`/sounds/${props.sound}.mp3`);

  return (
    <Button
      size="md"
      height={["150px", "150px", "150px", "200px"]}
      width={["150px", "150px", "150px", "200px"]}
      border="1px"
      backgroundColor="#FFE35D"
      borderColor="#FF9800"
      onClick={play}
      _active={{
        backgroundColor: "darken(#444, 10%)",
        transition: "all .2s",
        transform: "scale(1.1)",
      }}
    >
      <VStack>
        {/* <Icon as={props.icon} /> */}
        <Kbd display={["none", "none", "none", "unset"]} h="40px" w="40px">
          {props.keyName}
        </Kbd>
        <Text fontSize={["10px", "10px", "10px", "10px"]}>
          {props.buttonName}
        </Text>
      </VStack>
    </Button>
  );
}

export default SoundBoardButton;
