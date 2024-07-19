"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { increment, decrement } from "../features/counter/counter-slice";
import { setUser, clearUser } from "@/features/auth/authSlice";
import styles from "./counter.module.scss";
import { Button } from "./ui/button";

const Counter: React.FC = () => {
	const count = useSelector((state: RootState) => state.counter.value);
	const user = useSelector((state: RootState) => state.auth);

	const dispatch = useDispatch();

	return (
		<div className={`${styles.counter} p-4 bg-gray-100 rounded-lg`}>
			<h1 className="text-2xl font-bold text-black mb-4">Counter: {count}</h1>
			<Button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
				onClick={() => dispatch(increment())}
			>
				Increment
			</Button>
			<Button
				className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
				onClick={() => dispatch(decrement())}
			>
				Decrement
			</Button>
			<div className="mt-8">
				<h2 className="text-xl font-bold mb-2">User Info (Not Persisted)</h2>
				{user.isLoggedIn ? (
					<>
						<p>Logged in as: {user.name}</p>
						<button
							className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-2"
							onClick={() => dispatch(clearUser())}
						>
							Log Out
						</button>
					</>
				) : (
					<button
						className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
						onClick={() => dispatch(setUser({ name: "John Doe" }))}
					>
						Log In as John Doe
					</button>
				)}
			</div>
		</div>
	);
};

export default Counter;
