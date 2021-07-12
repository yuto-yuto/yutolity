import "mocha";
import { expect } from "chai";
import { range, rangeByStep } from "../lib/ArrayUtils";

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
        it("should create array including only start value when specifying the same value", () => {
            const result = range(0, 0);
            expect(result).to.deep.equal([0]);
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

    describe("rangeByStep", () => {
        it("should create array including start value when start and end are the same value", () => {
            const result = rangeByStep(5.5, 5.5, 1);
            expect(result).to.deep.equal([5.5]);
        });
        it("should create integer array incremented 2", () => {
            const result = rangeByStep(1, 7, 2);
            expect(result).to.deep.equal([1, 3, 5, 7]);
        });
        it("should create integer array incremented 2 even if step is negative value", () => {
            const result = rangeByStep(1, 7, -2);
            expect(result).to.deep.equal([1, 3, 5, 7]);
        });
        it("should create array incremented 0.1", () => {
            const result = rangeByStep(0.1, 0.3, 0.1);
            expect(result).to.deep.equal([0.1, 0.2, 0.3]);
        });
        it("should create array incremented -0.1 when end is smaller than start", () => {
            const result = rangeByStep(0.3, -0.11, 0.1);
            expect(result).to.deep.equal([0.3, 0.2, 0.1, 0, -0.1]);
        });
        it("should push only start value when step is bigger than end - start", () => {
            const result = rangeByStep(-0.2, 0.3, 1);
            expect(result).to.deep.equal([-0.2]);
        });
        it("should increment 0.000001", () => {
            const result = rangeByStep(0.000001, 0.000003, 0.000001);
            expect(result).to.deep.equal([0.000001, 0.000002, 0.000003]);
        });
        it("should increment 0.00000001", () => {
            const result = rangeByStep(0.00000001, 0.00000003, 0.00000001);
            expect(result).to.deep.equal([0.00000001, 0.00000002, 0.00000003]);
        });
    });
});
