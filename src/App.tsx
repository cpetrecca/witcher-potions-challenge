import React from "react";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { Box, Center } from "@chakra-ui/react";

function App() {
  return (
    <Box w="100vw" h="100vh" bgGradient="linear(to-t,black, gray.800)">
      <Header />
      <Center>
        <Main ></Main>
      </Center>
    </Box>
  );
}

export default App;
