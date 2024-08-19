import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { motion } from "framer-motion";

type Props = {
	links: {
		label: string;
		url: string;
	}[];
};
export const SubcategoryNavbar = ({ links }: Props) => {
	const hash = window.location.hash;

	useEffect(() => {
		if (!hash) {
			window.location.hash = links[0].url;
		}
	}, [hash, links]);

	return (
		<nav className="sticky top-[136px] z-50">
			<div className="w-full h-full flex items-center justify-between gap-2.5 px-5 pt-0 pb-4 overflow-auto hide-scroll bg-white">
				{links.map((link, index) => (
					<motion.a
						id={`${link.url.substring(1)}-link`}
						key={index}
						href={link.url}
						whileTap={{ scale: 0.7 }}
						transition={{ type: "spring", stiffness: 400, damping: 17 }}
						className={cn(
							"capitalize whitespace-nowrap h-8 p-2.5 rounded-lg border font-semibold text-xs text-neutral-500 flex items-center",
							hash === link.url
								? "bg-emerald-50 border-emerald-200"
								: "border-neutral-200"
						)}>
						{link.label}
					</motion.a>
				))}
			</div>
		</nav>
	);
};
