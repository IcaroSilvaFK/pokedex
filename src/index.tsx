import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RoutesApplication } from "./routes";

import { GlobalStyled } from "./styles/reset";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <GlobalStyled />
      <RoutesApplication />
    </ChakraProvider>
  </React.StrictMode>
);
