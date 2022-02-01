import { Box, HStack, Image, Text } from "@chakra-ui/react";

export function HomeIcons() {
  return (
    <HStack w="100vw" pt="80px" pl="10%" pr="10%" justify="space-between">
      <Box align="center">
        <Image src="cocktail.svg" pb="1.5rem" />
        <Text fontWeight="600" fontSize={24} color="gray.600">
          vida noturna
        </Text>
      </Box>

      <Box align="center">
        <Image src="surf.svg" pb="1.5rem" />
        <Text fontWeight="600" fontSize={24} color="gray.600">
          praia
        </Text>
      </Box>

      <Box align="center">
        <Image src="building.svg" pb="1.5rem" />
        <Text fontWeight="600" fontSize={24} color="gray.600">
          moderno
        </Text>
      </Box>

      <Box align="center">
        <Image src="museum.svg" pb="1.5rem" />
        <Text fontWeight="600" fontSize={24} color="gray.600">
          clássico
        </Text>
      </Box>

      <Box align="center">
        <Image src="earth.svg" pb="1.5rem" />
        <Text fontWeight="600" fontSize={24} color="gray.600">
          e mais...
        </Text>
      </Box>
    </HStack>
  );
}
