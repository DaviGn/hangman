const prompt = require('./promptUtil');

let wordTemp = '______';

const errorsLimit = 11;

const charactersErrored = [];
let countCorrect = 0;
const charactersCorrect = [];

async function hangman(word) {
  while (charactersErrored.length < errorsLimit && countCorrect < word.length) {
    console.clear();
    console.log(`Palavra: ${wordTemp}`);
    console.log(
      `Erros (${charactersErrored.length}): ${charactersErrored
        .map((x) => x)
        .join(',')}`
    );

    let character = await prompt('Digite uma letra: ');
    character = character.toUpperCase();
    const exists = word.includes(character);

    if (!exists) {
      charactersErrored.push(character);
      continue;
    }

    const alreadyTyped = charactersCorrect.includes(character);

    if (alreadyTyped) {
      continue;
    }

    charactersCorrect.push(character);
    wordTemp = '';
    countCorrect = 0;

    for (let letter of word) {
      const correct = charactersCorrect.includes(letter);
      wordTemp += correct ? letter : '_';

      if (correct) countCorrect++;
    }
  }

  return charactersErrored.length < errorsLimit;
}

module.exports = hangman;
