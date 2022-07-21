
const myFizzBuzz = require('./myFizzBuzz.js')

test('A função deve retornar o valor esperado para a entrada 15', () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz")
})

test('A função deve retornar o valor esperado para a entrada 6', () => {
    expect(myFizzBuzz(6)).toBe("fizz")
})

test('A função deve retornar o valor esperado para a entrada 40', () => {
    expect(myFizzBuzz(40)).toBe("buzz")
})

test('A função deve retornar o valor esperado para a entrada 2', () => {
    expect(myFizzBuzz(2)).toBe(2)
})

test('A função deve retornar o valor esperado para a entrada "10"', () => {
    expect(myFizzBuzz("10")).toBeFalsy()
})