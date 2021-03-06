import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Particles from "react-tsparticles";

function BackgroundParticles() {
  const color = useColorModeValue("#000", "#fff");
  return (
    <Box
      as="div"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      zIndex="0"
    >
      <Particles
        options={{
          fpsLimit: 60,
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: ["#0000ff", "#ffc0cb", "#ff0000", "#ffff00", "#000000"],
            },
            shape: {
              type: ["circle"],
              stroke: {
                width: 0,
                color: color,
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: false,
                speed: 10,
                size_min: 10,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: color,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </Box>
  );
}

export default BackgroundParticles;
