const { HStack, Tag } = require("@chakra-ui/react");

const PlatformsTagsList = ({ platforms = [], ...otherProps }) => (
  <HStack {...otherProps}>
    {platforms.map((platform) => (
      <Tag key={platform} colorScheme="cyan">
        {platform}
      </Tag>
    ))}
  </HStack>
);

export default PlatformsTagsList;
