import { Box } from "@chakra-ui/react";
import headerBg from "./../assets/images/headerBg.png";

const Header = () => {
  return (
    <Box
      role="header"
      bg="black"
      backgroundImage={`url(${headerBg})`}
      bgPosition="center"
      bgRepeat="repeat"
      w="100%"
      p={8}
      color="white"
      bgSize="cover"
    ></Box>
  );
};

export default Header;
