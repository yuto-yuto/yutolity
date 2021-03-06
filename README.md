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
range(2, -2); // [2, 1, 0, -1, -2]
range(2, 2); // [2]
```

#### rangeByStep

Create number array but you can specify the number to increment.

```ts
rangeByStep(1, 7, 2); // [1, 3, 5, 7]
rangeByStep(0.1, 0.3, -0.1); // [0.1, 0.2, 0.3]
rangeByStep(0.3, -0.11, 0.1); // [0.3, 0.2, 0.1, 0, -0.1]
rangeByStep(-0.2, 0.3, 1); // [-0.2]
rangeByStep(0.000001, 0.000003, 0.000001); // [0.000001, 0.000002, 0.000003]
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

### Number related

#### getPrecision

Return type: `number`

```ts
getPrecision(11.223); // 3
getPrecision(11.0);   // 0
getPrecision(1e-11);  // 11
getPrecision(1e+21);  // 21
```

### String related

#### indexesOf/lastIndexesOf

Return type: `{index: number; foundString: string;}`

```ts
const text = "ab bc de bc";
indexesOf(text, ["bc", "de"]);
//{
//     index: 3,
//     foundString: "bc",
// }
lastIndexesOf(text, ["bc", "de"]);
// {
//     index: 9,
//     foundString: "bc",
// }
```

#### minIndexOf/maxIndexOf

Return type: `{index: number; foundString: string;}`

```ts
minIndexOf(text, ["de", "ab", "bc"]);
// {
//     index: 0,
//     foundString: "ab",
// }
maxIndexOf(text, ["bb", "de", "ab"]);
// {
//     index: 6,
//     foundString: "de",
// }
```
