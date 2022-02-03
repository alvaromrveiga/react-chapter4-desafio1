import { Box, Grid, GridItem, HStack, Image, Text } from "@chakra-ui/react";

export function ContinentCities() {
  return (
    <Box mt="5rem" w="100vw" h="43.75rem" paddingX="8.75rem">
      <Text fontWeight="500" fontSize="2.25rem" color="gray.600">
        Cidades +100
      </Text>

      <Grid templateColumns="repeat(4, 1fr)" gap="2.8rem">
        <GridItem>
          <Box
            mt="2.5rem"
            w="16rem"
            border="2px solid"
            borderColor="yellow.40050"
            borderRadius="4px"
          >
            <Image src={"photos/europe/londonBridge.jpg"} />
            <HStack
              paddingX="1.5rem"
              pt="1.125rem"
              pb="1.5rem"
              justify="space-between"
            >
              <Box>
                <Text
                  fontFamily="Barlow"
                  fontWeight="600"
                  fontSize="1.5rem"
                  color="gray.600"
                >
                  Londres
                </Text>
                <Text
                  fontFamily="Barlow"
                  fontWeight="500"
                  fontSize="1rem"
                  color="gray.400"
                >
                  Reino Unido
                </Text>
              </Box>
              <Image
                src={"flags/unitedKingdom.svg"}
                w="1.875rem"
                h="1.875rem"
              />
            </HStack>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
