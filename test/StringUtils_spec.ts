import "mocha";
import { expect } from "chai";
import { indexesOf, lastIndexesOf, maxIndexOf, minIndexOf } from "../lib/StringUtils";

describe("StringUtils", () => {
    describe("indexesOf", () => {
        const text = "ab bc de bc";
        it("should return undefined with empty text and searchStrings", () => {
            const result = indexesOf("", []);
            expect(result).to.be.undefined;
        });
        it("should return undefined with empty searchStrings", () => {
            const result = indexesOf(text, []);
            expect(result).to.be.undefined;
        });
        it("should return undefined when nothing found", () => {
            const result = indexesOf(text, ["bb", "dd", "aa"]);
            expect(result).to.be.undefined;
        });
        it("should return the result of first occurrence", () => {
            const result = indexesOf(text, ["bc", "de"]);
            expect(result).to.deep.equal({
                index: 3,
                foundString: "bc",
            });
        });
        it("should skip first occurrence when specifying position", () => {
            const result = indexesOf(text, ["bc", "de"], 5);
            expect(result).to.deep.equal({
                index: 9,
                foundString: "bc",
            });
        });
    });
    describe("lastIndexesOf", () => {
        const text = "ab bc de bc";
        it("should return undefined with empty text and searchStrings", () => {
            const result = lastIndexesOf("", []);
            expect(result).to.be.undefined;
        });
        it("should return undefined with empty searchStrings", () => {
            const result = lastIndexesOf(text, []);
            expect(result).to.be.undefined;
        });
        it("should return undefined when nothing found", () => {
            const result = lastIndexesOf(text, ["bb", "dd", "aa"]);
            expect(result).to.be.undefined;
        });
        it("should return the result of first occurrence", () => {
            const result = lastIndexesOf(text, ["bc", "de"]);
            expect(result).to.deep.equal({
                index: 9,
                foundString: "bc",
            });
        });
    });
    describe("minIndexOf", () => {
        const text = "ab bc de bc";
        it("should return undefined with empty text and searchStrings", () => {
            const result = minIndexOf("", []);
            expect(result).to.be.undefined;
        });
        it("should return undefined with empty searchStrings", () => {
            const result = minIndexOf(text, []);
            expect(result).to.be.undefined;
        });
        it("should return undefined when nothing found", () => {
            const result = minIndexOf(text, ["bb", "dd", "aa"]);
            expect(result).to.be.undefined;
        });
        it("should return {index: 0, foundString: 'ab'}", () => {
            const result = minIndexOf(text, ["de", "ab", "bc"]);
            expect(result).to.deep.equal({
                index: 0,
                foundString: "ab",
            });
        });
    });
    describe("maxIndexOf", () => {
        const text = "ab bc de bc";
        it("should return undefined with empty text and searchStrings", () => {
            const result = maxIndexOf("", []);
            expect(result).to.be.undefined;
        });
        it("should return undefined with empty searchStrings", () => {
            const result = maxIndexOf(text, []);
            expect(result).to.be.undefined;
        });
        it("should return undefined when nothing found", () => {
            const result = maxIndexOf(text, ["bb", "dd", "aa"]);
            expect(result).to.be.undefined;
        });
        it("should return {index: 6, foundString: 'de'}", () => {
            const result = maxIndexOf(text, ["bb", "de", "ab"]);
            expect(result).to.deep.equal({
                index: 6,
                foundString: "de",
            });
        });
    });
});