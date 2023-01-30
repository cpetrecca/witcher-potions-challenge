import React from "react";
import Header from "./layout/Header";
import Main from "./layout/Main";
import PotionMixer from "./components/PotionMixer";
import { Box, Center } from "@chakra-ui/react";

function App() {
  return (
    <Box w="100vw" minH="100vh" bgGradient="linear(to-t,black, gray.800)" pb="10px">
      <Header />
      <Center>
        <Main >
          <PotionMixer />
        </Main>
      </Center>
    </Box>
  );
}

export default App;
