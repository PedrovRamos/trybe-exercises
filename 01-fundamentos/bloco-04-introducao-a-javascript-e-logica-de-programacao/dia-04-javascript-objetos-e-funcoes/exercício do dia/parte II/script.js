function exercicio1 (){

    let word = 'trybe';
    let inv = ""
    
    for (let index = word.length - 1; index >= 0; index -= 1 ){
        inv = inv + word[index]
    }
    
    if (word === inv){
        console.log("true")
    } else{
        console.log("false")
    }

}

function exercicio2 (){

    let arrayTeste = [2, 3, 6, 7, 10, 1];

    console.log(Math.max(...arrayTeste))
    
}