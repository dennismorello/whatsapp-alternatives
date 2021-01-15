import { Box, useColorModeValue } from "@chakra-ui/react";
import NextImage from "next/image";

const AppIcon = ({ alt, iconUrl, iconSize = 20, ...otherProps }) => {
  const appShadow = useColorModeValue("sm", "dark-lg");

  return (
    <Box
      boxSize={iconSize}
      boxShadow={appShadow}
      rounded="2xl"
      overflow="hidden"
      {...otherProps}
    >
      <NextImage alt={alt} src={iconUrl} width={160} height={160} />
    </Box>
  );
};

export default AppIcon;
