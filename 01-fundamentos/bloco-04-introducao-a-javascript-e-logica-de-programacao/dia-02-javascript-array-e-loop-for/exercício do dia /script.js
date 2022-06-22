// Exercício 01

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index++){
    console.log(numbers[index])
}

// Exercício 02

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0

for (let index = 0; index < numbers.length; index++){
    resultado = resultado + numbers[index]
}

console.log(resultado)

// Exercício 03 

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0

for (let index = 0; index < numbers.length; index++){
    resultado = resultado + numbers[index]
}

console.log(resultado / numbers.length)

// Exercício 04

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0

for (let index = 0; index < numbers.length; index++){
    resultado = resultado + numbers[index]
}



if (resultado / numbers.length > 20){
    console.log("valor maior que 20")
} else {
    console.log("valor menor que 20")
}

// Exercício 05 (falta fazer)

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorValor

// Exercício 06

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let vezes = 0

for (let index = 0; index < numbers.length; index++){
    if (numbers[index] % 2 != 0){
        vezes++
    } 
}

console.log

if (vezes === 0){
    console.log("nenhum valor ímpar encontrado")
} else{
    console.log(vezes)
}

// Exercício 07 (Falta fazer)

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior

for (let index = 0; index < numbers.length; index++){
    
    for (let i = 0; i < numbers.length; i++){
        if (numbers[index] >= numbers[i]){
            maior++
            break
        }
    }

    if (maior == 1){
        console.log(numbers[index])
        break
    }
}

// Exercício 08

let array = []

for (let index = 1; index <= 25; index++){
    array.push(index)
}

console.log(array)

// Exercício 09

const array = [
    1,  2,  3,  4,  5,  6,  7,  8,
    9, 10, 11, 12, 13, 14, 15, 16,
   17, 18, 19, 20, 21, 22, 23, 24,
   25
 ]

 for (let index = 0; index < 25; index++){
    array[index] = array[index] / 2
 }

 console.log(array)

