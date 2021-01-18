import { useColorModeValue } from "@chakra-ui/react";

const useShadow = (lightShadow = "base") =>
  useColorModeValue(lightShadow, "dark-lg");

export default useShadow;
