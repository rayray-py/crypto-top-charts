"use client";

import React from "react";
import { useState } from "react";
// import { TradingViewChart } from "@/components/TradingViewChart";
import { Box } from "@chakra-ui/react";
import "@orderly.network/react/dist/styles.css";
import { TradingPage } from "@orderly.network/react";

const ETHChart: React.FC = () => {
  const [symbol, setSymbol] = useState("PERP_ETH_USDC");
  return (
    <Box w="full">
      <TradingPage
        symbol={symbol}
        tradingViewConfig={{
          scriptSRC:
            "https://unpkg.com/lightweight-charts/dist/lightweight-charts.standalone.production.js",
          // library_path: "/assets/chart/charting_library/",
        }}
        onSymbolChange={(symbol) => {
          setSymbol(symbol.symbol);
        }}
      />
    </Box>
  );
};

export default ETHChart;
