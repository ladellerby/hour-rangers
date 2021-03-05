import { Button, Kbd, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import useSound from "use-sound";

type Props = {
  buttonName: string;
  keyName: string;
  icon: any;
  sound: string;
};

function SoundBoardButton(props: Props) {
  const [play, { stop }]: any = useSound(`/sounds/${props.sound}.mp3`);
  const [themeShort]: any = useSound(`/sounds/hour-rangers-full-theme.mp3`, {
    volume: 0.15,
  });
  const [theme]: any = useSound(`/sounds/hour-rangers-full-theme.mp3`, {
    volume: 0.15,
  });
  const [dragonZord]: any = useSound(`/sounds/dragonzord.mp3`, {
    volume: 0.15,
  });
  const [commandCenterSiren]: any = useSound(
    `/sounds/command-center-siren.mp3`,
    {
      volume: 0.15,
    }
  );
  const [fire]: any = useSound(`/sounds/fire.mp3`, { volume: 0.15 });
  const [greenRangerGoGettem]: any = useSound(
    `/sounds/green-ranger-lets-go-get-em.mp3`,
    {
      volume: 0.15,
    }
  );
  const [mergingTime]: any = useSound(`/sounds/joel-mergin-time.mp3`, {
    volume: 0.15,
  });
  const [morphinTime]: any = useSound(`/sounds/joel-morphin-time.mp3`, {
    volume: 0.15,
  });

  const [lightning]: any = useSound(`/sounds/lightning.mp3`, {
    volume: 0.15,
  });
  const [lockOnAndFire]: any = useSound(`/sounds/lock-on-and-fire.mp3`, {
    volume: 0.15,
  });
  const [lordZedd]: any = useSound(`/sounds/lord-zedd.mp3`, {
    volume: 0.15,
  });
  const [monsterGrunts]: any = useSound(`/sounds/monster-grunting.mp3`, {
    volume: 0.15,
  });
  const [dinozordPower]: any = useSound(`/sounds/dinozord-power.mp3`, {
    volume: 0.15,
  });
  const [morphSound]: any = useSound(`/sounds/morph-sound-effects.mp3`, {
    volume: 0.15,
  });
  const [ogTheme]: any = useSound(`/sounds/power-rangers-theme-vocal.mp3`, {
    volume: 0.15,
  });
  const [redRanger]: any = useSound(`/sounds/red-ranger-command-center.mp3`, {
    volume: 0.15,
  });

  const playsound = ({ key }: any) => {
    if (key == "1") {
      themeShort();
    }
    if (key == "2") {
      theme();
    }
    if (key == "3") {
      dragonZord();
    }
    if (key == "4") {
      commandCenterSiren();
    }
    if (key == "q") {
      fire();
    }
    if (key == "w") {
      greenRangerGoGettem();
    }
    if (key == "e") {
      mergingTime();
    }
    if (key == "r") {
      morphinTime();
    }
    if (key == "a") {
      lightning();
    }
    if (key == "s") {
      lockOnAndFire();
    }
    if (key == "d") {
      lordZedd();
    }
    if (key == "f") {
      monsterGrunts();
    }
    if (key == "z") {
      dinozordPower();
    }
    if (key == "x") {
      morphSound();
    }
    if (key == "c") {
      ogTheme();
    }
    if (key == "v") {
      redRanger();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", playsound);
    return () => {
      window.removeEventListener("keydown", playsound);
    };
  });

  return (
    <Button
      size="md"
      height={["150px", "150px", "150px", "200px"]}
      width={["150px", "150px", "150px", "200px"]}
      border="1px"
      backgroundColor="#FFE35D"
      borderColor="#FF9800"
      onClick={() => {
        stop();
        play();
      }}
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
