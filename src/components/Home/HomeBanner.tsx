import { HStack, Image, Stack, Text } from "@chakra-ui/react";

export function HomeBanner() {
  return (
    <HStack
      justifyContent="space-between"
      backgroundImage={"photos/sky.jpg"}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Stack paddingLeft="140px">
        <Text fontWeight="500" fontSize={36} color="gray.50">
          5 Continentes, infinitas possibilidades.
        </Text>
        <Text fontWeight="400" fontSize={20} color="gray.300">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Stack>

      <Image
        position="relative"
        top="33px"
        paddingRight="140px"
        src="icons/Airplane.svg"
        alt="airplane"
        transform="rotate(3deg)"
      />
    </HStack>
  );
}
