'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { formatToUSD } from '@/lib/utils';

import { updateWalletTrades } from '@/features/wallet-trades/wallet-trades-slice';
import { useMarketTrades } from '@/hooks/use-market-trades';
import { RootState } from '@/store';

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
];

const MarketTradesTable = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isRefetching } = useMarketTrades('eth');

  useEffect(() => {
    if (data) {
      dispatch(updateWalletTrades(data));
    }
  }, [isRefetching, data, isLoading]);
  const walletTrades = useSelector((state: RootState) => state.walletTrades.trades);

  return (
    <Table>
      <TableCaption>Wallet Trades</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]"> Wallet Address</TableHead>
          <TableHead>Average Sold Price</TableHead>
          {isLoading || isRefetching ? (
            <TableHead>
              <div className="h-4 w-20 animate-pulse rounded-md bg-neutral-200"></div>
              <p>Refreshing</p>
            </TableHead>
          ) : null}
        </TableRow>
      </TableHeader>
      <TableBody>
        {walletTrades.data.map(item => (
          <TableRow key={item.walletAddress}>
            <TableCell className="font-medium">{item.walletAddress}</TableCell>
            <TableCell>{formatToUSD(item['1d']?.avgSoldPriceUSD || 0)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default MarketTradesTable;
