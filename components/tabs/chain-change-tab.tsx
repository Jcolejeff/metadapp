"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const ChainChangeTab = () => {
	const [name, setName] = useState("");
	return (
		<Tabs defaultValue="buy" className="w-[400px]">
			<TabsList className="grid w-full grid-cols-3">
				<TabsTrigger value="buy">Buy</TabsTrigger>
				<TabsTrigger value="sell">Sell </TabsTrigger>
				<TabsTrigger value="limit">Limit</TabsTrigger>
			</TabsList>
			<TabsContent value="buy">
				<Card>
					<CardHeader>
						<CardTitle>Buy</CardTitle>
						<CardDescription>
							Make changes to your account here. Click save when you&apos;re
							done.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-2">
						<div className="space-y-1">
							<Label htmlFor="name">Name</Label>
							<Input
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="space-y-1">
							<Label htmlFor="username">Username</Label>
							<Input id="username" />
						</div>
					</CardContent>
					<CardFooter>
						<Button>Buy</Button>
					</CardFooter>
				</Card>
			</TabsContent>
			<TabsContent value="sell">
				<Card>
					<CardHeader>
						<CardTitle>Sell </CardTitle>
						<CardDescription>
							Change your password here. After saving, you&apos;ll be logged
							out.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-2">
						<div className="space-y-1">
							<Label htmlFor="current">Current password</Label>
							<Input id="current" type="password" />
						</div>
						<div className="space-y-1">
							<Label htmlFor="new">New password</Label>
							<Input id="new" type="password" />
						</div>
					</CardContent>
					<CardFooter>
						<Button>Sell</Button>
					</CardFooter>
				</Card>
			</TabsContent>
			<TabsContent value="limit">
				<Card>
					<CardHeader>
						<CardTitle>Limit</CardTitle>
						<CardDescription>
							Change your password here. After saving, you&apos;ll be logged
							out.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-2">
						<div className="space-y-1">
							<Label htmlFor="current">Current password</Label>
							<Input id="current" type="password" />
						</div>
						<div className="space-y-1">
							<Label htmlFor="new">New password</Label>
							<Input id="new" type="password" />
						</div>
					</CardContent>
					<CardFooter>
						<Button>Limit</Button>
					</CardFooter>
				</Card>
			</TabsContent>
		</Tabs>
	);
};

export default ChainChangeTab;
