import "mocha";
import { expect } from "chai";
import { indexesOf } from "../lib/StringUtils";

describe("StringUtils", () => {
    describe("indexesOf", () => {
        const text = "ab bc de";
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
    });
});