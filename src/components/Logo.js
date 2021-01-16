import { Icon } from "@chakra-ui/react";
import { ChatSolid } from "@graywolfai/react-heroicons";

import usePrimaryColor from "@/hooks/usePrimaryColor";

const Logo = (props) => {
  const logoColor = usePrimaryColor();

  return (
    <Icon as={ChatSolid} boxSize={[8, 10, 12]} color={logoColor} {...props} />
  );
};

export default Logo;
