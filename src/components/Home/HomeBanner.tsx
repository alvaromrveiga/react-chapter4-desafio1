import { HStack, Image, Stack, Text } from "@chakra-ui/react";

interface HomeBannerProps {
  isWide?: boolean;
}

export function HomeBanner({ isWide = true }: HomeBannerProps) {
  return (
    <HStack
      h={["21vh", "37vh"]}
      paddingX={["4.3vw", "10vw"]}
      justifyContent="space-between"
      backgroundImage={"photos/sky.jpg"}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Stack justify="center" paddingY={["3vh", "5rem"]}>
        <Text
          fontWeight="500"
          fontSize={["1.5rem", "2rem"]}
          lineHeight={["1.875rem", "3.375rem"]}
          color="gray.50"
        >
          5 Continentes,
        </Text>
        <Text
          fontWeight="500"
          fontSize={["1.5rem", "2rem"]}
          lineHeight={["1.875rem", "3.375rem"]}
          color="gray.50"
        >
          infinitas possibilidades.
        </Text>

        <Text
          w={["90vw", "36vw"]}
          fontWeight="400"
          fontSize={["0.875rem", "1.25rem"]}
          lineHeight={["1.5rem", "1.875rem"]}
          color="gray.300"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Stack>

      {isWide && (
        <Image
          position="relative"
          top="7vh"
          h="30vh"
          src="icons/Airplane.svg"
          alt="airplane"
          transform="rotate(3deg)"
        />
      )}
    </HStack>
  );
}
