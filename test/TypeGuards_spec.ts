import "mocha";
import { expect } from "chai";
import { hasValue, notNull, notUndefined } from "../lib/TypeGuards";

describe("GenericComparison", () => {
    const array = ["text", 123, null, undefined, "text2"];

    describe("notNull", () => {
        it("should filter null", () => {
            const result = array.filter(notNull);
            expect(result).to.deep.equal(["text", 123, undefined, "text2"])
        });
    });

    describe("notUndefined", () => {
        it("should filter undefined", () => {
            const result = array.filter(notUndefined);
            expect(result).to.deep.equal(["text", 123, null, "text2"])
        });
    });

    describe("hasValue", () => {
        it("should filter null and undefined", () => {
            const result = array.filter(hasValue);
            expect(result).to.deep.equal(["text", 123, "text2"])
        });
    });
});