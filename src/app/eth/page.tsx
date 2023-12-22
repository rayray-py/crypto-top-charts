"use client";

import React from "react";
import { useState } from "react";
import "@orderly.network/react/dist/styles.css";
import { OrderlyAppProvider, TradingPage } from "@orderly.network/react";
import { ConnectorProvider } from "@orderly.network/web3-onboard";

const ETHChart: React.FC = () => {
  const [symbol, setSymbol] = useState("PERP_ETH_USDC");
  return (
    <ConnectorProvider apiKey="<Your web3-onboard's api key>">
      <OrderlyAppProvider
        networkId="testnet"
        brokerId="<Your broker id>"
        logoUrl="https://alice.slash.vision/images/slash_logo.png"
      >
        <TradingPage
          symbol={symbol}
          tradingViewConfig={{
            scriptSRC:
              "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js",
            // library_path: "/assets/chart/charting_library/",
          }}
          onSymbolChange={(symbol) => {
            setSymbol(symbol.symbol);
          }}
        />
      </OrderlyAppProvider>
    </ConnectorProvider>
  );
};

export default ETHChart;
