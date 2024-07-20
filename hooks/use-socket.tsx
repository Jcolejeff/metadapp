import { useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

import { WEBSOCKET_URL } from '@/lib/constants';
import { TOKEN } from '@/lib/constants';

const useWebSocketConnection = (transactionId = '1233') => {
  useEffect(() => {
    let socket: Socket | null = null;

    socket = io(WEBSOCKET_URL, {
      extraHeaders: {
        'x-api-key': TOKEN,
      },
      query: { transaction_id: transactionId },
      transports: ['websocket'],
    });

    socket.on('connect', () => {
      console.log('Connected to socket server');
    });

    socket.on('payment.received', (data: any) => {
      console.log('Payment Received:', data);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from socket server');
    });

    socket.on('error', (error: any) => {
      console.error('Error:', error);
    });

    return () => {
      if (socket) socket.disconnect();
    };
  }, [transactionId]);
};

export default useWebSocketConnection;
