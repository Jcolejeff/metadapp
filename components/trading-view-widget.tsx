"use client";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

export const TradingViewWidget = () => {
	return (
		<div className="">
			<AdvancedRealTimeChart
				symbol="AAPL"
				interval="D"
				timezone="Etc/UTC"
				theme="dark"
				style="1"
				locale="en"
				toolbar_bg="#f1f3f6"
				enable_publishing={false}
				allow_symbol_change={true}
				container_id="tradingview_123"
			/>
		</div>
	);
};

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
