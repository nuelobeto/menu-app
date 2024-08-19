export function turnStringToLink(str: string) {
	return str.replace(/\s+/g, "-").toLowerCase();
}
