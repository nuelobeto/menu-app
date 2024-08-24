export function turnStringToLink(str: string) {
	return str.replace(/\s+/g, "-").toLowerCase();
}

export const capitalizeFirstLetter = (str: string) =>
	`${str.charAt(0).toUpperCase()}${str.slice(1)}`;
