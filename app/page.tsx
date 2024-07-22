'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io, { Socket } from 'socket.io-client';

import Image from 'next/image';

import ChainSwitchTrigger from '@/components/chain-switch-trigger';
import TopNav from '@/components/partials/top-nav';
import MarketTradesTable from '@/components/tables/market-trades';
import ChainChangeTab from '@/components/tabs/chain-change-tab';
import TradingViewWidget from '@/components/trading-view-widget';

import { API_URL } from '@/lib/constants';
import { WEBSOCKET_URL } from '@/lib/constants';

import { updateWalletTrades } from '@/features/wallet-trades/wallet-trades-slice';
import { useMarketTrades } from '@/hooks/use-market-trades';
import useWebSocketConnection from '@/hooks/use-socket';

export default function Home() {
  useWebSocketConnection();
  return (
    <main className="container   min-h-screen ">
      <TopNav />
      <section className="grid gap-4 md:grid-cols-[3fr_1fr]">
        <div className="space-y-4">
          <TradingViewWidget />
          <MarketTradesTable />
        </div>
        <ChainChangeTab />
      </section>
    </main>
  );
}
