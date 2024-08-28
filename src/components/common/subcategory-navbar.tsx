import { cn } from "@/lib/utils";
import useStore from "@/store/useStore";
import { motion } from "framer-motion";
import { useEffect } from "react";

type Props = {
	links: {
		label: string;
		url: string;
	}[];
};
export const SubcategoryNavbar = ({ links }: Props) => {
	const { activeHash, setActiveHash } = useStore();

	// useEffect(() => {
	// 	if (!activeHash) {
	// 		setActiveHash(links[0].url);
	// 	}
	// }, [activeHash, links, setActiveHash]);

	useEffect(() => {
		const autoScroll = () => {
			setTimeout(() => {
				const activeLink = document.getElementById(`${activeHash}-link`);
				if (activeLink) {
					activeLink.scrollIntoView({ behavior: "smooth", inline: "center" });
				}
			}, 1000);
		};

		autoScroll();
	}, [activeHash]);

	return (
		<nav className="sticky top-[136px] z-50">
			<div className="w-full h-full flex items-center justify-between gap-2.5 px-5 pt-0 pb-4 overflow-auto hide-scroll bg-emerald-200">
				{links.map((link, index) => (
					<motion.a
						id={`${link.url}-link`}
						key={index}
						href={`#${link.url}`}
						whileTap={{ scale: 0.7 }}
						transition={{ type: "spring", stiffness: 400, damping: 17 }}
						className={cn(
							"capitalize whitespace-nowrap h-8 p-2.5 rounded-lg border font-semibold text-xs text-neutral-500 flex items-center",
							activeHash === link.url
								? "bg-emerald-600 border-emerald-500 text-white"
								: "border-emerald-500"
						)}
						onClick={() => setActiveHash(link.url)}>
						{link.label}
					</motion.a>
				))}
			</div>
		</nav>
	);
};
