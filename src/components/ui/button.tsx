/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
	{
		variants: {
			variant: {
				default:
					"bg-emerald-900 text-emerald-50 border border-emerald-950 hover:bg-emerald-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",
				destructive:
					"bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",
				outline:
					"border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
				secondary:
					"bg-neutral-50 text-neutral-700 border border-neutral-200 hover:bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
				ghost:
					"hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
				link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10",
				"icon-sm": "h-8 w-8",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	animation?: any; // Optional prop for custom animation
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, animation, ...props }, ref) => {
		const Comp = asChild ? Slot : motion.button; // Use motion.button for animations
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				whileTap={{ scale: 0.7 }}
				transition={{ type: "spring", stiffness: 400, damping: 17 }}
				{...animation} // Pass any custom animation props
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { Button };
