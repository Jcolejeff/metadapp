import Image from "next/image";
import Counter from "../components/counter";
export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="text-4xl font-bold mb-8">Welcome to My Next.js App</h1>
			<Counter />
		</main>
	);
}
