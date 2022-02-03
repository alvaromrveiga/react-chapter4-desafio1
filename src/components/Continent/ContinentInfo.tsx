import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  Text,
  Tooltip,
  Link as ChakraLink,
} from "@chakra-ui/react";

export function ContinentInfo() {
  return (
    <HStack w="100vw" mt="5rem" h="13rem" paddingX="8.75rem" spacing="4.375rem">
      <Text
        flex="1"
        align="justify"
        fontWeight="400"
        fontSize="1.5rem"
        color="gray.600"
      >
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>

      <HStack flex="1">
        <Box flex="1">
          <Text
            align="center"
            fontWeight="600"
            fontSize="3rem"
            color="yellow.400"
          >
            50
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
            60
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
            27
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
