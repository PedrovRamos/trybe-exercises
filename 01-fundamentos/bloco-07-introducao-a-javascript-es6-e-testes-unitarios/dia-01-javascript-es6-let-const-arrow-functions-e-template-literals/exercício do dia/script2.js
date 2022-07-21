// Parte II

// exercicio 01.

const fatorial = (n) => {

    let fat = n

    for (let i = n-1;i > 0;i -= 1){
        fat = fat * i
    }

    console.log(fat)
}

fatorial (5)