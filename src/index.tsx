import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { PotionContextProvider } from "./store/potion-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <PotionContextProvider>
        <App />
      </PotionContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
