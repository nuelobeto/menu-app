import { SubcategoryNavbar } from "@/components/common/subcategory-navbar";
import { AppLayout } from "@/components/layout.tsx/app-layout";
import { useParams } from "react-router-dom";

export default function Category() {
	const params = useParams();
	const slug = params.slug;
	let title: string;

	if (slug === "food") {
		title = "Food";
	} else if (slug === "drinks") {
		title = "Drinks";
	} else {
		title = "Food";
	}

	return (
		<AppLayout goBack title={title}>
			<SubcategoryNavbar />

			<section className="px-5 py-4">
				<div className="h-[500px] bg-black"></div>
			</section>

			<section className="px-5 py-4">
				<div className="h-[500px] bg-black"></div>
			</section>
		</AppLayout>
	);
}
