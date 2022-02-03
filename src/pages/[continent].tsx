import { Box } from "@chakra-ui/react";
import { ContinentBanner } from "../components/Continent/ContinentBanner";
import { ContinentCities } from "../components/Continent/ContinentCities";
import { ContinentInfo } from "../components/Continent/ContinentInfo";
import { Logo } from "../components/Logo";

export default function Continent() {
  return (
    <Box w="100vw">
      <Logo returnArrow={true} />

      <ContinentBanner continentName="Europa" />

      <ContinentInfo />

      <ContinentCities />
    </Box>
  );
}
