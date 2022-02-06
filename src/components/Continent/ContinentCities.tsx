import { Box, Grid, Text } from "@chakra-ui/react";
import { ContinentCity } from "./ContinentCity";

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
    <Box mt={["4.1vh", "8.8vh"]} marginX={["4.3vw", "10vw"]}>
      <Text fontWeight="500" fontSize={["1.5rem", "2.25rem"]} color="gray.600">
        Cidades +100
      </Text>

      <Grid
        mt={["2.5vh", "4.4vh"]}
        templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]}
        align="center"
        gap={["2.5vh", "3.1vw"]}
        mb={["2vh", "3.8vh"]}
      >
        {cities?.map((city) => {
          return (
            <ContinentCity
              key={city.name}
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
