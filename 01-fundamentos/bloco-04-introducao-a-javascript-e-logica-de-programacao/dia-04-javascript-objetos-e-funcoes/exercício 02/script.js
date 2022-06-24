// Parte 01

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let index in names){
    console.log("Olá " + names[index])
  }

// Parte 02

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let i in car){
    console.log(i,car[i])
  }

  console.log("+----------Demonstração na tabela----------+")

  console.table(car)