// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // arr of actual alphabet
    const arrOfLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    //check for alphabet para
    if (!alphabet) {return false}
    // split to arr of letters
    alphabet = alphabet.split('');
    // check length of (alphabet), and turn to Set for checking duplicates by .size and .length
    if (alphabet.length != 26 || (new Set(alphabet)).size !== alphabet.length) {return false};
    // make (input) all lowercase and .split to letters
    input = input.toLowerCase().split('')
    // ternary checks for encode boolean to encode or decode
    return (encode) ?
    // [] as acc and .push spaces to [] at beginning of ea loop
      input.reduce((acc, characters) => {
        if (characters === ' ') {
          acc.push(characters);
        }
        // take index of each (input) character and find in arrOfLetters
        let index = arrOfLetters.indexOf(characters);
        // switch to (alphabet) letter by .push-ing letter of same index to acc
        acc.push(alphabet[index]);
        return acc;
        // join ea element of acc to a string
      }, []).join('') :
      // if encode is false, same as above but in reverse for indexes
      input.reduce((acc, characters) => {
        if (characters === ' ') {
          acc.push(characters);
        }
        let index = alphabet.indexOf(characters);
        acc.push(arrOfLetters[index]);
        return acc;
      }, []).join('') 
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
