import { extendTheme, Theme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "600": "#47585B",
      "400": "#999999",
      "300": "#DADADA",
      "50": "#F5F8FA",
    },
    yellow: {
      "400": "#FFBA08",
      "40050": "#FFBA0850",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.600",
      },
    },
  },
});
