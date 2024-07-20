'use client';

import { useEffect } from 'react';
import io, { Socket } from 'socket.io-client';

import Image from 'next/image';

import ChainSwitchTrigger from '@/components/chain-switch-trigger';
import TopNav from '@/components/partials/top-nav';
import MarketTradesTable from '@/components/tables/market-trades';
import ChainChangeTab from '@/components/tabs/chain-change-tab';
import TradingViewWidget from '@/components/trading-view-widget';

import { API_URL } from '@/lib/constants';
import { WEBSOCKET_URL } from '@/lib/constants';

import { useMarketTrades } from '@/hooks/use-market-trades';
import useWebSocketConnection from '@/hooks/use-socket';

import Counter from '../components/counter';

export default function Home() {
  const { data } = useMarketTrades('eth');
  useWebSocketConnection();
  console.log('data', { data });
  return (
    <main className="container   min-h-screen ">
      {/* <Counter /> */}
      <TopNav />
      <section className="grid gap-12 md:grid-cols-[3fr_1fr]">
        <div>
          <TradingViewWidget />
          <MarketTradesTable />
        </div>
        <ChainChangeTab />
      </section>
    </main>
  );
}
