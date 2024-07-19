"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { increment, decrement } from "../features/counter/counter-slice";
import styles from "./counter.module.scss";
import { Button } from "./ui/button";

const Counter: React.FC = () => {
	const count = useSelector((state: RootState) => state.counter.value);
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
		</div>
	);
};

export default Counter;
