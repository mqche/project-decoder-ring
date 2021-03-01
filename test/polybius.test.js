const polybius = require("../src/polybius");
const expect = require("chai").expect;

// Write your tests here!
describe("polybius()", () => {
    describe("Decode should return false:", () => {
        it("if total numbers is odd", () => {
            const actual = polybius("123", false);
            expect(actual).to.be.eql(false); 
        });
        it("if input is not a string", () => {
            const actual = polybius("thinkful");
            expect(actual).to.be.a('string');
        });
    });
    describe("CONVERSION", () => {
        it("Should return string", () => {
            const actual = polybius("abc");
            expect(actual).to.be.a("string");
        });
        it("should change letters to numbers for encode", () => {
            const actual = polybius("message");
            expect(actual).to.eql("23513434112251");
        });
        it("should change numbers to letters for decode", () => {
            const expected = "message";
            const actual = polybius("23513434112251", false);
            expect(actual).to.eql(expected);
        });
        it("Should include spaces", () => {
            const actual = polybius("red car");
            expect(actual).to.include(" ");
        });
        it("should maintain spaces in right spot", () => {
            const expected = "woah there man";
            const actual = polybius("25431132 4432512451 231133", false);
            expect(actual).to.eql(expected);
        });
    });
});