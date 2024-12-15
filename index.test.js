import { capitalise, reverseString, calc, caesarCipher } from "./index.js"


/* Calculator */
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
    expect(calc.multiply('12', 5)).toEqual(60)
})

test('calculator can divide', () => {
    expect(calc.divide(6, 2)).toEqual(3)
})

test('calculator can divide with decimal quotient', () => {
    expect(calc.divide(6, 4)).toEqual(1.5);
})

test('divide by zero throws error', () => {
    expect(() => {
        calc.divide(50, 0);
    }).toThrow("Can't divide by zero");
});

/* Caesar cipher */

test('shift simple string', () => {
    expect(caesarCipher('abc', 3)).toBe('def')
})

test('test shouldn\'t pass with different shift factor', () => {
    expect(caesarCipher('abc', 15)).not.toEqual('def')
})

test('shift string at end of alphabet', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
})

test('loop around alphabet if shiftfactor > 26', () => {
    expect(caesarCipher('abc', 27)).toBe('bcd')
})

test('loop around alphabet if shiftfactor > 26 near end of alphabet', () => {
    expect(caesarCipher('wxy', 29)).toBe('zab')
})