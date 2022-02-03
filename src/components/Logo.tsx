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
        <Flex align="center" justify="space-between" marginX="8.75rem">
          {returnArrow ? (
            <ChakraLink>
              <ArrowBackIcon w="2rem" h="2rem" />
            </ChakraLink>
          ) : (
            <Box w="2rem" h="2rem" />
          )}

          <ChakraLink>
            <Image
              mr="2rem"
              w="11.5rem"
              h="2.875rem"
              mt="1.5rem"
              mb="1.5rem"
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
