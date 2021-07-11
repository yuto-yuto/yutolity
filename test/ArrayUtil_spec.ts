import "mocha";
import { expect } from "chai";
import { range } from "../lib/ArrayUtils";

describe("ArrayUtil", () => {
    describe("range", () => {
        it("should create array when specifying integer", () => {
            const result = range(5, 10);
            expect(result).to.deep.equal([5, 6, 7, 8, 9, 10]);
        });
        it("should create array when specifying non integer", () => {
            const result = range(5.9, 10.1);
            expect(result).to.deep.equal([5, 6, 7, 8, 9, 10]);
        });
        it("should create empty array when specifying the same value", () => {
            const result = range(0, 0);
            expect(result).to.deep.equal([]);
        });
        it("should create array including negative value", () => {
            const result = range(-2, 3);
            expect(result).to.deep.equal([-2, -1, 0, 1, 2, 3]);
        });
        it("should create empty array when start is bigger than end", () => {
            const result = range(3, -1);
            expect(result).to.deep.equal([3, 2, 1, 0, -1]);
        });
    });
});
