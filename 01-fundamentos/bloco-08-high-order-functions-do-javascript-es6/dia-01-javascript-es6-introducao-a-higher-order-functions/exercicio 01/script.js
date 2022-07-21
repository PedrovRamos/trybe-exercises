const wakeUp = () => 'Acordado!!'
const coffe = () => 'Bora tomar café!!'
const sleep = () => 'Partiu dormir!!'

const doingThings = (func) => console.log(func())

// Ao chamar a função doingThings:
doingThings(coffe);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!