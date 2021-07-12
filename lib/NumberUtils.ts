/**
 * Get length after decimal point.
 * @param value 
 */
export function getPrecision(value: number): number {
    const str = value.toString();
    const index = str.indexOf("e-");
    if (index !== -1) {
        return parseInt(str.substring(index + 2));
    }
    return str.split(".")[1]?.length || 0;
}