import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import authSlice from '@/features/auth/authSlice';

import storage from 'redux-persist/lib/storage';

import walletTradesSlice from '../features/wallet-trades/wallet-trades-slice';

const rootReducer = combineReducers({
  walletTrades: walletTradesSlice.reducer,
  auth: authSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['walletTrades'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
