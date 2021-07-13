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
    return indexOfBase(
        text.indexOf.bind(text),
        text,
        searchStrings,
        position);
}

/**
 * Returns the last occurrence of a substring in the string.
 * lastIndexOf is called internally and it returns immediately
 * when one of searchStrings find it
 * @param text Text to be searched
 * @param searchStrings The substrings to search for in the string
 * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
 */
export function lastIndexesOf(text: string, searchStrings: string[], position?: number): IndexOfResult | undefined {
    return indexOfBase(
        text.lastIndexOf.bind(text),
        text,
        searchStrings,
        position);
}

function minMaxIndexOfBase(
    cb: (searchString: string, position?: number) => number,
    minMax: (...values: number[]) => number,
    searchStrings: string[],
    position?: number
): IndexOfResult | undefined {
    const results = searchStrings.map((searchString) => {
        const index = cb(searchString, position);
        return {
            index,
            searchString,
        };
    }).filter((x) => x.index !== -1);
    const min = minMax(...results.map((x) => x.index));
    const found = results.find((x) => x.index === min);
    if (found) {
        return {
            index: found.index,
            foundString: found.searchString,
        };
    }
}

/**
 * Return minimum index of the occurrence of substrings
 * @param text Text to be searched
 * @param searchStrings The substrings to search for in the string
 * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
 */
export function minIndexOf(text: string, searchStrings: string[], position?: number): IndexOfResult | undefined {
    return minMaxIndexOfBase(
        text.indexOf.bind(text),
        Math.min,
        searchStrings,
        position);
}

/**
 * Return maximum index of the occurrence of substrings
 * @param text Text to be searched
 * @param searchStrings The substrings to search for in the string
 * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
 */
export function maxIndexOf(text: string, searchStrings: string[], position?: number): IndexOfResult | undefined {
    return minMaxIndexOfBase(
        text.indexOf.bind(text),
        Math.max,
        searchStrings,
        position);
}
