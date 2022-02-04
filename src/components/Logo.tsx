import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface LogoProps {
  returnArrow?: boolean;
}

export function Logo({ returnArrow = false }: LogoProps) {
  return (
    <Box w="100vw">
      <Link passHref href="/">
        <Flex align="center" justify="space-between" marginX="10vw">
          {returnArrow ? (
            <ChakraLink>
              <ArrowBackIcon w={["4vw", "2vw"]} h={["4vh", "3.5vh"]} />
            </ChakraLink>
          ) : (
            <Box w={["4vw", "2vw"]} h={["4vh", "3.5vh"]} />
          )}

          <ChakraLink>
            <Image
              mr={["4vw", "2vw"]}
              w={["22vw", "10vw"]}
              h={["2.5vh", "5vh"]}
              marginY={["1.9vh", "2vh"]}
              src="icons/Logo.svg"
              alt="logo"
            />
          </ChakraLink>

          <Box />
        </Flex>
      </Link>
    </Box>
  );
}
