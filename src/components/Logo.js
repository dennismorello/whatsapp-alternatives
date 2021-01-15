import { Icon, useColorModeValue } from "@chakra-ui/react";
import { ChatSolid } from "@graywolfai/react-heroicons";

const Logo = (props) => {
  const logoColor = useColorModeValue("cyan.400", "cyan.200");

  return (
    <Icon as={ChatSolid} boxSize={[8, 10, 12]} color={logoColor} {...props} />
  );
};

export default Logo;
