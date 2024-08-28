import { AppLayout } from "@/components/layout.tsx/app-layout";
import { CATEGORIES } from "@/constants";
import { cn } from "@/lib/utils";
import { CategoryType } from "@/types";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
// import { MenuItemDetail } from "@/components/common/menu-item-detail";

// function isDefined<T>(value: T | undefined): value is T {
// 	return value !== undefined;
// }

export default function Home() {
	// const menuGroups = (): MenuGroupType[] => {
	// 	const tags = Array.from(new Set(MENU.map((m) => m.tag))).filter(isDefined);

	// 	const menuGroups: MenuGroupType[] = tags.map((tag) => ({
	// 		label: tag,
	// 		menu: MENU.filter((item) => item.tag === tag),
	// 	}));

	// 	return menuGroups;
	// };

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
					className="px-5 py-4 flex flex-col gap-3">
					{CATEGORIES.map((category, index) => (
						<Category key={index} category={category} />
					))}
				</motion.div>

				{/* <motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="w-full flex flex-col">
					{menuGroups().map((group, index) => (
						<motion.div
							key={index}
							initial={{ x: -50, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							viewport={{ once: true }}
							transition={{
								type: "spring",
								bounce: 0.4,
								stiffness: 400,
								damping: 10,
								duration: 1,
								delay: index * 0.2,
							}}
							className="w-full flex flex-col gap-4 py-4">
							<h2 className="capitalize font-semibold text-lg text-neutral-950 px-5">
								{group.label}
							</h2>

							<div className="flex gap-2.5 overflow-auto hide-scroll px-5 py-1">
								{group.menu.map((item, index) => (
									<MenuItem key={index} item={item} />
								))}
							</div>
						</motion.div>
					))}
				</motion.div> */}
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
				"grow px-5 py-5 rounded-lg flex gap-3 items-center justify-center border border-neutral-800 bg-neutral-900 hover:bg-neutral-900/50"
			)}
			onClick={() => handleNavigate(category.url)}>
			<div className="h-8 w-8 flex items-center justify-center">
				<img src={category.image} alt="" width={48} height={48} />
			</div>

			<p className="font-semibold text-lg text-emerald-100">{category.label}</p>
		</motion.button>
	);
};

// const MenuItem = ({ item }: { item: MenuItemType }) => {
// 	function truncateString(input: string): string {
// 		const limit = 16;
// 		if (input.length > limit) {
// 			return input.substring(0, limit) + "...";
// 		}
// 		return input;
// 	}

// 	return (
// 		<MenuItemDetail item={item}>
// 			<motion.button
// 				whileHover={{ scale: 1.03 }}
// 				whileTap={{ scale: 0.9 }}
// 				transition={{ type: "spring", stiffness: 400, damping: 10 }}
// 				className="min-w-[180px] flex flex-col gap-3 border border-neutral-200 rounded-lg p-3 bg-white/80">
// 				<h3 className="font-medium text-sm text-neutral-800">
// 					{truncateString(item.item_name)}
// 				</h3>
// 				<p className="font-medium text-sm text-neutral-500">
// 					${item.item_amount}
// 				</p>
// 			</motion.button>
// 		</MenuItemDetail>
// 	);
// };
