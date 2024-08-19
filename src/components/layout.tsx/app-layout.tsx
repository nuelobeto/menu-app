import { Search } from "../common/search";
import { Navbar } from "../common/navbar";

type Props = {
	goBack?: boolean;
	children: React.ReactNode;
	title?: string;
};

export const AppLayout = ({ goBack, children, title }: Props) => {
	return (
		<div className="w-full max-w-[448px] bg-white mx-auto relative">
			<header className="sticky top-0 left-0 w-full z-50 bg-white">
				<Navbar goBack={goBack} title={title} />
				<Search />
			</header>

			<main className="min-h-[calc(100vh-136px)] pb-12">{children}</main>
		</div>
	);
};
