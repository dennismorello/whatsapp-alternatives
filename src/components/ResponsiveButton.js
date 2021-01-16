import { Button } from "@chakra-ui/react";

const ResponsiveButton = (props) => (
  <Button
    fontSize={["md", "lg"]}
    h={[10, 12]}
    minW={[10, 12]}
    px={[4, 6]}
    {...props}
  />
);

export default ResponsiveButton;
