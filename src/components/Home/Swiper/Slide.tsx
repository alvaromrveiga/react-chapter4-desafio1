import { Flex, Text } from "@chakra-ui/react";

interface SlideProps {
  image: string;
  title: string;
  description: string;
}

export function Slide({ image, title, description }: SlideProps) {
  return (
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
      <Text fontWeight={700} fontSize={48} color="gray.50">
        {title}
      </Text>
      <Text fontWeight={700} fontSize={24} color="gray.300">
        {description}
      </Text>
    </Flex>
  );
}
