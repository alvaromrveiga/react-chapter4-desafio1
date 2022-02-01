import type { NextPage } from "next";
import Head from "next/head";
import { Box, Stack, Text, Image, HStack } from "@chakra-ui/react";

import { Logo } from "../components/Logo";
import { HomeBanner } from "../components/Home/HomeBanner";
import { HomeIcons } from "../components/Home/HomeIcons";

const Home: NextPage = () => {
  return (
    <Stack w="100vw" h="100vh" overflowX="hidden">
      <Head>
        <title>Home | worldtrip</title>
      </Head>

      <Logo />

      <HomeBanner />

      <HomeIcons />
    </Stack>
  );
};

export default Home;
