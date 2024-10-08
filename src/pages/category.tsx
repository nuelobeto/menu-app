import { SubcategoryNavbar } from "@/components/common/subcategory-navbar";
import { AppLayout } from "@/components/layout.tsx/app-layout";
import { turnStringToLink } from "@/helpers";
import { cn } from "@/lib/utils";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { MenuItemDetail } from "@/components/common/menu-item-detail";
import useStore from "@/store/useStore";

export default function Category() {
	const { menu } = useStore();
	const params = useParams();
	const slug = params.slug;
	const category = menu.filter(
		(item) => turnStringToLink(item.item_category) === slug
	);
	const subCategoryHeadings = [
		...new Set(category.map((item) => item.item_subcategory)),
	];
	const subCategories = subCategoryHeadings.map((x) =>
		category.filter((y) => y.item_subcategory === x)
	);

	const links = subCategoryHeadings.map((item) => {
		return {
			label: item,
			url: turnStringToLink(item),
		};
	});

	return (
		<AppLayout goBack>
			<SubcategoryNavbar links={links} />

			{subCategories.map((subcategory, index) => (
				<motion.section
					key={index}
					id={turnStringToLink(subcategory[0].item_subcategory)}
					initial={{ y: -100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.2,
						type: "spring",
						stiffness: 400,
						damping: 10,
					}}
					className={cn("px-5 py-4 flex flex-col gap-3")}>
					<div className="p-2.5 flex items-center justify-center font-semibold text-base text-emerald-50 bg-neutral-900">
						{subcategory[0].item_subcategory}
					</div>

					<div className="flex flex-col gap-2.5">
						{subcategory.map((item, index) => (
							<MenuItemDetail key={index} item={item}>
								<motion.button
									whileTap={{ scale: 0.9 }}
									transition={{ type: "spring", stiffness: 400, damping: 17 }}
									className="p-4 rounded-lg border flex flex-col gap-2 border-neutral-700 bg-neutral-800 hover:bg-neutral-800/50">
									<div className="flex items-center justify-between w-full">
										<h2 className="font-medium text-sm text-emerald-50 text-left">
											{item.item_name}
										</h2>
										<p className="font-medium text-sm text-emerald-500">
											₦{item.item_amount}
										</p>
									</div>
									{item.item_description && (
										<p className="max-w-[300px] text-sm text-neutral-400 text-left">
											{item.item_description}
										</p>
									)}
								</motion.button>
							</MenuItemDetail>
						))}
					</div>
				</motion.section>
			))}
		</AppLayout>
	);
}
