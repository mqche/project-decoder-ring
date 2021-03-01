const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    const arrOfLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    if (!alphabet) {return false}
    alphabet = alphabet.split('');
    if (alphabet.length != 26 || (new Set(alphabet)).size !== alphabet.length) {return false};
    input = input.toLowerCase().split('')
    return (encode) ?
      input.reduce((acc, characters) => {
        if (characters === ' ') {
          acc.push(characters);
        }
        let index = arrOfLetters.indexOf(characters);
        acc.push(alphabet[index]);
        return acc;
      }, []).join('') :
      input.reduce((acc, characters) => {
        if (characters === ' ') {
          acc.push(characters);
        }
        let index = alphabet.indexOf(characters);
        acc.push(arrOfLetters[index]);
        return acc;
      }, []).join('') 
  }

console.log(substitution("message", "plmoknijbuhvygctfxrdzeswaq"))


substitution("message", "plmoknijbuhvygctfxrdzeswaq")
  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
