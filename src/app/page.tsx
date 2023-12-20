"use client";

import React, { useEffect, useState } from "react";
import { TradingViewChart } from "@/components/TradingViewChart";
import { Box, SimpleGrid } from "@chakra-ui/react";

type CoinData = {
  id: string;
  symbol: string;
};

const ChartList: React.FC = () => {
  const [coins, setCoins] = useState<CoinData[]>([]);

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      );
      const data = await response.json();
      setCoins(data);
    };

    fetchCoins();
  }, []);

  return (
    <SimpleGrid columns={[1, null, 3, 4, 5]} spacing="20px">
      {coins.map((coin) => {
        if (coin.symbol.toUpperCase().includes("USD")) {
          return null;
        }

        return (
          <Box key={coin.id}>
            <TradingViewChart symbol={coin.symbol.toUpperCase()} />
          </Box>
        );
      })}
    </SimpleGrid>
  );
};

export default ChartList;
