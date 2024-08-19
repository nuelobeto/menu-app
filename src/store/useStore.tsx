import { create } from "zustand";

type StoreState = {
	activeLink: string;
	setActiveLink: (link: string) => void;
	query: string;
	setQuery: (query: string) => void;
};

const useStore = create<StoreState>((set) => ({
	activeLink: "",
	query: "",

	setActiveLink: (link) => {
		set({ activeLink: link });
	},
	setQuery: (query) => {
		set({ query });
	},
}));

export default useStore;
