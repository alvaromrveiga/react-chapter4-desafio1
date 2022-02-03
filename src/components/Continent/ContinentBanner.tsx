import { Flex, Text } from "@chakra-ui/react";

interface ContinentBannerProps {
  continentName: string;
}

export function ContinentBanner({ continentName }: ContinentBannerProps) {
  return (
    <Flex
      w="100vw"
      h="31.25rem"
      align="end"
      backgroundImage={"photos/europe/bigben.jpg"}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Text
        ml="8.75rem"
        mb="3.75rem"
        fontWeight="600"
        fontSize="3rem"
        color="gray.50"
      >
        {continentName}
      </Text>
    </Flex>
  );
}
