import { Search } from "../common/search";
import { Navbar } from "../common/navbar";

type Props = {
	goBack?: boolean;
	children: React.ReactNode;
	title?: string;
};

export const AppLayout = ({ goBack, children, title }: Props) => {
	return (
		<div className="w-full max-w-[448px] mx-auto relative">
			<div className="fixed top-0 left-[50%] translate-x-[-50%] w-full max-w-[448px] h-screen pointer-events-none bg-gradient-to-b from-emerald-200 from-10% via-emerald-100 via-30% to-emerald-50 to-90%"></div>
			<header className="sticky top-0 left-0 w-full z-50 bg-emerald-200">
				<Navbar goBack={goBack} title={title} />
				<Search />
			</header>

			<main className="min-h-[calc(100vh-136px)] pb-12 relative ">
				{children}
			</main>
		</div>
	);
};
