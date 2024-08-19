import { Navbar } from "../common/navbar";
import { Search } from "../common/search";

type Props = {
	goBack?: boolean;
	children: React.ReactNode;
	title?: string;
};

export const AppLayout = ({ goBack, children, title }: Props) => {
	return (
		<div className="w-full max-w-[448px] bg-white mx-auto">
			<header className="sticky top-0 z-50 bg-white">
				<Navbar goBack={goBack} title={title} />
				<Search />
			</header>

			<main className="min-h-[calc(100vh-136px)]">{children}</main>
		</div>
	);
};
