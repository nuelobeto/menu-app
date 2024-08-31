import { Button } from "../ui/button";
import { SearchIcon, XIcon } from "../ui/icons";
import { Input } from "../ui/input";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import { MenuItemDetail } from "./menu-item-detail";
import { motion } from "framer-motion";
import useStore from "@/store/useStore";

export const Search = () => {
	const { menu } = useStore();
	const [query, setQuery] = useState("");

	const filteredMenu = query
		? menu.filter(
				(item) =>
					item.item_subcategory.toLowerCase().includes(query.toLowerCase()) ||
					item.item_name.toLowerCase().includes(query.toLowerCase()) ||
					item.item_description?.toLowerCase().includes(query.toLowerCase())
		  )
		: [];

	return (
		<div className="w-full px-5 py-4 flex items-center gap-2.5">
			<Input
				type="text"
				placeholder="Search"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className="flex-1 h-12"
			/>

			<Drawer>
				<DrawerTrigger asChild>
					<Button size="icon" className="w-12 h-12">
						<SearchIcon />
					</Button>
				</DrawerTrigger>
				<DrawerContent className="px-5 pt-14 pb-8 h-full rounded-none">
					<DrawerHeader className="px-0">
						<DrawerTitle className="font-semibold text-xl text-neutral-200 text-left">
							Result ({filteredMenu.length})
						</DrawerTitle>
						<DrawerDescription hidden></DrawerDescription>
					</DrawerHeader>

					<div className="flex flex-col gap-2.5 h-full overflow-auto">
						{filteredMenu.map((item, index) => (
							<MenuItemDetail key={index} item={item}>
								<motion.button
									whileTap={{ scale: 0.7 }}
									transition={{ type: "spring", stiffness: 400, damping: 17 }}
									className="p-4 rounded-lg border flex flex-col gap-2 border-neutral-700 bg-neutral-800 hover:bg-neutral-800/50">
									<div className="flex items-center justify-between w-full">
										<h2 className="font-medium text-base text-emerald-50 text-left">
											{item.item_name}
										</h2>
										<p className="font-medium text-sm text-emerald-500">
											₦{item.item_amount}
										</p>
									</div>
									{item.item_description && (
										<p className="max-w-[300px] text-sm text-neutral-500 text-left">
											{item.item_description}
										</p>
									)}
								</motion.button>
							</MenuItemDetail>
						))}
					</div>

					<DrawerClose asChild className="absolute top-4 right-5">
						<Button size="icon-sm" variant="secondary" className="rounded-full">
							<XIcon className="stroke-neutral-400" />
						</Button>
					</DrawerClose>
				</DrawerContent>
			</Drawer>
		</div>
	);
};
