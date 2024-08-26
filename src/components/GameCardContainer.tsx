import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      marginTop={3}
      _hover={{
        transform: "scale(1.03)",
        transition: "transfrom 0.2s ease-in",
        borderRadius: "20px",
      }}
      borderRadius={10}
      overflow="hidden"
      cursor="pointer"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
