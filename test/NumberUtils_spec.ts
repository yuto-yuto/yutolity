import "mocha";
import { expect } from "chai";
import { getPrecision } from "../lib/NumberUtils";

describe("NumberUtils", () => {
    describe("getPrecision", () => {
        it("should return 3 when the value is 11.223", () => {
            const result = getPrecision(11.223);
            expect(result).to.equal(3);
        });
        it("should return 0 when the value is 11", () => {
            const result = getPrecision(11);
            expect(result).to.equal(0);
        });
        it("should return 0 when the value is 11.0", () => {
            const result = getPrecision(11.0);
            expect(result).to.equal(0);
        });
        it("should return 11 when the value is 1e-11", () => {
            const result = getPrecision(1e-11);
            expect(result).to.equal(11);
        });
        // 1e+20 is shown as normal number 10000...
        it("should return 11 when the value is 1e+21", () => {
            const result = getPrecision(1e+21);
            expect(result).to.equal(21);
        });
    });
});