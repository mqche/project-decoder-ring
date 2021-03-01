const polybiusModule = (function () {

  let alphabet = {  
    'a':'11', 'b':'21', 'c':'31', 'd':'41', 'e':'51','f':'12', 'g':'22', 'h':'32', 'i':'42', 'j':'42', 'k':'52', 'l':'13', 'm':'23', 'n':'33', 'o':'43', 'p':'53', 'q':'14', 'r':'24', 's':'34', 't':'44', 'u':'54', 'v':'15', 'w':'25', 'x':'35', 'y':'45', 'z':'55'  
  }  
  let alphabetKeys = Object.keys(alphabet)
  let alphabetValues = Object.values(alphabet)

function polybius(input, encode = true) {
  if (!input || typeof input != "string") return false;
  if ((!encode && input.split(" ").join("").length)%2 != 0) return false;
    let words = input.toLowerCase().split(" ");
    let converted = [];
    (!encode) ? converted = words.map((word) => decoder(word))
    : converted = words.map((word) => encoder(word))
  return converted.join(" ")
}    

function encoder(word) {
  let encoded = [];
  for (let i = 0; i < word.length; i++) {
    encoded.push(alphabet[word[i]])
  }
  return encoded.join("")
}

function decoder(word) {
  let swappedAlphabet = {};
  alphabetValues.forEach((val, i) => swappedAlphabet[val] = alphabetKeys[i])
  let decoded = [];
  for (let i = 0; i < word.length; i += 2) {
    let code = word.split("").slice(i, i+2).join("")
   code == "42" ? decoded.push('(i/j)') : decoded.push(swappedAlphabet[code])
  }
  return decoded.join("")
}

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
