import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counter-slice";
import authSlice from "@/features/auth/authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const rootReducer = combineReducers({
	counter: counterSlice.reducer,
	auth: authSlice.reducer,
});

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["counter"], // only counter will be persisted
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ["persist/PERSIST"],
			},
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
