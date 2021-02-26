// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line

const caesarModule = (function () {
let arrOfLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function caesar(input, shift, encode = true) {
  if (shift === 0 || shift < -25 || shift > 25 || !shift) {
    return false;
  } 
  let lowerCase = input.toLowerCase();
  if (!encode) {
    return converter(lowerCase, -shift);
  } else {
    return converter(lowerCase, shift);
  }
}

function converter(input, shift) {
  let encoded = [];
    for (let i = 0; i < input.length; i++) {
      let found = false;
      for (let j = 0; j < arrOfLetters.length; j++) {
        if (shift < 0) {
          if (input[i] === arrOfLetters[j]) {
            let shifted = ((shift + j) + 26) % 26; 
            encoded.push((arrOfLetters[shifted]))
            found = true; 
          }
        } 
        else if (input[i] === arrOfLetters[j]) {
          let shifty = (shift + j) % 26; 
          encoded.push((arrOfLetters[shifty]))
          found = true;  
        }
      } 
      if (!found) {
        encoded.push(input[i]); 
      }
    }
    return encoded.join("");  
  }




  return {
    converter, caesar
  };
})();

module.exports = caesarModule.caesar;

    
 
