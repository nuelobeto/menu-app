import { AppLayout } from "@/components/layout.tsx/app-layout";
import { cn } from "@/lib/utils";
import { CategoryType } from "@/types";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import useStore from "@/store/useStore";
import { turnStringToLink } from "@/helpers";
import { ROUTES } from "@/router/routes";

export default function Home() {
	const { menu } = useStore();

	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.2,
				staggerChildren: 0.2,
			},
		},
	};
	const categories = [...new Set(menu.map((m) => m.item_category))].map(
		(category) => ({
			label: category,
			url: ROUTES.category(turnStringToLink(category)),
		})
	);

	useEffect(() => {
		const scrollToTop = () => {
			window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		};
		scrollToTop();
	}, []);

	return (
		<AppLayout>
			<section className="w-full flex flex-col gap-3 pt-4">
				<motion.div
					variants={container}
					initial="hidden"
					animate="visible"
					className="px-5 py-4 grid grid-cols-2 gap-3">
					{categories.map((category, index) => (
						<Category key={index} category={category} />
					))}
				</motion.div>
			</section>
		</AppLayout>
	);
}

const Category = ({ category }: { category: CategoryType }) => {
	const navigate = useNavigate();

	const handleNavigate = (url: string) => {
		setTimeout(() => {
			navigate(url);
		}, 200);
	};

	const getImage = (category: string) => {
		const image =
			category === "drinks"
				? "/images/drinks.jpeg"
				: category === "mixers"
				? "/images/mixers.jpeg"
				: category === "smokes"
				? "/images/smokes.jpeg"
				: "/images/drinks.jpeg";
		return image;
	};

	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};

	return (
		<motion.button
			variants={item}
			whileHover={{ scale: 1.03 }}
			whileTap={{ scale: 0.9 }}
			transition={{ type: "spring", stiffness: 400, damping: 10 }}
			className={cn(
				"grow p-2 rounded-lg flex flex-col gap-3 items-center border border-neutral-800 bg-neutral-900 hover:bg-neutral-900/50"
			)}
			onClick={() => handleNavigate(category.url)}>
			<div className="w-full border border-neutral-700 rounded-lg overflow-clip shadow-md shadow-black/50">
				<img
					src={getImage(category.label)}
					alt=""
					className="w-full aspect-[1/1.5] block"
				/>
			</div>
			<p className="font-semibold text-sm text-emerald-100 capitalize">
				{category.label}
			</p>
		</motion.button>
	);
};
