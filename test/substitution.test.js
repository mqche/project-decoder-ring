const substitution = require("../src/substitution");
const expect = require("chai").expect;  

describe("substitution()", () => {
    describe("should return false if:", () => {
        it("no alphabet para", () => {
            const actual = substitution("thinkful");
            expect(actual).to.eql(false); 
        }); 
        it("check for duplicates", () => {
            const actual = substitution("thinkful", "aaadefghijklmnopqrstuvwxyz");
            expect(actual).to.be.false; 
        });
        it("return false for alphabet.length != 26", () => {
            const actual = substitution("thinkful", "extraabcdefghijklmnopqrstuvwxyz");
            expect(actual).to.eql(false); 
        });
    });
    describe("CONVERSION", () => {
        it("should return correct letters for encode", () => {
            const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
            expect(actual).to.eql("jrufscpw"); 
        });
        it("should return correct letter for decode", () => {
            const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
            expect(actual).to.eql("thinkful"); 
        });
    });
        it("work for alphabets with symbols", () => {
            const actual = substitution("r3d (@7", "@b(d3fghijklmnopqrs7uvwxyz")
            const expected = "red cat"
        });
        it("should keep spaces", () => {
            const expected="red cat"
            const actual=substitution("r3d (@7", "@b(d3fghijklmnopqrs7uvwxyz", false)
        })
        it("Should return string", () => {
            const actual = typeof substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
            expect(actual).to.be.a("string");
        });
    
});