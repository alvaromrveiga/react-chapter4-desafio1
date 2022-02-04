import { Box, Grid, Text } from "@chakra-ui/react";
import { ContinentCIty } from "./ContinentCity";

type City = {
  name: string;
  country: string;
  imagePath: string;
  flagPath: string;
};

interface ContinentCitiesProps {
  cities: City[];
}

export function ContinentCities({ cities }: ContinentCitiesProps) {
  return (
    <Box mt="5rem" w="100vw" h="43.75rem" paddingX="8.75rem">
      <Text fontWeight="500" fontSize="2.25rem" color="gray.600">
        Cidades +100
      </Text>

      <Grid templateColumns="repeat(4, 1fr)" gap="2.8rem" mb="2.25rem">
        {cities?.map((city) => {
          return (
            <ContinentCIty
              city={city.name}
              country={city.country}
              image={city.imagePath}
              flag={city.flagPath}
            />
          );
        })}
      </Grid>
    </Box>
  );
}
