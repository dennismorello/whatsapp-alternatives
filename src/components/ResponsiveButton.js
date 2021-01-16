import { Button, forwardRef } from "@chakra-ui/react";

const ResponsiveButton = forwardRef((props, forwardedRef) => (
  <Button
    fontSize={["md", "lg"]}
    h={[10, 12]}
    minW={[10, 12]}
    px={[4, 6]}
    ref={forwardedRef}
    {...props}
  />
));

export default ResponsiveButton;
