import * as React from "react";
import { cn } from "@/lib/utils";

export const MenuIcon = ({
	className,
	...props
}: React.SVGAttributes<SVGSVGElement>) => {
	return (
		<svg
			className={cn("stroke-neutral-700", className)}
			{...props}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M2.5 10H17.5M2.5 5H17.5M2.5 15H17.5"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const ArrowLeftIcon = ({
	className,
	...props
}: React.SVGAttributes<SVGSVGElement>) => {
	return (
		<svg
			className={cn("stroke-neutral-700", className)}
			{...props}
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M10 12L6 8L10 4"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const SearchIcon = ({
	className,
	...props
}: React.SVGAttributes<SVGSVGElement>) => {
	return (
		<svg
			className={cn("stroke-emerald-50", className)}
			{...props}
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
