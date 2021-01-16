import { Text, VStack } from "@chakra-ui/react";

import AppIcon from "@/components/AppIcon";

const AppShortcut = ({ appName, iconUrl, ...otherProps }) => {
  return (
    <VStack {...otherProps}>
      <AppIcon
        alt={`${appName} icon`}
        iconSize={[24, 32, 36]}
        iconUrl={iconUrl}
      />
      <Text fontWeight="bold">{appName}</Text>
    </VStack>
  );
};

export default AppShortcut;
