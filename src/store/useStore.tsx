/* eslint-disable @typescript-eslint/no-explicit-any */
import { capitalizeFirstLetter } from "@/helpers";
import menuServices from "@/services/menuServices";
import { MenuItemType } from "@/types";
import { create } from "zustand";

type StoreState = {
	activeHash: string;
	setActiveHash: (link: string) => void;
	query: string;
	setQuery: (query: string) => void;
	menu: MenuItemType[];
	menu_details: any;
	getMenu: (menuId: string) => void;
	loading: boolean;
};

const useStore = create<StoreState>((set) => ({
	activeHash: "",
	query: "",
	menu: [],
	loading: false,
	menu_details: null,

	setActiveHash: (link) => {
		set({ activeHash: link });
	},
	setQuery: (query) => {
		set({ query });
	},

	getMenu: async (menuId: string) => {
		set((state) => ({ loading: (state.loading = true) }));
		try {
			const menu = await menuServices.getMenu(menuId);
			const clean_menu = menu.menu_items.map((item: MenuItemType) => {
				return {
					id: item.id,
					item_amount: item.item_amount,
					item_category: capitalizeFirstLetter(item.item_category),
					item_description: item.item_description,
					item_name: item.item_name,
					item_subcategory: capitalizeFirstLetter(item.item_subcategory),
				};
			});
			set((state) => ({ menu_details: (state.menu_details = menu) }));
			set((state) => ({ menu: (state.menu = clean_menu) }));
			set((state) => ({ loading: (state.loading = false) }));
		} catch (error) {
			set((state) => ({ loading: (state.loading = false) }));
			console.log(error);
		}
	},
}));

export default useStore;
