import { AppLayout } from "@/components/layout.tsx/app-layout";
import { CATEGORIES, MENU } from "@/constants";
import { cn } from "@/lib/utils";
import { CategoryType, MenuGroupType, MenuItemType } from "@/types";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function isDefined<T>(value: T | undefined): value is T {
	return value !== undefined;
}

export default function Home() {
	const menuGroups = (): MenuGroupType[] => {
		const tags = Array.from(new Set(MENU.map((m) => m.tag))).filter(isDefined);

		const menuGroups: MenuGroupType[] = tags.map((tag) => ({
			label: tag,
			menu: MENU.filter((item) => item.tag === tag),
		}));

		return menuGroups;
	};

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

	return (
		<AppLayout>
			<section className="w-full flex flex-col gap-3">
				<motion.div
					variants={container}
					initial="hidden"
					animate="visible"
					className="px-5 py-4 flex gap-3">
					{CATEGORIES.map((category, index) => (
						<Category key={index} category={category} />
					))}
				</motion.div>

				<motion.div
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

							<div className="flex gap-2.5 overflow-auto hide-scroll px-5">
								{group.menu.map((item, index) => (
									<MenuItem key={index} item={item} />
								))}
							</div>
						</motion.div>
					))}
				</motion.div>
			</section>
		</AppLayout>
	);
}

const Category = ({ category }: { category: CategoryType }) => {
	const navigate = useNavigate();

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
				"grow px-5 py-3 rounded-lg flex flex-col gap-1.5 items-center justify-center border",
				category.className
			)}
			onClick={() => navigate(category.url)}>
			<div className="h-12 w-12 flex items-center justify-center">
				<img src={category.image} alt="" width={48} height={48} />
			</div>

			<p className="font-semibold text-xs text-neutral-800">{category.label}</p>
		</motion.button>
	);
};

const MenuItem = ({ item }: { item: MenuItemType }) => {
	function truncateString(input: string): string {
		const limit = 16;
		if (input.length > limit) {
			return input.substring(0, limit) + "...";
		}
		return input;
	}

	return (
		<motion.button
			whileHover={{ scale: 1.03 }}
			whileTap={{ scale: 0.9 }}
			transition={{ type: "spring", stiffness: 400, damping: 10 }}
			className="min-w-[180px] flex flex-col gap-3 border border-neutral-200 rounded-lg p-3">
			<h3 className="font-medium text-sm text-neutral-800">
				{truncateString(item.item_name)}
			</h3>
			<p className="font-medium text-sm text-neutral-500">{item.item_amount}</p>
		</motion.button>
	);
};
