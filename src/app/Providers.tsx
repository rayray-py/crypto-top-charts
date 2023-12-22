"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  // Disable ChakraProvider for now to display the Orderly TradingPage styled with the module's default styles
  // return <ChakraProvider>{children}</ChakraProvider>;

  return children;
};

export default Providers;
