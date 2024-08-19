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
			<header>
				<Navbar goBack={goBack} title={title} />
				<Search />
			</header>

			<main className="h-[calc(100vh-136px)] overflow-auto hide-scroll">
				{children}
			</main>
		</div>
	);
};
