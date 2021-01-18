import { HStack, Text, VStack } from "@chakra-ui/react";

import AppIcon from "@/components/AppIcon";
import PlatformsTagsList from "@/components/PlatformsTagsList";
import useBackgroundColor from "@/hooks/useBackgroundColor";
import useShadow from "@/hooks/useShadow";

const AppCard = ({ appName, iconUrl, platforms, rating, ...otherProps }) => {
  const backgroundColor = useBackgroundColor();
  const cardShadow = useShadow();
  const iconSize = [16, null, 20];

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

      <VStack
        align="flex-start"
        justify="space-between"
        flexGrow={1}
        h={iconSize}
        spacing={[0, null, 2]}
      >
        <HStack justify="space-between" w="full">
          <Text fontSize={["lg", null, "xl"]} fontWeight="bold">
            {appName}
          </Text>
          <Text fontSize={["md", null, "lg"]}>{rating}/5</Text>
        </HStack>

        <PlatformsTagsList platforms={platforms} />
      </VStack>
    </HStack>
  );
};

export default AppCard;
