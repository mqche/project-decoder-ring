const caesarModule = (function () {
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  function caesar(input, shift, encode = true) { 
    if (shift === 0 || shift < -25 || shift > 25 || !shift) {
       return false; 
    }  
    let lowerCase  = input.toLowerCase();
    return (!encode) ? converter(lowerCase, -shift) : converter(lowerCase, shift); 
  }

  function converter(input, shift) {
    let encoded = [];
    for (let i = 0; i < input.length; i++) {
      let found = false;
      for (let j = 0; j < alphabet.length; j++) {
        if (shift < 0) {
          if (input[i] === alphabet[j]) {
            let shifted = ((shift + j) + 26) % 26; 
            encoded.push((alphabet[shifted]))
            found = true; 
          }} 
        else if (input[i] === alphabet[j]) {
          let shifted = (shift + j) % 26; 
          encoded.push((alphabet[shifted]))
          found = true;  
        }} 
      if (!found) {
        encoded.push(input[i]); 
      }}
    return encoded.join("");  
  }

  return {
    converter, caesar
  };
})();

module.exports = caesarModule.caesar;

    
 
