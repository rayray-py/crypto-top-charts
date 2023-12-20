import React from "react";

type TradingViewChartProps = {
  symbol: string;
};

const TradingViewChart: React.FC<TradingViewChartProps> = ({ symbol }) => {
  const tradingViewUrl = `https://s.tradingview.com/widgetembed/?frameElementId=tradingview_2f96e&symbol=BINANCE:${symbol}USDT&interval=D&symboledit=1&saveimage=1&toolbarbg=f1f3f6&details=1&studies=%5B%5D&theme=Light&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#`;

  return (
    <iframe
      src={tradingViewUrl}
      width="100%"
      height="450"
      allowTransparency
      frameBorder="0"
      scrolling="no"
      allowFullScreen
    />
  );
};

export default TradingViewChart;
