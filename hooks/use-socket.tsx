'use client';

import { useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

const WEBSOCKET_URL = 'wss://v1-dex-ws.evmtracker.com';
const TOKEN_KEY = 'Y3NhY3NhY3NhY2E7Y2Fpc2pjaWFzaGM4dWFjczB1OGM5dXNhOWNhdXNjOWFzdWM';

const useDexMarketSocket = () => {
  useEffect(() => {
    const socket: Socket = io(WEBSOCKET_URL, {
      auth: {
        token: TOKEN_KEY,
      },
      extraHeaders: {
        'Token-Key': TOKEN_KEY,
      },
      transports: ['websocket'],
    });

    socket.on('connect', () => {
      console.log('Connected to DexMarket WebSocket');
    });

    socket.on('eth_swap_txn', (data: any) => {
      console.log('ETH Swap Transaction:', data);
    });

    socket.on('bsc_swap_txn', (data: any) => {
      console.log('BSC Swap Transaction:', data);
    });

    socket.on('blast_swap_txn', (data: any) => {
      console.log('Blast Swap Transaction:', data);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from DexMarket WebSocket');
    });

    socket.on('error', (error: any) => {
      console.error('WebSocket Error:', error);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
};

export default useDexMarketSocket;
