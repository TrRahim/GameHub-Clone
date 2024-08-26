import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const AsideSkeleton = () => {
  return (
    <List>
      <ListItem paddingY={"5px"}>
        <HStack>
          <Skeleton boxSize={8} borderRadius={8} width="35px" />
          <SkeletonText fontSize="lg" />
        </HStack>
      </ListItem>
    </List>
  );
};

export default AsideSkeleton;
