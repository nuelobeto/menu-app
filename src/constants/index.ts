import { ROUTES } from "@/router/routes";
import { CategoryType, MenuItemType } from "@/types";

export const CATEGORIES: CategoryType[] = [
	{
		image: "/images/food.png",
		label: "Food",
		className: "border-emerald-200 bg-emerald-50 hover:bg-emerald-100/90",
		url: ROUTES.category("Food"),
	},
	{
		image: "/images/drink.png",
		label: "Drinks",
		className: "border-neutral-200 bg-neutral-50 hover:bg-neutral-100",
		url: ROUTES.category("Drink"),
	},
];

export const MENU: MenuItemType[] = [
	// Food - Burgers Subcategory
	{
		id: "e1dcd4e6-09e6-4d46-9d86-5f29f02f0744",
		item_name: "Classic Cheeseburger",
		item_amount: "8.99",
		item_category: "food",
		item_subcategory: "Burgers",
		item_description:
			"A juicy beef patty with melted cheese, lettuce, and tomato on a toasted bun.",
		tag: "popular",
	},
	{
		id: "b2c3e7d4-8f2a-4e1f-a8c9-1d3e7e024f01",
		item_name: "Bacon Cheeseburger",
		item_amount: "9.99",
		item_category: "food",
		item_subcategory: "Burgers",
		item_description:
			"A savory cheeseburger topped with crispy bacon and barbecue sauce.",
		tag: "chef's special",
	},
	{
		id: "a5b2a73e-d8b7-4c9e-b9a0-1d1e7e024f43",
		item_name: "Veggie Burger",
		item_amount: "7.99",
		item_category: "food",
		item_subcategory: "Burgers",
		item_description:
			"A plant-based burger with lettuce, tomato, and avocado on a whole-grain bun.",
	},
	{
		id: "d8a6e4c0-fdf5-4e4b-99e1-bb2c2a5b1e2d",
		item_name: "Mushroom Swiss Burger",
		item_amount: "9.50",
		item_category: "food",
		item_subcategory: "Burgers",
		item_description:
			"A burger topped with sautéed mushrooms and melted Swiss cheese.",
	},
	{
		id: "d59e2e1a-5e8e-4e7f-bc57-62e09b8e2c56",
		item_name: "BBQ Burger",
		item_amount: "10.00",
		item_category: "food",
		item_subcategory: "Burgers",
		item_description:
			"A tangy barbecue burger with onion rings and cheddar cheese.",
	},
	{
		id: "edcb3f7e-c0d4-4b57-9e7d-3f02eecf5e44",
		item_name: "Spicy Jalapeno Burger",
		item_amount: "8.75",
		item_category: "food",
		item_subcategory: "Burgers",
		item_description:
			"A spicy burger with jalapenos, pepper jack cheese, and chipotle mayo.",
	},
	// Food - Pizzas Subcategory
	{
		id: "f2b849d5-ef7d-4df4-9517-f4b5a8f99d9e",
		item_name: "Margherita Pizza",
		item_amount: "10.50",
		item_category: "food",
		item_subcategory: "Pizzas",
		item_description:
			"Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.",
		tag: "popular",
	},
	{
		id: "c4d8a17c-e3cb-4763-8e25-b1fbe8e935d7",
		item_name: "Pepperoni Pizza",
		item_amount: "11.00",
		item_category: "food",
		item_subcategory: "Pizzas",
		item_description: "A classic pizza topped with spicy pepperoni slices.",
	},
	{
		id: "b2e1a891-c4f7-4b8e-b3a2-858ff7feda98",
		item_name: "BBQ Chicken Pizza",
		item_amount: "12.00",
		item_category: "food",
		item_subcategory: "Pizzas",
		item_description:
			"A pizza topped with BBQ chicken, red onions, and cilantro.",
	},
	{
		id: "d1a0c8a6-5b5a-4e5a-96df-0e2e9c3d86a8",
		item_name: "Hawaiian Pizza",
		item_amount: "10.50",
		item_category: "food",
		item_subcategory: "Pizzas",
		item_description: "A pizza with ham, pineapple, and mozzarella cheese.",
	},
	{
		id: "f3b2e7d4-23c8-4bb7-936d-c47e6d788f62",
		item_name: "Four Cheese Pizza",
		item_amount: "11.50",
		item_category: "food",
		item_subcategory: "Pizzas",
		item_description:
			"A pizza topped with a blend of mozzarella, cheddar, Parmesan, and gorgonzola cheese.",
	},
	{
		id: "e4d1f2a9-89d1-4b3a-b8e6-f9e8d2b7a1f4",
		item_name: "Vegetarian Pizza",
		item_amount: "9.75",
		item_category: "food",
		item_subcategory: "Pizzas",
		item_description:
			"A pizza topped with fresh vegetables, including bell peppers, onions, and olives.",
	},
	// Food - Pasta Subcategory
	{
		id: "a2b9f4d7-6a1e-4d2b-8c1f-3e9d2b5e1d4f",
		item_name: "Spaghetti Bolognese",
		item_amount: "12.00",
		item_category: "food",
		item_subcategory: "Pasta",
		item_description: "Spaghetti pasta with a rich and savory meat sauce.",
		tag: "chef's special",
	},
	{
		id: "b3c9e1a2-2d9b-4c8e-a8e1-d2c8e1f9d6a7",
		item_name: "Fettuccine Alfredo",
		item_amount: "13.50",
		item_category: "food",
		item_subcategory: "Pasta",
		item_description: "Creamy Alfredo sauce over fettuccine pasta.",
		tag: "popular",
	},
	{
		id: "c2d3e7f4-8f5a-4e8f-b1c9-1d3e7d024f09",
		item_name: "Lasagna",
		item_amount: "14.00",
		item_category: "food",
		item_subcategory: "Pasta",
		item_description:
			"Layers of pasta, ricotta cheese, and meat sauce, baked to perfection.",
		tag: "chef's special",
	},
	{
		id: "d5b2a72f-d9c7-4c9e-b9f0-2d2e7e024f12",
		item_name: "Penne Arrabbiata",
		item_amount: "11.50",
		item_category: "food",
		item_subcategory: "Pasta",
		item_description: "Spicy tomato sauce over penne pasta.",
	},
	{
		id: "e6a6e4d1-f8e5-4e5b-99c1-bb2e2a5b1d3c",
		item_name: "Carbonara",
		item_amount: "12.75",
		item_category: "food",
		item_subcategory: "Pasta",
		item_description: "Pasta with a creamy sauce, bacon, and Parmesan cheese.",
	},
	{
		id: "f9d9e1b5-7c5e-4e8f-98d3-1b3e7f024e5b",
		item_name: "Pesto Pasta",
		item_amount: "11.25",
		item_category: "food",
		item_subcategory: "Pasta",
		item_description: "Pasta with fresh basil pesto and Parmesan cheese.",
	},
	// Food - Salads Subcategory
	{
		id: "a2d1f2b7-8b1d-4b3f-b8e7-f9e8d2b7c1f3",
		item_name: "Caesar Salad",
		item_amount: "7.50",
		item_category: "food",
		item_subcategory: "Salads",
		item_description:
			"Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
		tag: "top rated",
	},
	{
		id: "b4c7e9f3-3d8e-4b7f-a8e2-d4c8e1f9b6a9",
		item_name: "Greek Salad",
		item_amount: "8.00",
		item_category: "food",
		item_subcategory: "Salads",
		item_description:
			"A fresh salad with cucumbers, tomatoes, olives, feta cheese, and Greek dressing.",
	},
	{
		id: "c3b1e2f8-8f4a-4e7f-b1c9-1e3d7e025f07",
		item_name: "Cobb Salad",
		item_amount: "9.00",
		item_category: "food",
		item_subcategory: "Salads",
		item_description:
			"A hearty salad with chicken, bacon, eggs, avocado, and blue cheese.",
	},
	{
		id: "d7b5e3c9-d2e8-4b6f-a9c8-2c3e7f025e1a",
		item_name: "Caprese Salad",
		item_amount: "7.75",
		item_category: "food",
		item_subcategory: "Salads",
		item_description:
			"Tomatoes, mozzarella, and basil drizzled with balsamic glaze.",
	},
	{
		id: "e8a2f3b6-6f8d-4b7f-99e1-cd2e1a7e1c3f",
		item_name: "Taco Salad",
		item_amount: "8.50",
		item_category: "food",
		item_subcategory: "Salads",
		item_description:
			"A salad with seasoned beef, lettuce, cheese, and salsa, served in a tortilla bowl.",
	},
	{
		id: "f7b3e1d9-2b7d-4e9f-98c1-d3e2f9b5a2c6",
		item_name: "Spinach Salad",
		item_amount: "7.25",
		item_category: "food",
		item_subcategory: "Salads",
		item_description:
			"A fresh spinach salad with strawberries, almonds, and a poppy seed dressing.",
	},
	// Food - Sandwiches Subcategory
	{
		id: "a1c3f4e7-2d9f-4e8b-99f2-cd2f7a1c9e3a",
		item_name: "Grilled Chicken Sandwich",
		item_amount: "9.25",
		item_category: "food",
		item_subcategory: "Sandwiches",
		item_description:
			"Grilled chicken breast with lettuce, tomato, and mayo on a toasted bun.",
		tag: "new arrivals",
	},
	{
		id: "b5d9f2e8-8b4c-4e9a-a7d3-2c3e9f2b7a4b",
		item_name: "BLT Sandwich",
		item_amount: "8.75",
		item_category: "food",
		item_subcategory: "Sandwiches",
		item_description:
			"A classic bacon, lettuce, and tomato sandwich on toasted bread.",
	},
	{
		id: "c6a2e3f1-d9c6-4e8f-99c2-d2c9e7f1a7e3",
		item_name: "Club Sandwich",
		item_amount: "10.00",
		item_category: "food",
		item_subcategory: "Sandwiches",
		item_description:
			"A triple-layer sandwich with turkey, bacon, lettuce, tomato, and mayo.",
	},
	{
		id: "d8b7e4c3-7c9f-4e7f-9f2a-1b3f9e2c7a5e",
		item_name: "Tuna Salad Sandwich",
		item_amount: "8.50",
		item_category: "food",
		item_subcategory: "Sandwiches",
		item_description:
			"Tuna salad with lettuce and tomato on whole-grain bread.",
	},
	{
		id: "e2c3f1d8-4b9f-4e7b-98e3-b2e7d9f2c6a7",
		item_name: "Reuben Sandwich",
		item_amount: "9.75",
		item_category: "food",
		item_subcategory: "Sandwiches",
		item_description:
			"Corned beef, Swiss cheese, sauerkraut, and Russian dressing on rye bread.",
	},
	{
		id: "f9d8e2a7-2b9d-4e8f-97c2-cd2a7e1f9b4e",
		item_name: "Philly Cheesesteak",
		item_amount: "11.00",
		item_category: "food",
		item_subcategory: "Sandwiches",
		item_description:
			"Sliced steak, onions, peppers, and melted cheese on a hoagie roll.",
		tag: "chef's special",
	},
	// Food - Wings Subcategory
	{
		id: "a4b9d1e8-2c6d-4b7f-98c2-d3e8f2b7a4d2",
		item_name: "Buffalo Wings",
		item_amount: "11.00",
		item_category: "food",
		item_subcategory: "Wings",
		item_description:
			"Spicy and crispy chicken wings served with ranch or blue cheese dressing.",
		tag: "popular",
	},
	{
		id: "b7e9d1f4-8b9d-4e7f-a8c3-2c9e2f1a7b8d",
		item_name: "Honey BBQ Wings",
		item_amount: "11.50",
		item_category: "food",
		item_subcategory: "Wings",
		item_description:
			"Sweet and tangy honey BBQ wings served with a side of celery sticks.",
	},
	{
		id: "c8f1d3e7-6b9f-4e7f-98c1-d3f9e1a7b5c6",
		item_name: "Garlic Parmesan Wings",
		item_amount: "12.00",
		item_category: "food",
		item_subcategory: "Wings",
		item_description:
			"Wings tossed in a garlic Parmesan sauce and served with ranch dressing.",
	},
	{
		id: "d9e7f2c3-3b8d-4e9f-99c2-d2e7f1a9b5a1",
		item_name: "Teriyaki Wings",
		item_amount: "11.75",
		item_category: "food",
		item_subcategory: "Wings",
		item_description: "Wings glazed with a sweet and savory teriyaki sauce.",
	},
	{
		id: "e6f9d2c3-2d8e-4e9f-a8c3-2c9f1e7b9d8c",
		item_name: "Lemon Pepper Wings",
		item_amount: "10.75",
		item_category: "food",
		item_subcategory: "Wings",
		item_description: "Wings seasoned with zesty lemon pepper.",
	},
	{
		id: "f7e2b1d9-4b8f-4e9f-97e3-cd2a9f2b8c7a",
		item_name: "Buffalo Cauliflower Wings",
		item_amount: "9.50",
		item_category: "food",
		item_subcategory: "Wings",
		item_description:
			"Crispy cauliflower bites tossed in buffalo sauce, served with ranch.",
	},
	// Drink Category - Smoothies Subcategory
	{
		id: "a2f3b1d9-4b8f-4e9f-97e3-cd2a9f2b8c7a",
		item_name: "Mango Smoothie",
		item_amount: "5.99",
		item_category: "drinks",
		item_subcategory: "Smoothies",
		item_description:
			"A refreshing smoothie made with ripe mangoes and yogurt.",
		tag: "new arrivals",
	},
	{
		id: "b3d7e4c3-7c9f-4e7f-9f2a-1b3f9e2c7a5e",
		item_name: "Berry Blast Smoothie",
		item_amount: "6.50",
		item_category: "drinks",
		item_subcategory: "Smoothies",
		item_description:
			"A smoothie made with a mix of strawberries, blueberries, and raspberries.",
	},
	{
		id: "c6a2e3f1-d9c6-4e8f-99c2-d2c9e7f1a7e3",
		item_name: "Green Detox Smoothie",
		item_amount: "6.99",
		item_category: "drinks",
		item_subcategory: "Smoothies",
		item_description:
			"A smoothie made with spinach, kale, green apple, and lemon.",
	},
	{
		id: "d7b5e3c9-d2e8-4b6f-a9c8-2c3e7f025e1a",
		item_name: "Tropical Smoothie",
		item_amount: "6.25",
		item_category: "drinks",
		item_subcategory: "Smoothies",
		item_description: "A tropical blend of pineapple, coconut, and banana.",
	},
	{
		id: "e8a2f3b6-6f8d-4b7f-99e1-cd2e1a7e1c3f",
		item_name: "Chocolate Peanut Butter Smoothie",
		item_amount: "6.75",
		item_category: "drinks",
		item_subcategory: "Smoothies",
		item_description:
			"A rich and creamy smoothie made with chocolate, peanut butter, and banana.",
	},
	{
		id: "f7b3e1d9-2b7d-4e9f-98c1-d3e2f9b5a2c6",
		item_name: "Avocado Smoothie",
		item_amount: "6.50",
		item_category: "drinks",
		item_subcategory: "Smoothies",
		item_description: "A creamy avocado smoothie with a touch of honey.",
	},
	{
		id: "b1c2d3e4-f5g6-h7i8-j9k0-l1m2n3o4p5q6",
		item_name: "Berry Blast Smoothie",
		item_amount: "6.50",
		item_category: "drinks",
		item_subcategory: "Smoothies",
		item_description:
			"A smoothie made with a mix of strawberries, blueberries, and raspberries.",
	},
	{
		id: "c1d2e3f4-g5h6-i7j8-k9l0-m1n2o3p4q5r6",
		item_name: "Green Detox Smoothie",
		item_amount: "6.99",
		item_category: "drinks",
		item_subcategory: "Smoothies",
		item_description:
			"A smoothie made with spinach, kale, green apple, and lemon.",
	},
	{
		id: "d1e2f3g4-h5i6-j7k8-l9m0-n1o2p3q4r5s6",
		item_name: "Tropical Smoothie",
		item_amount: "6.25",
		item_category: "drinks",
		item_subcategory: "Smoothies",
		item_description: "A tropical blend of pineapple, coconut, and banana.",
	},
	{
		id: "e1f2g3h4-i5j6-k7l8-m9n0-o1p2q3r4s5t6",
		item_name: "Chocolate Peanut Butter Smoothie",
		item_amount: "6.75",
		item_category: "drinks",
		item_subcategory: "Smoothies",
		item_description:
			"A rich and creamy smoothie made with chocolate, peanut butter, and banana.",
	},
	{
		id: "f1g2h3i4-j5k6-l7m8-n9o0-p1q2r3s4t5u6",
		item_name: "Avocado Smoothie",
		item_amount: "6.50",
		item_category: "drinks",
		item_subcategory: "Smoothies",
		item_description: "A creamy avocado smoothie with a touch of honey.",
	},

	// Drink - Juices Subcategory
	{
		id: "a2b3c4d5-e6f7-g8h9-i0j-k1l2m3n4o5p6",
		item_name: "Orange Juice",
		item_amount: "4.50",
		item_category: "drinks",
		item_subcategory: "Juices",
		item_description: "Freshly squeezed orange juice with a tangy flavor.",
	},
	{
		id: "b2c3d4e5-f6g7-h8i9-j0k-l1m2n3o4p5q6",
		item_name: "Apple Juice",
		item_amount: "4.00",
		item_category: "drinks",
		item_subcategory: "Juices",
		item_description: "Refreshing apple juice made from 100% apples.",
	},
	{
		id: "c2d3e4f5-g6h7-i8j9-k0l-m1n2o3p4q5r6",
		item_name: "Carrot Juice",
		item_amount: "4.75",
		item_category: "drinks",
		item_subcategory: "Juices",
		item_description: "Sweet and healthy carrot juice, rich in vitamins.",
	},
	{
		id: "d2e3f4g5-h6i7-j8k9-l0m-n1o2p3q4r5s6",
		item_name: "Pineapple Juice",
		item_amount: "5.00",
		item_category: "drinks",
		item_subcategory: "Juices",
		item_description: "Tropical pineapple juice with a hint of sweetness.",
	},
	{
		id: "e2f3g4h5-i6j7-k8l9-m0n-o1p2q3r4s5t6",
		item_name: "Grapefruit Juice",
		item_amount: "5.25",
		item_category: "drinks",
		item_subcategory: "Juices",
		item_description: "Bitter-sweet grapefruit juice with a refreshing taste.",
	},
	{
		id: "f2g3h4i5-j6k7-l8m9-n0o-p1q2r3s4t5u6",
		item_name: "Mixed Berry Juice",
		item_amount: "5.50",
		item_category: "drinks",
		item_subcategory: "Juices",
		item_description: "Juice made from a blend of various berries.",
	},

	// Drink - Teas Subcategory
	{
		id: "a3b4c5d6-e7f8-g9h0-i1j-k2l3m4n5o6p",
		item_name: "Green Tea",
		item_amount: "3.50",
		item_category: "drinks",
		item_subcategory: "Teas",
		item_description: "Freshly brewed green tea with a mild flavor.",
	},
	{
		id: "b3c4d5e6-f7g8-h9i0-j1k-l2m3n4o5p6q",
		item_name: "Black Tea",
		item_amount: "3.75",
		item_category: "drinks",
		item_subcategory: "Teas",
		item_description: "Strong and robust black tea with a full-bodied flavor.",
	},
	{
		id: "c3d4e5f6-g7h8-i9j0-k1l-m2n3o4p5q6r",
		item_name: "Chamomile Tea",
		item_amount: "4.00",
		item_category: "drinks",
		item_subcategory: "Teas",
		item_description: "Calming chamomile tea with a floral aroma.",
	},
	{
		id: "d3e4f5g6-h7i8-j9k0-l1m-n2o3p4q5r6s",
		item_name: "Peppermint Tea",
		item_amount: "4.25",
		item_category: "drinks",
		item_subcategory: "Teas",
		item_description: "Refreshing peppermint tea with a cool, minty taste.",
	},
	{
		id: "e3f4g5h6-i7j8-k9l0-m1n-o2p3q4r5s6t",
		item_name: "Earl Grey Tea",
		item_amount: "4.50",
		item_category: "drinks",
		item_subcategory: "Teas",
		item_description: "Black tea flavored with bergamot orange.",
	},
	{
		id: "f3g4h5i6-j7k8-l9m0-n1o-p2q3r4s5t6u",
		item_name: "Jasmine Tea",
		item_amount: "4.75",
		item_category: "drinks",
		item_subcategory: "Teas",
		item_description: "Fragrant jasmine tea with a delicate taste.",
		tag: "chef's special",
	},

	// Drink - Coffees Subcategory
	{
		id: "a4b5c6d7-e8f9-g0h1-i2j-k3l4m5n6o7p",
		item_name: "Espresso",
		item_amount: "3.00",
		item_category: "drinks",
		item_subcategory: "Coffees",
		item_description: "Strong and bold espresso shot.",
		tag: "popular",
	},
	{
		id: "b4c5d6e7-f8g9-h0i1-j2k-l3m4n5o6p7q",
		item_name: "Americano",
		item_amount: "3.50",
		item_category: "drinks",
		item_subcategory: "Coffees",
		item_description: "Espresso diluted with hot water.",
		tag: "top rated",
	},
	{
		id: "c4d5e6f7-g8h9-i0j1-k2l-m3n4o5p6q7r",
		item_name: "Latte",
		item_amount: "4.00",
		item_category: "drinks",
		item_subcategory: "Coffees",
		item_description: "Espresso with steamed milk and a touch of foam.",
	},
	{
		id: "d4e5f6g7-h8i9-j0k1-l2m-n3o4p5q6r7s",
		item_name: "Cappuccino",
		item_amount: "4.25",
		item_category: "drinks",
		item_subcategory: "Coffees",
		item_description: "Espresso with equal parts steamed milk and foam.",
		tag: "top rated",
	},
	{
		id: "e4f5g6h7-i8j9-k0l1-m2n-o3p4q5r6s7t",
		item_name: "Mocha",
		item_amount: "4.50",
		item_category: "drinks",
		item_subcategory: "Coffees",
		item_description: "Espresso with chocolate syrup and steamed milk.",
	},
	{
		id: "f4g5h6i7-j8k9-l0m1-n2o-p3q4r5s6t7u",
		item_name: "Macchiato",
		item_amount: "4.75",
		item_category: "drinks",
		item_subcategory: "Coffees",
		item_description: "Espresso with a small amount of foam on top.",
	},

	// Drink - Cocktails Subcategory
	{
		id: "a5b6c7d8-e9f0-g1h2-i3j-k4l5m6n7o8p",
		item_name: "Mojito",
		item_amount: "7.00",
		item_category: "drinks",
		item_subcategory: "Cocktails",
		item_description:
			"Refreshing cocktail made with rum, mint, lime, and soda water.",
		tag: "top rated",
	},
	{
		id: "b5c6d7e8-f9g0-h1i2-j3k-l4m5n6o7p8q",
		item_name: "Margarita",
		item_amount: "7.50",
		item_category: "drinks",
		item_subcategory: "Cocktails",
		item_description:
			"Classic cocktail with tequila, lime juice, and orange liqueur.",
	},
	{
		id: "c5d6e7f8-g9h0-i1j2-k3l-m4n5o6p7q8r",
		item_name: "Cosmopolitan",
		item_amount: "8.00",
		item_category: "drinks",
		item_subcategory: "Cocktails",
		item_description:
			"A stylish cocktail with vodka, triple sec, cranberry juice, and lime.",
	},
	{
		id: "d5e6f7g8-h9i0-j1k2-l3m-n4o5p6q7r8s",
		item_name: "Old Fashioned",
		item_amount: "8.50",
		item_category: "drinks",
		item_subcategory: "Cocktails",
		item_description: "A classic cocktail with bourbon, sugar, and bitters.",
	},
	{
		id: "e5f6g7h8-i9j0-k1l2-m3n-o4p5q6r7s8t",
		item_name: "Martini",
		item_amount: "9.00",
		item_category: "drinks",
		item_subcategory: "Cocktails",
		item_description:
			"A sophisticated cocktail with gin or vodka and dry vermouth.",
		tag: "new arrivals",
	},
	{
		id: "f5g6h7i8-j9k0-l1m2-n3o-p4q5r6s7t8u",
		item_name: "Manhattan",
		item_amount: "9.50",
		item_category: "drinks",
		item_subcategory: "Cocktails",
		item_description:
			"A strong cocktail with whiskey, sweet vermouth, and bitters.",
	},

	// Drink - Soft Drinks Subcategory
	{
		id: "a6b7c8d9-e0f1-g2h3-i4j-k5l6m7n8o9p",
		item_name: "Cola",
		item_amount: "2.50",
		item_category: "drinks",
		item_subcategory: "Soft Drinks",
		item_description: "Classic cola with a refreshing taste.",
	},
	{
		id: "b6c7d8e9-f0g1-h2i3-j4k-l5m6n7o8p9q",
		item_name: "Lemonade",
		item_amount: "2.75",
		item_category: "drinks",
		item_subcategory: "Soft Drinks",
		item_description: "Sweet and tangy lemonade made with fresh lemons.",
	},
	{
		id: "c6d7e8f9-g0h1-i2j3-k4l-m5n6o7p8q9r",
		item_name: "Root Beer",
		item_amount: "3.00",
		item_category: "drinks",
		item_subcategory: "Soft Drinks",
		item_description: "A classic root beer with a distinct flavor.",
		tag: "chef's special",
	},
	{
		id: "d6e7f8g9-h0i1-j2k3-l4m-n5o6p7q8r9s",
		item_name: "Ginger Ale",
		item_amount: "3.25",
		item_category: "drinks",
		item_subcategory: "Soft Drinks",
		item_description: "Sparkling ginger ale with a spicy kick.",
		tag: "top rated",
	},
	{
		id: "e6f7g8h9-i0j1-k2l3-m4n-o5p6q7r8s9t",
		item_name: "Tonic Water",
		item_amount: "3.50",
		item_category: "drinks",
		item_subcategory: "Soft Drinks",
		item_description: "Refreshing tonic water with a hint of bitterness.",
	},
	{
		id: "f6g7h8i9-j0k1-l2m3-n4o-p5q6r7s8t9u",
		item_name: "Iced Tea",
		item_amount: "3.75",
		item_category: "drinks",
		item_subcategory: "Soft Drinks",
		item_description: "Chilled tea with a hint of lemon.",
	},

	// Drink - Energy Drinks Subcategory
	{
		id: "a7b8c9d0-e1f2-g3h4-i5j-k6l7m8n9o0p",
		item_name: "Classic Energy Drink",
		item_amount: "4.00",
		item_category: "drinks",
		item_subcategory: "Energy Drinks",
		item_description: "A classic energy drink with a burst of energy.",
	},
	{
		id: "b7c8d9e0-f1g2-h3i4-j5k-l6m7n8o9p0q",
		item_name: "Tropical Energy Drink",
		item_amount: "4.25",
		item_category: "drinks",
		item_subcategory: "Energy Drinks",
		item_description: "Energy drink with tropical fruit flavors.",
	},
	{
		id: "c7d8e9f0-g1h2-i3j4-k5l-m6n7o8p9q0r",
		item_name: "Berry Blast Energy Drink",
		item_amount: "4.50",
		item_category: "drinks",
		item_subcategory: "Energy Drinks",
		item_description: "A burst of berry flavors in an energy drink.",
		tag: "new arrivals",
	},
	{
		id: "d7e8f9g0-h1i2-j3k4-l5m-n6o7p8q9r0s",
		item_name: "Citrus Energy Drink",
		item_amount: "4.75",
		item_category: "drinks",
		item_subcategory: "Energy Drinks",
		item_description: "Energy drink with a refreshing citrus flavor.",
	},
	{
		id: "e7f8g9h0-i1j2-k3l4-m5n-o6p7q8r9s0t",
		item_name: "Ginger Energy Drink",
		item_amount: "5.00",
		item_category: "drinks",
		item_subcategory: "Energy Drinks",
		item_description: "Spicy ginger flavored energy drink.",
		tag: "popular",
	},
	{
		id: "f7g8h9i0-j1k2-l3m4-n5o-p6q7r8s9t0u",
		item_name: "Green Apple Energy Drink",
		item_amount: "5.25",
		item_category: "drinks",
		item_subcategory: "Energy Drinks",
		item_description: "Green apple flavored energy drink.",
	},

	// Drink - Shakes Subcategory
	{
		id: "a8b9c0d1-e2f3-g4h5-i6j-k7l8m9n0o1p",
		item_name: "Vanilla Shake",
		item_amount: "5.50",
		item_category: "drinks",
		item_subcategory: "Shakes",
		item_description: "Creamy vanilla milkshake with whipped cream.",
	},
	{
		id: "b8c9d0e1-f2g3-h4i5-j6k-l7m8n9o0p1q",
		item_name: "Chocolate Shake",
		item_amount: "5.75",
		item_category: "drinks",
		item_subcategory: "Shakes",
		item_description: "Rich chocolate milkshake with a chocolate drizzle.",
		tag: "new arrivals",
	},
	{
		id: "c8d9e0f1-g2h3-i4j5-k6l-m7n8o9p0q1r",
		item_name: "Strawberry Shake",
		item_amount: "6.00",
		item_category: "drinks",
		item_subcategory: "Shakes",
		item_description: "Sweet strawberry milkshake with fresh strawberries.",
		tag: "top rated",
	},
	{
		id: "d8e9f0g1-h2i3-j4k5-l6m-n7o8p9q0r1s",
		item_name: "Mango Shake",
		item_amount: "6.25",
		item_category: "drinks",
		item_subcategory: "Shakes",
		item_description: "Tropical mango milkshake with a creamy texture.",
	},
	{
		id: "e8f9g0h1-i2j3-k4l5-m6n-o7p8q9r0s1t",
		item_name: "Cookies and Cream Shake",
		item_amount: "6.50",
		item_category: "drinks",
		item_subcategory: "Shakes",
		item_description: "Milkshake made with crushed cookies and cream.",
	},
	{
		id: "f8g9h0i1-j2k3-l4m5-n6o-p7q8r9s0t1u",
		item_name: "Peanut Butter Shake",
		item_amount: "6.75",
		item_category: "drinks",
		item_subcategory: "Shakes",
		item_description: "Creamy peanut butter milkshake with a nutty flavor.",
	},
];
