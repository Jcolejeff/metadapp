import { Search } from 'lucide-react';
import React from 'react';

import ChainSwitchTrigger from '../chain-switch-trigger';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const TopNav = () => {
  return (
    <div className="sticky left-0 top-0 z-[1000] flex w-full justify-between bg-primary-1  py-6">
      <ChainSwitchTrigger listOfChains={['ETH', 'BLAST']} switchTab={value => console.log(value)} />

      <div className="relative">
        <input
          className="bg-background1 inline h-10 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm text-white ring-offset-white transition-all duration-150 ease-linear file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 lg:w-[300px] xl:w-[300px] 2xl:w-[300px]"
          placeholder="Search by token address or name"
          type="Search"
          value=""
        />
        <div className="absolute right-0 top-0 flex h-full items-center px-2">
          <Search className=" h-4 w-4 stroke-current" />
        </div>
      </div>
      <Button onClick={() => console.log('clicked')} className="bg-primary-2">
        Connect Wallet
      </Button>
    </div>
  );
};

export default TopNav;
