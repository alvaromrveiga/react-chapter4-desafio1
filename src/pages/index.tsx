import { Box, useBreakpointValue } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { HomeBanner } from "../components/Home/HomeBanner";
import { HomeIcons } from "../components/Home/HomeIcons";
import { HomeSwiper } from "../components/Home/Swiper/HomeSwiper";
import { Logo } from "../components/Logo";

const Home: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box w="100%" h="100%">
      <Head>
        <title>Home | worldtrip</title>
      </Head>

      <Logo />

      <HomeBanner isWide={isWideVersion} />

      <HomeIcons isWide={isWideVersion} />

      <HomeSwiper />
    </Box>
  );
};

export default Home;
