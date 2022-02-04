import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  Text,
  Tooltip,
  Link as ChakraLink,
} from "@chakra-ui/react";

interface ContinentInfoProps {
  description: string;
  countryCount: number;
  languagesCount: number;
  popularCitiesCount: number;
}

export function ContinentInfo({
  description,
  countryCount,
  languagesCount,
  popularCitiesCount,
}: ContinentInfoProps) {
  return (
    <HStack w="100vw" mt="5rem" h="13rem" paddingX="8.75rem" spacing="4.375rem">
      <Text
        flex="1"
        align="justify"
        fontWeight="400"
        fontSize="1.5rem"
        color="gray.600"
      >
        {description}
      </Text>

      <HStack flex="1">
        <Box flex="1">
          <Text
            align="center"
            fontWeight="600"
            fontSize="3rem"
            color="yellow.400"
          >
            {countryCount}
          </Text>
          <Text
            align="center"
            fontWeight="600"
            fontSize="1.5rem"
            color="gray.600"
          >
            países
          </Text>
        </Box>

        <Box flex="1">
          <Text
            align="center"
            fontWeight="600"
            fontSize="3rem"
            color="yellow.400"
          >
            {languagesCount}
          </Text>
          <Text
            align="center"
            fontWeight="600"
            fontSize="1.5rem"
            color="gray.600"
          >
            línguas
          </Text>
        </Box>

        <Box flex="2">
          <Text
            align="center"
            fontWeight="600"
            fontSize="3rem"
            color="yellow.400"
          >
            {popularCitiesCount}
          </Text>
          <HStack justify="center">
            <Text
              align="center"
              fontWeight="600"
              fontSize="1.5rem"
              color="gray.600"
            >
              cidades +100
            </Text>
            <Tooltip
              label="https://www.visualcapitalist.com/the-100-most-popular-city-destinations/"
              aria-label="A tooltip"
            >
              <ChakraLink
                target="_blank"
                href="https://www.visualcapitalist.com/the-100-most-popular-city-destinations/"
              >
                <InfoOutlineIcon
                  w="1rem"
                  h="1rem"
                  color="gray.400"
                ></InfoOutlineIcon>
              </ChakraLink>
            </Tooltip>
          </HStack>
        </Box>
      </HStack>
    </HStack>
  );
}
