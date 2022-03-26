// console.log('Hello World ' + process.argv[2]);
// console.log(process.argv);

const prompt = require('./promptUtil');

async function program() {
  const nota1 = await prompt('Digite a nota 1: ');
  const peso1 = await prompt('Digite o peso da nota 1: ');

  const nota2 = await prompt('Digite a nota 2: ');
  const peso2 = await prompt('Digite o peso da nota 2: ');

  const nota3 = await prompt('Digite a nota 3: ');
  const peso3 = await prompt('Digite o peso da nota 3: ');

  const media =
    parseFloat(nota1) * parseFloat(peso1) +
    parseFloat(nota2) * parseFloat(peso2) +
    parseFloat(nota3) * parseFloat(peso3);

  console.log('Média: ' + media);
}

program();
