import { Box } from "@chakra-ui/react";

type Props = {
  children?: JSX.Element;
};

const Main: React.FC<Props> = ({ children }: Props) => {
  return (
    <Box
      w="70%"
      minW="500px"
      minH="300px"
      border="1px solid #e6ac00"
      borderRadius="lg"
      mt="35PX"
      pb="10px"
    >
      {children}
    </Box>
  );
};
export default Main;
