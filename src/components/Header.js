import cn from "classnames";

import MobileNavMenu from "@/components/MobileNavMenu";
import NavMenu from "@/components/NavMenu";
import useDisclosure from "@/hooks/useDisclosure";

const Header = ({ className, ...otherProps }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={cn("relative bg-white", className)} {...otherProps}>
      <NavMenu onMobileMenuOpen={onOpen} />
      <MobileNavMenu isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default Header;
