import React from "react";
import ChainSwitchTrigger from "../chain-switch-trigger";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const TopNav = () => {
	return (
		<div className="flex justify-between sticky top-0 left-0 bg-primary-1 w-full z-[1000]  py-6">
			<ChainSwitchTrigger
				listOfChains={["ETH", "BLAST"]}
				switchTab={(value) => console.log(value)}
			/>

			<div className="relative">
				<input
					className="h-10 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 placeholder:text-neutral-400 bg-background1 text-white lg:w-[300px] xl:w-[300px] 2xl:w-[300px] inline transition-all ease-linear duration-150"
					placeholder="Search by token address or name"
					type="Search"
					value=""
				/>
				<div className="absolute top-0 right-0 h-full flex items-center px-2">
					<Search className=" stroke-current w-4 h-4" />
				</div>
			</div>
			<Button onClick={() => console.log("clicked")} className="bg-primary-2">
				Connect Wallet
			</Button>
		</div>
	);
};

export default TopNav;
