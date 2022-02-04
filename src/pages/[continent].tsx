import { Box } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { ContinentBanner } from "../components/Continent/ContinentBanner";
import { ContinentCities } from "../components/Continent/ContinentCities";
import { ContinentInfo } from "../components/Continent/ContinentInfo";
import { Logo } from "../components/Logo";

type ContinentProps = {
  slug: string;
  name: string;
  bannerPath: string;
  description: string;
  countryCount: number;
  languagesCount: number;
  popularCitiesCount: number;
  cities: City[];
};

type City = {
  name: string;
  country: string;
  imagePath: string;
  flagPath: string;
};

export default function Continent(continent: ContinentProps) {
  return (
    <Box w="100vw">
      <Logo returnArrow={true} />

      <ContinentBanner
        bannerPath={continent.bannerPath}
        continentName={continent.name}
      />

      <ContinentInfo
        countryCount={continent.countryCount}
        description={continent.description}
        languagesCount={continent.languagesCount}
        popularCitiesCount={continent.popularCitiesCount}
      />

      <ContinentCities cities={continent.cities} />
    </Box>
  );
}

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { continent: "europa" } },
      { params: { continent: "america-do-norte" } },
      { params: { continent: "america-do-sul" } },
      { params: { continent: "asia" } },
      { params: { continent: "africa" } },
      { params: { continent: "oceania" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch("http://localhost:3333/continents");
  const data: ContinentProps[] = await response.json();

  if (data) {
    const continentData = data.find((continent) => {
      return continent.slug === params?.continent;
    });

    return {
      props: { ...continentData },
    };
  }

  return {
    props: {},
  };
};
