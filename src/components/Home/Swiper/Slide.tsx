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
          h={["32vh", "50vh"]}
          direction="column"
          align="center"
          justify="center"
          backgroundPosition="center center"
          backgroundImage={image}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
        >
          <Text fontWeight={700} fontSize={["1.5rem", "3rem"]} color="gray.50">
            {title}
          </Text>
          <Text
            fontWeight={700}
            fontSize={["0.875rem", "1.5rem"]}
            color="gray.300"
          >
            {description}
          </Text>
        </Flex>
      </ChakraLink>
    </Link>
  );
}
