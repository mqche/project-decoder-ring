const substitution = require("../src/substitution");
const expect = require("chai").expect;  


describe("substitution()", () => {
    describe("should return false if:", () => {
        it("no alphabet para", () => {
            const actual = substitution("thinkful");
            expect(actual).to.eql(false); 
        });
        it("alphabet length != 26", () => {
            const actual = substitution("thinkful", "sdfd");
            expect(actual).to.eql(false); 
        });
        it("alphabet length does not equal 26 w/o duplicates", () => {
            const actual = substitution("thinkful", "aaadefghijklmnopqrstuvwxyz");
            expect(actual).to.eql(false); 
        });
    });
    describe("CONVERSION", () => {
        it("should return in alphabet for encode", () => {
            const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
            expect(actual).to.eql("jrufscpw"); 
        });
        it("should return in arrOfLetters for decode", () => {
            const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
            expect(actual).to.eql("thinkful"); 
        });
    });
    describe("Test Category 3:", () => {
        it("test", () => {
        });
        it("test", () => {
        });
    });    
});