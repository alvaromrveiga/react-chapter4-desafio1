import { Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface SlideProps {
  href: string;
  image: string;
  title: string;
  description: string;
}

export function Slide({ href, image, title, description }: SlideProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink>
        <Flex
          w="85vw"
          h="80vh"
          direction="column"
          align="center"
          justify="center"
          backgroundImage={image}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
        >
          <Text fontWeight={700} fontSize="3rem" color="gray.50">
            {title}
          </Text>
          <Text fontWeight={700} fontSize="1.5rem" color="gray.300">
            {description}
          </Text>
        </Flex>
      </ChakraLink>
    </Link>
  );
}
