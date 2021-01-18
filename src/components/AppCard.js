import { HStack, Text, VStack } from "@chakra-ui/react";

import AppIcon from "@/components/AppIcon";
import useBackgroundColor from "@/hooks/useBackgroundColor";
import useShadow from "@/hooks/useShadow";

const AppCard = ({ appName, iconUrl, rating, ...otherProps }) => {
  const backgroundColor = useBackgroundColor();
  const cardShadow = useShadow();
  const iconSize = [12, null, 16];

  return (
    <HStack
      bg={backgroundColor}
      p={4}
      rounded="2xl"
      shadow={cardShadow}
      spacing={4}
      {...otherProps}
    >
      <AppIcon alt={`${appName} icon`} iconUrl={iconUrl} size={iconSize} />

      <VStack align="flex-start" flexGrow={1} h={iconSize}>
        <Text fontSize={["lg", null, "xl"]} fontWeight="bold">
          {appName}
        </Text>
        <Text fontSize={["md", null, "lg"]}>{rating}/5</Text>
      </VStack>
    </HStack>
  );
};

export default AppCard;
