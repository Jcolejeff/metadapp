import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { ThemeProvider } from "@/components/theme-provider";

import { ReduxProvider } from "../components/redux-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Metadapp - A Smart trading & Analytics platform.",
	description:
		"Metadapp is a platform that provides on-chain traders, serious investors & Degens with powerful tools to analyze and spot and trade non-obvious opportunities in the crypto markets with improved efficiency and accuracy.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-primary-1`}>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<ReduxProvider>{children}</ReduxProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
