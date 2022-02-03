import { Box, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Slide } from "./Slide";

export function HomeSwiper() {
  return (
    <Box pt="52px" fontWeight={500} fontSize={36} align="center" mb="40px">
      <Text>Vamos nessa?</Text>
      <Text pb="40px">Então escolha seu continente</Text>

      <Swiper
        pagination={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            href="europa"
            image="/photos/london.jpg"
            title="Europa"
            description="Diversidade de destinos e culturas."
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            href="america-do-norte"
            image="/photos/newYork.jpg"
            title="América do Norte"
            description="O destino internacional mais procurado."
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            href="america-do-sul"
            image="/photos/buenosAires.jpg"
            title="América do Sul"
            description="Bem pertinho."
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            href="asia"
            image="/photos/taiwan.jpg"
            title="Ásia"
            description="Conheça o desconhecido."
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            href="africa"
            image="/photos/kenya.jpg"
            title="África"
            description="Novas experiências e aventuras."
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            href="oceania"
            image="/photos/newZealand.jpg"
            title="Oceania"
            description="Descubra o não explorado."
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
