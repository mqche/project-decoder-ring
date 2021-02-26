const polybius = require("../src/polybius");
const expect = require("chai").expect;

// Write your tests here!
describe("polybius()", () => {
    describe("Decode should return false:", () => {
        it("if total numbers is odd", () => {
            const actual = polybius("123", false);
            expect(actual).to.eql(false); 
        });
        it("if input is not a string", () => {
            const actual = polybius(123, false);
            expect(actual).to.eql(false);
        });
    });
    describe("CONVERSION", () => {
        it("Should return numbers for encode", () => {
            const actual = polybius("abc");
            expect(actual).to.eql("112131");
        });
        it("should return letters for decode", () => {
            const actual = polybius("112131", false);
            expect(actual).to.eql("abc");
        });
    });
});