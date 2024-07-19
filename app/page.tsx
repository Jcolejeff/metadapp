"use client";
import Image from "next/image";
import Counter from "../components/counter";
import ChainChangeTab from "@/components/tabs/chain-change-tab";
import { TradingViewWidget } from "@/components/trading-view-widget";
import MarketTradesTable from "@/components/tables/market-trades";
import ChainSwitchTrigger from "@/components/chain-switch-trigger";
import TopNav from "@/components/partials/top-nav";
export default function Home() {
	return (
		<main className="min-h-screen   container ">
			{/* <Counter /> */}
			<TopNav />
			<section className="grid gap-12 md:grid-cols-[3fr_1fr]">
				<div>
					<TradingViewWidget />
					<MarketTradesTable />
				</div>
				<ChainChangeTab />
			</section>

			<div className="w-full h-full hidden md:hidden lg:inline-block xl:inline-block 2xl:inline-block">
				<div className="w-full h-full">
					<iframe
						id="tradingview_e4891"
						name="tradingview_e4891"
						src="blob:https://metadapp.com/0b4b1f62-e4fc-4f1c-90e7-7dd7df7f8742"
						data-widget-options="symbol=0xa43fe16908251ee70ef74718545e4fe6c5ccec9f&amp;interval=15&amp;toolbarbg=101720&amp;widgetbar=%7B%22details%22%3Afalse%2C%22watchlist%22%3Afalse%2C%22news%22%3Afalse%2C%22datawindow%22%3Afalse%2C%22watchlist_settings%22%3A%7B%22default_symbols%22%3A%5B%5D%7D%7D&amp;timeFrames=%5B%7B%22text%22%3A%225y%22%2C%22resolution%22%3A%221W%22%7D%2C%7B%22text%22%3A%221y%22%2C%22resolution%22%3A%221W%22%7D%2C%7B%22text%22%3A%226m%22%2C%22resolution%22%3A%22120%22%7D%2C%7B%22text%22%3A%223m%22%2C%22resolution%22%3A%2260%22%7D%2C%7B%22text%22%3A%221m%22%2C%22resolution%22%3A%2230%22%7D%2C%7B%22text%22%3A%225d%22%2C%22resolution%22%3A%225%22%7D%2C%7B%22text%22%3A%221d%22%2C%22resolution%22%3A%221%22%7D%5D&amp;locale=en&amp;uid=tradingview_e4891&amp;clientId=metadapp&amp;userId=&amp;chartsStorageVer=1.0&amp;debug=false&amp;timezone=Etc%2FUTC&amp;theme=dark"
						title="Financial Chart"
						scrolling="no"
						style={{ width: "100%", height: "100%" }}
					></iframe>
				</div>
			</div>
		</main>
	);
}
