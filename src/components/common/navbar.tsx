import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowLeftIcon, MenuIcon } from "../ui/icons";
import { ROUTES } from "@/router/routes";
import { Menubar } from "./menubar";
import useStore from "@/store/useStore";
import { useEffect, useState } from "react";

type Props = {
	goBack?: boolean;
	title?: string;
};

export const Navbar = ({ goBack, title }: Props) => {
	const { menu_details } = useStore();
	const [menuName, setMenuName] = useState("");
	const [menuImage, setMenuImage] = useState<string | null>(null);
	const navigate = useNavigate();

	useEffect(() => {
		if (menu_details) {
			setMenuName(menu_details.menu_name);
			setMenuImage(menu_details.menu_image);
		}
	}, [menu_details]);

	console.log(menuImage);

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
					<div className="flex items-center gap-2">
						{menuImage && <img src={menuImage} alt="" width={30} height={30} />}
						<h1 className="text-2xl font-bold text-white">
							{title ? title : menuName}
						</h1>
					</div>
				</div>
				<Menubar>
					<button>
						<MenuIcon />
					</button>
				</Menubar>
			</div>
		</nav>
	);
};
