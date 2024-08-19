import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import Home from "@/pages/home";
import Category from "@/pages/category";

export default function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path={ROUTES.category(":slug")} element={<Category />} />
		</Routes>
	);
}
