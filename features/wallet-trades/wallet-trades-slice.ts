import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { WalletResponse } from '@/types';

interface WalletTradesState {
  value: number;
  trades: WalletResponse;
}

const initialState: WalletTradesState = {
  value: 0,
  trades: {
    data: [],
    message: '',
    page: 0,
    page_size: 0,
    status: 0,
    total: 0,
  },
};

const walletTradesSlice = createSlice({
  name: 'walletTrades',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    updateWalletTrades: (state, action: PayloadAction<WalletResponse>) => {
      state.trades = action.payload;
    },
  },
});

export const { increment, updateWalletTrades } = walletTradesSlice.actions;

export default walletTradesSlice;
