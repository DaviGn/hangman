const fs = require('fs');
const { once } = require('events');
const readline = require('readline');
const hangman = require('./hangman');

// const word = 'BATATA';
const filePath = './palavras.txt';

async function readWords() {
  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(filePath, 'utf8');
    const reader = readline.createInterface({
      input: readStream,
      crlfDelay: Infinity,
    });

    let lines = [];
    reader.on('line', (line) => {
      lines.push(line);
    });
    once(reader, 'close').then((_) => resolve(lines));
  });
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function program() {
  console.log('Inicializando...');
  const words = await readWords();
  const random = randomIntFromInterval(0, words.length - 1);
  const word = words[random];
  const result = await hangman(word);
  console.clear();

  if (!result) {
    console.log('Você perdeu!');
  } else {
    console.log('VITÓRIA!!!');
  }

  console.log(`A palavra era: ${word}`);
}

program();
