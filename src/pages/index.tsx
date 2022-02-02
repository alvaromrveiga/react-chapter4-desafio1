import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { HomeBanner } from "../components/Home/HomeBanner";
import { HomeIcons } from "../components/Home/HomeIcons";
import { HomeSwiper } from "../components/Home/HomeSwiper";
import { Logo } from "../components/Logo";

const Home: NextPage = () => {
  return (
    <Box w="100vw" h="100vh" overflowX="hidden">
      <Head>
        <title>Home | worldtrip</title>
      </Head>

      <Logo />

      <HomeBanner />

      <HomeIcons />

      <HomeSwiper />
    </Box>
  );
};

export default Home;
