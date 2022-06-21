// Programa 01

const a = 20;
const b = 15;

console.log(a + b)

// Programa 02

const a = 20;
const b = 15;

console.log(a - b)

// Programa 03

const a = 20;
const b = 15;

console.log(a * b)

// Programa 04

const a = 20;
const b = 15;

console.log(a / b)

// Programa 05

const a = 20;
const b = 15;

console.log(a % b)

// Programa 06

const a = 21;
const b = 18;

if (a > b){
    console.log(a)
} else{
    console.log(b)
}

// Programa 07

const a = 21;
const b = 18;
const c = 12;

if (a > b && a > c){
    console.log(a)
} else if (b > c){
    console.log(b)
} else{
    console.log(c)
}

// Programa 08

const a = -5;

if (a >= 1){
    console.log("positive")
} else if (a <= -1){
    console.log("negative")
} else {
    console.log("zero")
}

// Programa 09

const a = 55;
const b = 60;
const c = 75;

if (a + b + c == 180){
    console.log("true")
} else if (a <= 0 || b <= 0 || c <= 0) (
    console.log("false")
) else{
    console.log("false")
}

// Programa 10

let peça;

if (peça.toLowerCase() == rei){
    console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez, como indicam os pontos vermelhos na figura abaixo.")
} else if (peça.toLowerCase() == dama){
    console.log("Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.")
} else if (peça.toLowerCase() == torre){
    console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.")
} else if (peça.toLowerCase() == bispo){
    console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.")
} else if (peça.toLowerCase() == cavalo){
    console.log("É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.")
} else if (peça.toLowerCase() == peão){
    console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.")
}

// Programa 11

let nota;

if (nota >= 90){
    console.log("A")
} else if (nota >= 80){
    console.log("B")
} else if (nota >= 70){
    console.log("C")
} else if (nota >= 60){
    console.log("D")
} else if (nota >= 50){
    console.log("E")
} else if (nota < 50){
    console.log("F")
} else if (nota < 0 || nota > 100){
    console.log("ERROR")
}

// Programa 12

const a = 55;
const b = 60;
const c = 75;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0){
    console.log(true)
} else{
    console.log(false)
}

// Programa 13

const a = 55;
const b = 60;
const c = 75;

if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0){
    console.log(true)
} else{
    console.log(false)
}

// Programa 14

const custo = 100
const venda = 150

if (custo == 0 || venda == 0){
    console.log("O valor do custo ou o valor de venda são inválidos")
} else {
    let lucro = venda - custo + (0.2 * custo)
    return lucro
}

// Programa 15

const bruto = 3000;

let liquido;

if (bruto <= 1556.94){
    liquido = bruto - (bruto*0.08) 
} else if (bruto <= 2594.92){
    liquido = bruto - (bruto*0.09) 
} else if (bruto <= 5189.82){
    liquido = bruto - (bruto*0.11) 
} else if (bruto > 5189.82){
    liquido = bruto - 570.88 
}



if (liquido > 1903.98 && liquido <= 2826.65){
    let ir = (liquido*0.075) - 142.80;
    liquido = liquido - ir
} else if (liquido <= 3751.05){
    let ir = (liquido*0.15) - 354.80 
    liquido = liquido - ir
} else if (liquido <= 4664.68){
    let ir = (liquido*0.225) - 636.13 
    liquido = liquido - ir
} else if (liquido > 4664.68){
    let ir = (liquido*0.275) - 869.36 
    liquido = liquido - ir
}

console.log(liquido)