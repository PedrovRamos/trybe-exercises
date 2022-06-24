// Programa 01

let fatorialDez = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 

console.log(fatorialDez)

// Programa 02 

let word = 'banana';
let inv = ""

for (let index = word.length - 1; index >= 0; index -= 1 ){
    inv = inv + word[index]
}

console.log(inv)

// Programa 03


// Algoritmo 01

let array = ['java', 'javascript', 'python', 'html', 'css'];

let lgth = 0
let longest;

for (let index = 0; index < array.length; index += 1){

    if (array[index].length > lgth) {
        lgth = array[index].length;
        longest = array[index];
    }

}

console.log(longest)

// Algoritmo 02

let array = ['java', 'javascript', 'python', 'html', 'css'];

let lgth = 100;
let short;

for (let index = 0; index < array.length; index += 1){

    if (array[index].length < lgth) {
        lgth = array[index].length;
        short = array[index];
    }

}

console.log(short)
      
      

// Programa 04 

let primos = [2]

for (let index = 3; index <= 50; index += 1){
    
    let divisores = 0

    for (let i = 2; i < index; i += 1){
        if(index % i == 0){
            divisores += 1
        }
    }

    if (divisores == 0){
        primos.push(index)
    }
}

console.log(Math.max(...primos))
