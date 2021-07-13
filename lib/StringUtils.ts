export interface IndexOfResult {
    index: number;
    foundString: string;
}

function indexOfBase(
    cb: (searchString: string, position?: number) => number,
    text: string,
    searchStrings: string[],
    position?: number
) {
    for (const searchString of searchStrings) {
        const index = cb(searchString, position);
        if (index !== -1) {
            return {
                index,
                foundString: searchString,
            };
        }
    }
}
/**
 * Returns the position of the first occurrence of substrings.
 * @param text Text to be searched
 * @param searchStrings The substrings to search for in the string
 * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
 */
export function indexesOf(text: string, searchStrings: string[], position?: number): IndexOfResult | undefined {
    for (const searchString of searchStrings) {
        const index = text.indexOf(searchString, position);
        if (index !== -1) {
            return {
                index,
                foundString: searchString,
            };
        }
    }
}
/**
 * Returns the position of the first occurrence of substrings.
 * @param text Text to be searched
 * @param searchStrings The substrings to search for in the string
 * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
 */
export function lastIndexesOf(text: string, searchStrings: string[], position?: number): IndexOfResult | undefined {
    for (const searchString of searchStrings) {
        const index = text.lastIndexOf(searchString);
        if (index !== -1) {
            return {
                index,
                foundString: searchString,
            };
        }
    }
}

// const results = searchStrings.map((searchString) => {
//     const index = text.indexOf(searchString, position);
//     return {
//         index,
//         searchString,
//     };
// }).filter((x) => x.index !== -1);
// const min = Math.min(...results.map((x) => x.index));
// const found = results.find((x) => x.index === min);
// if (!found) {

// }