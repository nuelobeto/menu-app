import { BASE_URL } from "@/config";
import axios from "axios";

const getMenu = async (menuId: string) => {
	const response = await axios.get(`${BASE_URL}id=${menuId}`);

	return response.data.data;
};

const menuServices = {
	getMenu,
};

export default menuServices;
