import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  Text,
  Tooltip,
  Link as ChakraLink,
  Stack,
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
    <Stack
      direction={["column", "row"]}
      mt={["3vh", "8.8vh"]}
      marginX={["4.3vw", "10vw"]}
      spacing={["2vh", "4.8vw"]}
      align="center"
    >
      <Text
        w={["100%", "41.6vw"]}
        align="justify"
        fontWeight="400"
        fontSize={["0.875rem", "1.5rem"]}
        color="gray.600"
      >
        {description}
      </Text>
      <HStack w={["100%", "34vw"]} spacing={["10.8vw", "2.9vw"]}>
        <Box>
          <Text
            align={["left", "center"]}
            fontWeight="600"
            fontSize={["1.5rem", "3rem"]}
            color="yellow.400"
          >
            {countryCount}
          </Text>
          <Text
            align={["left", "center"]}
            fontWeight={["400", "600"]}
            fontSize={["1.125rem", "1.5rem"]}
            color="gray.600"
          >
            países
          </Text>
        </Box>

        <Box>
          <Text
            align={["left", "center"]}
            fontWeight="600"
            fontSize={["1.5rem", "3rem"]}
            color="yellow.400"
          >
            {languagesCount}
          </Text>
          <Text
            align={["left", "center"]}
            fontWeight={["400", "600"]}
            fontSize={["1.125rem", "1.5rem"]}
            color="gray.600"
          >
            línguas
          </Text>
        </Box>

        <Box>
          <Text
            align={["left", "center"]}
            fontWeight="600"
            fontSize={["1.5rem", "3rem"]}
            color="yellow.400"
          >
            {popularCitiesCount}
          </Text>
          <HStack>
            <Text
              align={["left", "center"]}
              fontWeight={["400", "600"]}
              fontSize={["1.125rem", "1.5rem"]}
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
                  w={["0.625rem", "1rem"]}
                  h={["0.625rem", "1rem"]}
                  color="gray.400"
                ></InfoOutlineIcon>
              </ChakraLink>
            </Tooltip>
          </HStack>
        </Box>
      </HStack>
    </Stack>
  );
}
