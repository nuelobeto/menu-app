import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SearchIcon } from "../ui/icons";

export const Search = () => {
	const [query, setQuery] = useState("");

	return (
		<div className="w-full px-5 py-4 flex items-center gap-2.5">
			<Input
				type="text"
				placeholder="Search"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className="flex-1"
			/>
			<Button size="icon">
				<SearchIcon />
			</Button>
		</div>
	);
};
