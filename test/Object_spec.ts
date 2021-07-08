import "mocha";
import { expect } from "chai";
import { getValueOf, isKeyOf, recursiveGetValueOf } from "../lib/Object";

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
});