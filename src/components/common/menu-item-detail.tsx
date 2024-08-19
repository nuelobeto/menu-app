import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuItemType } from "@/types";
import { XIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export const MenuItemDetail = ({
	item,
	children,
}: {
	item: MenuItemType;
	children: React.ReactNode;
}) => {
	return (
		<Drawer>
			<DrawerTrigger asChild>{children}</DrawerTrigger>
			<DrawerContent className="px-5 pt-14 pb-8">
				<DrawerHeader className="p-0 flex flex-col items-start">
					<DrawerTitle className="font-semibold text-xl text-neutral-800">
						{item.item_name}
					</DrawerTitle>
					<DrawerDescription className="text-base max-w-[350px] text-neutral-600 text-left">
						{item.item_description}
					</DrawerDescription>
					<p className="font-semibold text-lg text-neutral-850">
						${item.item_amount}
					</p>
				</DrawerHeader>
				<DrawerClose asChild className="absolute top-4 right-5">
					<Button size="icon-sm" variant="secondary" className="rounded-full">
						<XIcon />
					</Button>
				</DrawerClose>
			</DrawerContent>
		</Drawer>
	);
};
