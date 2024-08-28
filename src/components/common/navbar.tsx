import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowLeftIcon, MenuIcon } from "../ui/icons";
import { ROUTES } from "@/router/routes";
import { Menubar } from "./menubar";
import useStore from "@/store/useStore";

type Props = {
	goBack?: boolean;
	title?: string;
};

export const Navbar = ({ goBack, title }: Props) => {
	const { menu_details } = useStore();
	const navigate = useNavigate();

	return (
		<nav className="w-full h-16">
			<div className="w-full h-full flex items-center justify-between px-5">
				<div className="flex items-center gap-2.5">
					{goBack && (
						<Button
							size="icon-sm"
							variant="secondary"
							className="rounded-full"
							onClick={() => navigate(ROUTES.home)}>
							<ArrowLeftIcon className="stroke-neutral-400" />
						</Button>
					)}
					<h1 className="text-2xl font-bold text-emerald-50">
						{title ? title : menu_details?.menu_name}
					</h1>
				</div>
				<Menubar>
					<MenuIcon />
				</Menubar>
			</div>
		</nav>
	);
};
