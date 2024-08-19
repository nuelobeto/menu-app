import { ROUTES } from "@/router/routes";
import { CategoryType, MenuItemType } from "@/types";

export const CATEGORIES: CategoryType[] = [
	{
		image: "/images/food.png",
		label: "food",
		className: "border-emerald-200 bg-emerald-50 hover:bg-emerald-100/90",
		url: ROUTES.category("food"),
	},
	{
		image: "/images/drink.png",
		label: "drinks",
		className: "border-neutral-200 bg-neutral-50 hover:bg-neutral-100",
		url: ROUTES.category("drinks"),
	},
];

export const MENU: MenuItemType[] = [
	{
		id: "e1dcd4e6-09e6-4d46-9d86-5f29f02f0744",
		item_name: "Classic Cheeseburger",
		item_amount: "8.99",
		item_category: "Main Course",
		item_subcategory: "Burgers",
		item_description:
			"A juicy beef patty with melted cheese, lettuce, and tomato on a toasted bun.",
		tag: "popular",
	},
	{
		id: "a5b2a73e-d8b7-4c9e-b9a0-1d1e7e024f43",
		item_name: "Margherita Pizza",
		item_amount: "10.50",
		item_category: "Main Course",
		item_subcategory: "Pizzas",
		item_description:
			"Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.",
		tag: "popular",
	},
	{
		id: "d8a6e4c0-fdf5-4e4b-99e1-bb2c2a5b1e2d",
		item_name: "Spaghetti Bolognese",
		item_amount: "12.00",
		item_category: "Main Course",
		item_subcategory: "Pasta",
		item_description: "Spaghetti pasta with a rich and savory meat sauce.",
		tag: "popular",
	},
	{
		id: "d59e2e1a-5e8e-4e7f-bc57-62e09b8e2c56",
		item_name: "Caesar Salad",
		item_amount: "7.50",
		item_category: "Salad",
		item_subcategory: "Salads",
		item_description:
			"Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
		tag: "popular",
	},
	{
		id: "edcb3f7e-c0d4-4b57-9e7d-3f02eecf5e44",
		item_name: "Grilled Chicken Sandwich",
		item_amount: "9.25",
		item_category: "Main Course",
		item_subcategory: "Sandwiches",
		item_description:
			"Grilled chicken breast with lettuce, tomato, and mayo on a toasted bun.",
		tag: "popular",
	},
	{
		id: "f2b849d5-ef7d-4df4-9517-f4b5a8f99d9e",
		item_name: "Buffalo Wings",
		item_amount: "11.00",
		item_category: "Appetizer",
		item_subcategory: "Wings",
		item_description:
			"Spicy and crispy chicken wings served with ranch or blue cheese dressing.",
		tag: "popular",
	},
	{
		id: "ce0fd8f2-40cf-4bb3-8e7b-12d5b64609d6",
		item_name: "Lobster Risotto",
		item_amount: "24.99",
		item_category: "Specialty",
		item_subcategory: "Seafood",
		item_description:
			"Creamy risotto with tender lobster meat and a hint of saffron.",
		tag: "chef's special",
	},
	{
		id: "cde5c383-d530-4edc-99d4-9dcfe3dce691",
		item_name: "Truffle Mushroom Pasta",
		item_amount: "19.50",
		item_category: "Specialty",
		item_subcategory: "Pasta",
		item_description: "Pasta with a rich truffle and mushroom sauce.",
		tag: "chef's special",
	},
	{
		id: "e4b2c8b3-dc12-4c4d-9a66-6d9a81fa7683",
		item_name: "Pan-Seared Salmon",
		item_amount: "22.00",
		item_category: "Specialty",
		item_subcategory: "Seafood",
		item_description:
			"Salmon fillet pan-seared to perfection with a side of seasonal vegetables.",
		tag: "chef's special",
	},
	{
		id: "59cf8319-e2b0-4dc0-9d47-6a2e2d2c708e",
		item_name: "Filet Mignon",
		item_amount: "29.99",
		item_category: "Specialty",
		item_subcategory: "Steak",
		item_description:
			"Tender filet mignon steak served with a choice of sides.",
		tag: "chef's special",
	},
	{
		id: "eb71e8d1-7a08-4cf4-9ae7-9dbe0d1a9d2e",
		item_name: "Duck Confit",
		item_amount: "26.50",
		item_category: "Specialty",
		item_subcategory: "Poultry",
		item_description:
			"Slow-cooked duck leg served with a rich, flavorful sauce.",
		tag: "chef's special",
	},
	{
		id: "be5b4c1e-4a55-4fd3-90d6-f2e5e8f0e65a",
		item_name: "Rack of Lamb",
		item_amount: "28.75",
		item_category: "Specialty",
		item_subcategory: "Lamb",
		item_description: "Roasted rack of lamb with a herb crust and mint jelly.",
		tag: "chef's special",
	},
	{
		id: "b1a5a04b-8f89-4c38-94a4-6f4b90d5f3a2",
		item_name: "Beef Wellington",
		item_amount: "32.00",
		item_category: "Top Rated",
		item_subcategory: "Beef",
		item_description:
			"A classic Beef Wellington with a rich mushroom duxelles and prosciutto.",
		tag: "top rated",
	},
	{
		id: "cf7cbb2e-5864-4d02-8d4a-d5a4b97e908d",
		item_name: "Coq au Vin",
		item_amount: "27.50",
		item_category: "Top Rated",
		item_subcategory: "Chicken",
		item_description:
			"Chicken braised in red wine with mushrooms, onions, and bacon.",
		tag: "top rated",
	},
	{
		id: "4a1dcb5d-f9af-4b68-8319-dc4a1c68c2a7",
		item_name: "Shrimp Scampi",
		item_amount: "21.00",
		item_category: "Top Rated",
		item_subcategory: "Seafood",
		item_description:
			"Shrimp sautéed in garlic butter with a hint of lemon and served over pasta.",
		tag: "top rated",
	},
	{
		id: "7d8c273e-fb55-4a64-9d52-65f8a22c9a36",
		item_name: "Lamb Shank",
		item_amount: "29.00",
		item_category: "Top Rated",
		item_subcategory: "Lamb",
		item_description:
			"Braised lamb shank served with root vegetables and a rich sauce.",
		tag: "top rated",
	},
	{
		id: "a2b7a9be-bf4e-4f2c-8b3d-5a8e1c1a8d93",
		item_name: "Seafood Paella",
		item_amount: "25.99",
		item_category: "Top Rated",
		item_subcategory: "Seafood",
		item_description:
			"A flavorful paella with a variety of seafood and saffron rice.",
		tag: "top rated",
	},
	{
		id: "9b8f4d4d-b658-4b1b-b2a0-f1a4f49b3e8a",
		item_name: "Peking Duck",
		item_amount: "31.50",
		item_category: "Top Rated",
		item_subcategory: "Duck",
		item_description:
			"Crispy Peking duck served with hoisin sauce and pancakes.",
		tag: "top rated",
	},
	{
		id: "f4b2c8d7-e4d6-4d1d-bb10-85c13f49f78a",
		item_name: "Korean BBQ Tacos",
		item_amount: "12.99",
		item_category: "New Arrival",
		item_subcategory: "Tacos",
		item_description:
			"Tacos filled with Korean BBQ beef, pickled vegetables, and a spicy sauce.",
		tag: "new arrivals",
	},
	{
		id: "b93a1d7b-c9b4-4b91-a7d0-3b6a99c7e6f4",
		item_name: "Avocado and Tuna Tartare",
		item_amount: "14.50",
		item_category: "New Arrival",
		item_subcategory: "Appetizer",
		item_description:
			"Fresh tuna tartare mixed with avocado and served with a citrus dressing.",
		tag: "new arrivals",
	},
	{
		id: "a2b5d4c1-f8ae-4e7c-a5b7-0a1f9d3a7b0e",
		item_name: "Spicy Szechuan Noodles",
		item_amount: "11.75",
		item_category: "New Arrival",
		item_subcategory: "Noodles",
		item_description:
			"Noodles in a spicy Szechuan sauce with vegetables and meat.",
		tag: "new arrivals",
	},
	{
		id: "e1a7d0f2-6e72-4b44-9f23-3a62e489f1e1",
		item_name: "Mango Chicken Salad",
		item_amount: "13.00",
		item_category: "New Arrival",
		item_subcategory: "Salad",
		item_description:
			"A refreshing salad with mango, grilled chicken, and a tangy dressing.",
		tag: "new arrivals",
	},
	{
		id: "a5d4c9c0-8c6a-4c2b-b8a0-dbc9c1eae0d7",
		item_name: "Charred Brussels Sprouts with Bacon",
		item_amount: "10.25",
		item_category: "New Arrival",
		item_subcategory: "Vegetable",
		item_description:
			"Brussels sprouts charred to perfection and tossed with crispy bacon.",
		tag: "new arrivals",
	},
	{
		id: "0d7f8c5e-7e62-4c4d-9a85-8b6f3d2a4f2a",
		item_name: "Berry Cheesecake",
		item_amount: "9.99",
		item_category: "New Arrival",
		item_subcategory: "Dessert",
		item_description: "Creamy cheesecake topped with a mix of fresh berries.",
		tag: "new arrivals",
	},
];
