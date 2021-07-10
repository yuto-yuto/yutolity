export function notNull<T>(object: unknown): object is T {
    return object !== null;
}

export function notUndefined<T>(object: unknown): object is T {
    return object !== undefined;
}

export function hasValue<T>(object: unknown): object is T {
    return notNull(object) && notUndefined(object);
}
