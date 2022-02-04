import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";

interface HomeIconsProps {
  isWide?: boolean;
}

export function HomeIcons({ isWide = true }: HomeIconsProps) {
  return (
    <>
      {isWide ? (
        <HStack mt="3.5vh" ml="10vw" mr="10vw" justify="space-between">
          <Box align="center" w="12vw">
            <Image src="icons/cocktail.svg" pb="1.5rem" w="5.5vw" />
            <Text fontWeight="600" fontSize="1.5rem" color="gray.600">
              vida noturna
            </Text>
          </Box>

          <Box align="center" width="12vw">
            <Image src="icons/surf.svg" pb="1.5rem" w="5.5vw" />
            <Text fontWeight="600" fontSize="1.5rem" color="gray.600">
              praia
            </Text>
          </Box>

          <Box
            position="relative"
            align="center"
            paddingY="80px"
            borderBottom="2px solid"
            borderColor="gray.600"
          >
            <Image src="icons/building.svg" pb="1.5rem" w="5.5vw" />
            <Text fontWeight="600" fontSize="1.5rem" color="gray.600">
              moderno
            </Text>
          </Box>

          <Box width="12vw" align="center">
            <Image src="icons/museum.svg" pb="1.5rem" w="5.5vw" />
            <Text fontWeight="600" fontSize="1.5rem" color="gray.600">
              clássico
            </Text>
          </Box>

          <Box width="12vw" align="center">
            <Image src="icons/earth.svg" pb="1.5rem" w="5.5vw" />
            <Text fontWeight="600" fontSize="1.5rem" color="gray.600">
              e mais...
            </Text>
          </Box>
        </HStack>
      ) : (
        <Box h="20vh" marginX="13.7vw" mt="4.6vh">
          <Flex justify="space-between" pb="3vh">
            <HStack>
              <CheckCircleIcon w="2vw" color="yellow.400" />
              <Text fontSize="1.125rem" fontWeight="500" lineHeight="1.5rem">
                vida noturna
              </Text>
            </HStack>

            <HStack>
              <CheckCircleIcon w="2vw" color="yellow.400" />
              <Text fontSize="1.125rem" fontWeight="500" lineHeight="1.5rem">
                praia
              </Text>
            </HStack>
          </Flex>

          <Flex justify="space-between" pb="3vh">
            <HStack>
              <CheckCircleIcon w="2vw" color="yellow.400" />
              <Text fontSize="1.125rem" fontWeight="500" lineHeight="1.5rem">
                moderno
              </Text>
            </HStack>

            <HStack>
              <CheckCircleIcon w="2vw" color="yellow.400" />
              <Text fontSize="1.125rem" fontWeight="500" lineHeight="1.5rem">
                clássico
              </Text>
            </HStack>
          </Flex>

          <Flex justify="center">
            <HStack>
              <CheckCircleIcon w="2vw" color="yellow.400" />
              <Text fontSize="1.125rem" fontWeight="500" lineHeight="1.5rem">
                e mais...
              </Text>
            </HStack>
          </Flex>

          <Flex justify="center">
            <Box
              w="16.4vw"
              mt="4.6vh"
              borderBottom="1px solid"
              borderColor="gray.600"
            />
          </Flex>
        </Box>
      )}
    </>
  );
}
