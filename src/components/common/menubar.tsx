import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { LocationIcon, PhoneIcon } from "../ui/icons";
import useStore from "@/store/useStore";

type Props = {
	children: React.ReactNode;
};

export const Menubar = ({ children }: Props) => {
	const { menu_details } = useStore();

	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent className="p-3 bg-neutral-900 border-none flex flex-col">
				<SheetHeader className="items-start h-[64px]">
					<SheetTitle></SheetTitle>
				</SheetHeader>
				<div className="grow"></div>
				<div className="flex flex-col gap-4 pb-4">
					<div className="flex items-center gap-2">
						<LocationIcon className="fill-red-500" />
						<p className="text-lg text-neutral-400">{menu_details?.address}</p>
					</div>
					<div className="flex items-center gap-2">
						<PhoneIcon className="fill-emerald-600" />
						<p className="text-lg text-neutral-400">{menu_details?.phone_no}</p>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
};
