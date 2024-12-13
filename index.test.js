import { capitalise, reverseString, calc } from "."

test('first letter is capital', () => {
    expect(capitalise('tadsfasdf')).toEqual('Tadsfasdf')
})

test('a string is returned reversed', () => {
    expect(reverseString('blah')).toEqual('halb')
})

test('calculator can add', () => {
    expect(calc.add(12, 5)).toEqual(17)
})

test('strings don\'t get concatenated', () => {
    expect(calc.add('12', 5)).toEqual(17)
})

test('non-numerical strings don\'t get added', () => {
    expect(calc.add('poo', 12)).toEqual(NaN)
})

test('add negative to positive', () => {
    expect(calc.add(-11, 12)).toEqual(1)
})

test('add negative to positive, result is negative', () => {
    expect(calc.add(-12, 11)).toEqual(-1)
})

test('add negative to positive with string, result is negative', () => {
    expect(calc.add('-12', 11)).toEqual(-1)
})

test('calculator can subtract', () => {
    expect(calc.subtract(12, 5)).toEqual(7)
})

test('calculator can subtract with strings', () => {
    expect(calc.subtract('12', 5)).toEqual(7)
})

test('calculator can multiply', () => {
    expect(calc.multiply(12, 5)).toEqual(60)
})

test('calculator can multiply with strings', () => {
    expect(calc.multiply(12, 5)).toEqual(60)
})

test('calculator can divide', () => {
    expect().toEqual()
})