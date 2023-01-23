import { Box } from "@chakra-ui/react";

type Props = {
  children?: JSX.Element;
};

const Main: React.FC<Props> = ({ children }: Props) => {
  return (
    <Box
      w="70%"
      minW="300px"
      minH="300px"
      border="1px solid yellow"
      borderRadius="lg"
      mt="35PX"
    >
      {children}
    </Box>
  );
};
export default Main;
