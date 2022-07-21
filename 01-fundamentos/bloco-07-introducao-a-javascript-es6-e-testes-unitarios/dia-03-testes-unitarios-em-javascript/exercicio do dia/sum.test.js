const sum = require('./sum.js');

describe('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {

test('A função deve retornar a soma entre 4 e 5', () => {
    expect(sum(4,5)).toBe(9)
})

test('A função deve retornar a soma entre 0 e 0', () => {
    expect(sum(0,0)).toBe(0)
})

test('A função deve lançar um erro quando as entradas forem 4 e "5"', () => {
    expect(() => sum(4,"5")).toThrow()
})

test('A função deve lançar um erro com a mensagem "parameters must be numbers" quando as entradas forem 4 e "5"', () => {
    expect(() => sum(4,"5")).toThrow('parameters must be numbers')
})
})




