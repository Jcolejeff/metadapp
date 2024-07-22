'use client';

import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';

const TradingViewWidget = () => {
  return (
    <div className="">
      <AdvancedRealTimeChart
        symbol="UNISWAP:PEIPEIWETH_BF1654.USD"
        interval="D"
        timezone="Etc/UTC"
        theme="dark"
        style="1"
        locale="en"
        toolbar_bg="#f1f3f6"
        enable_publishing={false}
        allow_symbol_change={true}
        container_id="tradingview_123"
        width={780}
        height={460}
      />
    </div>
  );
};
export default TradingViewWidget;
