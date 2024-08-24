import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

type Props = {
	children: React.ReactNode;
};

export const Menubar = ({ children }: Props) => {
	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent className="p-3">
				<SheetHeader className=" items-start">
					<SheetTitle>Logo</SheetTitle>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};
