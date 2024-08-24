import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "./routes";
import Home from "@/pages/home";
import Category from "@/pages/category";
import { useEffect } from "react";
import useStore from "@/store/useStore";
import { PageLoader } from "@/components/common/page-loader";

export default function AppRouter() {
	const { menu, getMenu, loading } = useStore();
	const location = useLocation();
	const menuId = new URLSearchParams(location.search).get("id");
	const savedId: string | null = localStorage.getItem("menu_id");
	const parsedMenuId: string | undefined = savedId
		? JSON.parse(savedId)
		: undefined;

	useEffect(() => {
		if (menuId) {
			localStorage.setItem("menu_id", JSON.stringify(menuId));
		}
	}, [menuId]);

	useEffect(() => {
		if (menu.length === 0) {
			if (menuId) {
				getMenu(menuId);
			}
			if (parsedMenuId) {
				getMenu(parsedMenuId);
			}
		}
	}, [menu, menuId, parsedMenuId, getMenu]);

	if (loading) {
		return <PageLoader />;
	}

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path={ROUTES.category(":slug")} element={<Category />} />
		</Routes>
	);
}
