import { indexesOf } from "./StringUtils";

/**
 * Get length after decimal point.
 * @param value 
 */
export function getPrecision(value: number): number {
    const str = value.toString();
    const searchStrings = ["e-", "e+"];
    const found = indexesOf(str, searchStrings);
    if (found) {
        return parseInt(str.substring(found.index + 2));
    }
    return str.split(".")[1]?.length || 0;
}