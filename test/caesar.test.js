const caesar = require("../src/caesar");
const expect = require("chai").expect;

// Write your tests here!
describe("caesar()", () => {
    describe("Should return false for shift:", () => {
        it("of 0", () => {
            const actual = caesar("abc", 0);
            expect(actual).to.eql(false); 
        });
        it("less than 25", () => {
            const actual = caesar("abc', -26");
            expect(actual).to.eql(false);
        });
        it("greater than 25", () => {
            const actual = caesar("abc', 26");
            expect(actual).to.eql(false);
        });
    });
    describe("CONVERSION", () => {
        it("should shift correct number of positions", () => {
            const expected ="abc";
            const actual = caesar("xyz", 3)
        });
        it("should shift correctly for negative numbers", () => {
            const expected="efg";
            const actual = caesar("hij", -3)
        });
        it("should keep spaces", () => {
            const expected="ab cd"
            const actual=caesar("de fg", 3, false)
        })
        it("should keep shift left for decode", () => {
            const expected="xyz abc"
            const actual=caesar("abc xyz", 3, false)
        })
    });  
});