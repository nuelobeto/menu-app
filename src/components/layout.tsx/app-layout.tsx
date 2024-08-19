import { Navbar } from "../common/navbar";
import { Search } from "../common/search";

type Props = {
	goBack?: boolean;
	children: React.ReactNode;
	title?: string;
};

export const AppLayout = ({ goBack, children, title }: Props) => {
	return (
		<div className="w-full max-w-[448px] bg-white mx-auto relative pt-[136px]">
			<header className="w-full max-w-[448px]  fixed top-0 left-[50%] translate-x-[-50%] z-50 bg-white">
				<Navbar goBack={goBack} title={title} />
				<Search />
			</header>

			<main className="min-h-full">{children}</main>
		</div>
	);
};
