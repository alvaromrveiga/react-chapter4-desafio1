import { Box, HStack, Image, Text } from "@chakra-ui/react";

export function HomeIcons() {
  return (
    <HStack ml="10vw" mr="10vw" justify="space-between">
      <Box align="center" width="12vw">
        <Image src="cocktail.svg" pb="1.5rem" />
        <Text fontWeight="600" fontSize={24} color="gray.600">
          vida noturna
        </Text>
      </Box>

      <Box align="center" width="12vw">
        <Image src="surf.svg" pb="1.5rem" />
        <Text fontWeight="600" fontSize={24} color="gray.600">
          praia
        </Text>
      </Box>

      <Box
        align="center"
        pt="80px"
        pb="80px"
        borderBottom="2px solid"
        borderColor="gray.600"
      >
        <Image src="building.svg" pb="1.5rem" />
        <Text fontWeight="600" fontSize={24} color="gray.600">
          moderno
        </Text>
      </Box>

      <Box width="12vw" align="center">
        <Image src="museum.svg" pb="1.5rem" />
        <Text fontWeight="600" fontSize={24} color="gray.600">
          clássico
        </Text>
      </Box>

      <Box width="12vw" align="center">
        <Image src="earth.svg" pb="1.5rem" />
        <Text fontWeight="600" fontSize={24} color="gray.600">
          e mais...
        </Text>
      </Box>
    </HStack>
  );
}
