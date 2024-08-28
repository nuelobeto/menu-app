import { Search } from "../common/search";
import { Navbar } from "../common/navbar";
import { useLocation } from "react-router-dom";

type Props = {
	goBack?: boolean;
	title?: string;
	children: React.ReactNode;
};

export const AppLayout = ({ goBack, title, children }: Props) => {
	const { pathname } = useLocation();

	const bg = pathname.includes("food")
		? "bg-[url('/images/bg-food.png')]"
		: pathname.includes("drinks")
		? "bg-[url('/images/bg-drinks.png')]"
		: "bg-[url('/images/bg.png')]";

	return (
		<div className="w-full max-w-[448px] mx-auto relative bg-neutral-950">
			<div
				className={`fixed top-0 left-[50%] translate-x-[-50%] w-full max-w-[448px] h-screen pointer-events-none ${bg} bg-no-repeat bg-center bg-cover`}></div>
			<header className="sticky top-0 left-0 w-full z-50 bg-neutral-950">
				<Navbar goBack={goBack} title={title} />
				<Search />
			</header>

			<main className="min-h-[calc(100vh-136px)] pb-12 relative ">
				{children}
			</main>
		</div>
	);
};
