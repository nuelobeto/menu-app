import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowLeftIcon, MenuIcon } from "../ui/icons";

type Props = {
	goBack?: boolean;
	title?: string;
};

export const Navbar = ({ goBack, title }: Props) => {
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
							onClick={() => navigate(-1)}>
							<ArrowLeftIcon />
						</Button>
					)}
					<h1 className="text-xl font-bold">{title ? title : "Logo"}</h1>
				</div>
				<button>
					<MenuIcon />
				</button>
			</div>
		</nav>
	);
};
