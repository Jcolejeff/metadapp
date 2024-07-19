import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const authSlice = createSlice({
	name: "auth",
	initialState: { name: "", isLoggedIn: false },
	reducers: {
		setUser: (state, action: PayloadAction<{ name: string }>) => {
			state.name = action.payload.name;
			state.isLoggedIn = true;
		},
		clearUser: (state) => {
			state.name = "";
			state.isLoggedIn = false;
		},
	},
});
export const { setUser, clearUser } = authSlice.actions;
export default authSlice;
