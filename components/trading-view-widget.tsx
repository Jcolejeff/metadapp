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

//  symbol : The symbol of the stock you want to display.
//  interval : The interval of the data.
//  timezone : The timezone of the data.
//  theme : The theme of the widget.
//  style : The style of the widget.
//  locale : The locale of the widget.
//  toolbar_bg : The background color of the toolbar.
//  enable_publishing : Whether to enable publishing.
//  allow_symbol_change : Whether to allow symbol change.
//  container_id : The ID of the container element.

// import React, { useEffect, useRef, memo } from 'react';

// const TradingViewWidget: React.FC = () => {
//   const container = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const containerElement = container.current;

//     if (!containerElement) return;

//     const script = document.createElement('script');
//     script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
//     script.type = 'text/javascript';
//     script.async = true;
//     script.innerHTML = `
//       {
//         "width": "980",
//         "height": "510",
//         "symbol": "UNISWAP:PEIPEIWETH_BF1654.USD",
//         "timezone": "Etc/UTC",
//         "theme": "dark",
//         "style": "1",
//         "locale": "en",
//         "range": "YTD",
//         "hide_side_toolbar": false,
//         "allow_symbol_change": true,
//         "calendar": false,
//         "support_host": "https://www.tradingview.com"
//       }`;

//     containerElement.appendChild(script);

//     return () => {
//       containerElement.innerHTML = '';
//     };
//   }, []);

//   return (
//     <div className="tradingview-widget-container" ref={container}>
//       <div className="tradingview-widget-container__widget"></div>

//     </div>
//   );
// };

// export default memo(TradingViewWidget);
