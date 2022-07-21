// Parte I

// exercicio 01.

const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
      console.log(elseScope);
    }
  }

  testingScope(true);

// ecercício 02.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

const sortArray = (array) => array.sort((a,b) => {
    if (a > b) return 1;
    if (a < b) return -1;

    return 0;
});

console.log(sortArray (oddsAndEvens)); // será necessário alterar essa linha 😉

console.log(`Os números ${sortArray (oddsAndEvens)} se encontram ordenados de forma crescente!`)