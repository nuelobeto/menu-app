export type CategoryType = {
	label: string;
	url: string;
};

export type MenuGroupType = {
	label: string;
	menu: MenuItemType[];
};

export type MenuItemType = {
	id: string;
	item_amount: string;
	item_category: string;
	item_description: string;
	item_name: string;
	item_subcategory: string;
	tag?: MenuItemTagType;
};

export type MenuItemTagType =
	| "popular"
	| "chef's special"
	| "top rated"
	| "new arrivals";
