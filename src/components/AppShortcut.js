import { Text, useBreakpointValue, VStack } from "@chakra-ui/react";

import AppIcon from "@/components/AppIcon";

const AppShortcut = ({ appName, iconUrl, ...otherProps }) => {
  const iconSize = useBreakpointValue([24, 32, 36]);

  return (
    <VStack {...otherProps}>
      <AppIcon alt={`${appName} icon`} iconSize={iconSize} iconUrl={iconUrl} />
      <Text fontWeight="bold">{appName}</Text>
    </VStack>
  );
};

export default AppShortcut;
