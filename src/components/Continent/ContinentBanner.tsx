import { Flex, Text } from "@chakra-ui/react";

interface ContinentBannerProps {
  bannerPath: string;
  continentName: string;
}

export function ContinentBanner({
  bannerPath,
  continentName,
}: ContinentBannerProps) {
  return (
    <Flex
      w="100vw"
      h={["19.3vh", "55vh"]}
      align={["center", "end"]}
      justify={["center", "start"]}
      backgroundImage={bannerPath}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Text
        ml={["0", "10vw"]}
        mb={["0", "6.5vh"]}
        fontWeight="600"
        fontSize={["1.75rem", "3rem"]}
        lineHeight={["2.5rem", "4.5rem"]}
        color="gray.50"
      >
        {continentName}
      </Text>
    </Flex>
  );
}
