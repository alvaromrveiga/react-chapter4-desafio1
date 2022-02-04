import { GridItem, Box, Image, HStack, Text } from "@chakra-ui/react";

interface ContinentCityProps {
  city: string;
  country: string;
  image: string;
  flag: string;
}

export function ContinentCIty({
  city,
  country,
  image,
  flag,
}: ContinentCityProps) {
  return (
    <GridItem>
      <Box
        mt="2.5rem"
        w="16rem"
        border="2px solid"
        borderColor="yellow.40050"
        borderRadius="4px"
      >
        <Image src={image} w="16rem" h="10.625rem" />
        <HStack
          paddingX="1.5rem"
          pt="1.125rem"
          pb="1.5rem"
          justify="space-between"
        >
          <Box>
            <Text
              fontFamily="Barlow"
              fontWeight="600"
              fontSize="1.5rem"
              color="gray.600"
            >
              {city}
            </Text>
            <Text
              fontFamily="Barlow"
              fontWeight="500"
              fontSize="1rem"
              color="gray.400"
            >
              {country}
            </Text>
          </Box>
          <Image src={flag} w="1.875rem" h="1.875rem" />
        </HStack>
      </Box>
    </GridItem>
  );
}
