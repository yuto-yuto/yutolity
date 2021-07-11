import "mocha";
import { expect } from "chai";
import { getValueOf, isKeyOf, recursiveGetValueOf, setValue } from "../lib/ObjectUtils";

describe("Object.ts", () => {
    const obj = {
        key: "key",
        value: { value: 1 },
    };

    describe("getValueOf", () => {
        it("should return primitive value when the path exists", () => {
            const result = getValueOf(obj, "key");
            expect(result).to.equal("key");
        });

        it("should return object when the path exists", () => {
            const result = getValueOf(obj, "value");
            expect(result).to.deep.equal({ value: 1 });
        });

        it("should return undefined when the path doesn't exist", () => {
            const result = getValueOf(obj, "notExistProp");
            expect(result).to.equal(undefined);
        });
    });

    describe("isKeyOf", () => {
        ["key", "value"].forEach((key) => {
            it("should return true when the key exists", () => {
                const result = isKeyOf(obj, key);
                expect(result).to.equal(true);
            });
        });

        it("should return false when the key doesn't exist", () => {
            const result = isKeyOf(obj, "notExistKey");
            expect(result).to.equal(false);
        });
    });

    describe("recursiveGetValueOf", () => {
        it("should return undefined when path is empty", () => {
            const result = recursiveGetValueOf(obj, "");
            expect(result).to.equal(undefined);
        });

        it("should return undefined when chained property is primitive value", () => {
            const result = recursiveGetValueOf(obj, "key.key");
            expect(result).to.equal(undefined);
        });

        it("should return undefined when path does not exist", () => {
            const result = recursiveGetValueOf(obj, "value.key");
            expect(result).to.equal(undefined);
        });

        it("should return primitive value when the specified path is not object", () => {
            const result = recursiveGetValueOf(obj, "key");
            expect(result).to.equal("key");
        });

        it("should return object when the specified path is object", () => {
            const result = recursiveGetValueOf(obj, "value");
            expect(result).to.deep.equal({ value: 1 });
        });

        it("should get deep level property", () => {
            const result = recursiveGetValueOf(obj, "value.value");
            expect(result).to.equal(1);
        });
    });

    describe("setValue", () => {
        it("should set value to undefined ", () => {
            const result = setValue(undefined, "key", 1);
            expect(result).to.deep.equal({ key: 1 });
        });
        it("should set value to primitive value", () => {
            const result = setValue("value", "key", 1);
            expect(result).to.deep.equal({ key: 1 });
        });
        it("should set deep level property to primitive value", () => {
            const result = setValue("value", "key.foo", 1);
            expect(result).to.deep.equal({ key: { foo: 1 } });
        });
        it("should keep the value when the path is empty", () => {
            const result = setValue("value", "", 1);
            expect(result).to.equal("value");
        });
        it("should set space contained key when the path contains space", () => {
            const result = setValue("value", "key. foo", 1);
            expect(result).to.deep.equal({
                key:
                    { [" foo"]: 1 }
            });
        });
        it("should set value to first level property when object is empty", () => {
            const result = setValue({}, "key", 1);
            expect(result).to.deep.equal({ key: 1 });
        });
        it("should set value to first level property when object is empty", () => {
            const result = setValue({}, "key.foo", 1);
            expect(result).to.deep.equal({
                key: { foo: 1 }
            });
        });
        it("should override the property when it is primitive value", () => {
            const result = setValue({ key: 1 }, "key.foo", 1);
            expect(result).to.deep.equal({
                key: { foo: 1 }
            });
        });
        it("should keep existing property when the object has another", () => {
            const result = setValue({ key: { hoge: 22 } }, "key.foo", 1);
            expect(result).to.deep.equal({
                key: {
                    foo: 1,
                    hoge: 22
                }
            });
        });
    });
});