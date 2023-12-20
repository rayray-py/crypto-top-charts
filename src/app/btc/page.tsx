"use client";

import React from "react";
import { TradingViewChart } from "@/components/TradingViewChart";
import { Box } from "@chakra-ui/react";

const BTCChart: React.FC = () => {
  return (
    <Box w="full" h="100vh">
      <TradingViewChart symbol="BTC" />
    </Box>
  );
};

export default BTCChart;
