# yutolity

This module provides utilities.

## How to use

### Comparison

They can be used instead of `obj !== null` or `obj !== undefined` .

#### notNull, notUndefined, hasValue

```ts
const array = ["text", 123, null, undefined, "text2"];
array.filter(notNull); // ["text", 123, undefined, "text2"]
array.filter(notUndefined); // ["text", 123, null, "text2"]
array.filter(hasValue); //  ["text", 123, "text2"]
```

### Object related

#### isKeyOf

Return type: `boolean`

Check if the specified key is key of the object.

#### getValueOf

Return type: `T[keyof T] | undefined`

Type safe object value accessor.

```ts
const obj = {
    key: "key",
    value: { value: 1 },
};
const val = getValueOf(obj, "key");
// The data type of val is following
// string | {
//     value: number;
// } | undefined

const key: string = "key";
const val2 = obj[key]; // error
```

#### setValue

```ts
setValue({}, "key", 1); // { key: 1 }
setValue(undefined, "key", 1); // { key: 1 }
setValue("value", "key.foo", 1); // { key: { foo: 1 } }
setValue({ key: { hoge: 22 } }, "key.foo", 1);
// { key: { foo: 1, hoge: 22 } }
```

### Array related

#### range

Create integer array.

```ts
range(5, 10); // [5, 6, 7, 8, 9, 10]
range(2, -2); // [-2, -1, 0, 1, 2]
range(2, 2); // []
```

#### recursiveGetValueOf

Return type: `unknown`

```ts
const obj = {
    key: "key",
    value: { value: 1 },
};
const val = recursiveGetValueOf(obj, "value.value"); // 1
```
