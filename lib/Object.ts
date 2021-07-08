export function getValueOf<T>(object: T, key: string): T[keyof T] | undefined {
    if (isKeyOf(object, key)) {
        return object[key];
    }
    return undefined;
}

export function isKeyOf<T>(object: T, key: any): key is keyof T {
    return key in object
}

interface StringKeyObject {
    [key: string]: unknown;
}

function isObject(object: unknown): object is StringKeyObject {
    return typeof object === "object";
}

export function recursiveGetValueOf<T>(object: T, path: string): unknown {
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
