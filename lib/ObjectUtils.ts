
/**
 * It looks for a value of the specified key from the top level properties.
 * Use recursiveGetValueOf function if you want to get a value from nested properties.
 * @param object object to find the value of the specified key
 * @param key property name. 
 */
export function getValueOf<T>(object: T, key: string): T[keyof T] | undefined {
    if (isKeyOf(object, key)) {
        return object[key];
    }
    return undefined;
}

export function isKeyOf<T>(object: T, key: any): key is keyof T {
    return key in object
}

/**
 * Set the specified value to the specified path.
 * @param object object to set the value
 * @param path property path. Property name can be chained, e.g. "key1.key2".
 * The property separated by dot "." is used without trimming space.    
 * @param value value to be set to specified path
 */
export function setValue(object: unknown, path: string, value: unknown): StringKeyObject | unknown {
    const props = path.split(".");

    const recursive = (current: unknown): unknown => {
        const prop = props.shift();
        if (prop === undefined || prop === "") {
            return current;
        }
        if (props.length === 0) {
            if (isObject(current)) {
                current[prop] = value;
            } else {
                current = { [prop]: value };
            }
            return current;
        }
        if (isObject(current) && isObject(current[prop])) {
            current[prop] = recursive(current[prop]);
            return current;
        }

        const newValue: StringKeyObject = { [prop]: {} };
        newValue[prop] = recursive(newValue[prop]);
        current = newValue;
        return current;
    };
    return recursive(object);
}

export interface StringKeyObject {
    [key: string]: unknown;
}

function isObject(object: unknown): object is StringKeyObject {
    return typeof object === "object";
}

/**
 * Get value of the specified property path.
 * @param object object to find the value of the specified property path
 * @param path property path
 * @returns object specified in the "object" argument
 */
export function recursiveGetValueOf(object: unknown, path: string): unknown {
    const props = path.split(".");

    const recursive = (property: unknown): unknown => {
        const prop = props.shift();
        if (prop === undefined) {
            return property;
        }
        const result = getValueOf(property, prop);
        if (isObject(result)) {
            return recursive(result);
        }
        if (props.length > 0) {
            return undefined;
        }
        return result;
    }
    return recursive(object);
}
