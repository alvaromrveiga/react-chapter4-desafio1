import { Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

export function Logo() {
  return (
    <Flex w="100vw" align="center" justify="center">
      <Link passHref href="/">
        <ChakraLink>
          <Image
            paddingTop="6"
            paddingBottom="6"
            src="icons/Logo.svg"
            alt="logo"
          />
        </ChakraLink>
      </Link>
    </Flex>
  );
}
