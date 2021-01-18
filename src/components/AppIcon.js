import { Box } from "@chakra-ui/react";
import NextImage from "next/image";

import useShadow from "@/hooks/useShadow";

const AppIcon = ({ alt, iconUrl, size = 20, ...otherProps }) => {
  const appShadow = useShadow();

  return (
    <Box
      boxSize={size}
      boxShadow={appShadow}
      minW={size}
      rounded="2xl"
      overflow="hidden"
      {...otherProps}
    >
      <NextImage alt={alt} src={iconUrl} width={160} height={160} />
    </Box>
  );
};

export default AppIcon;
