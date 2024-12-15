import { capitalise, reverseString, calc, caesarCipher, analyseArray } from "./index.js"


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

/* capitals */ 
test('shift simple string with a capital', () => {
    expect(caesarCipher('aBc', 3)).toBe('dEf')
})

test('test shouldn\'t pass with different shift factor', () => {
    expect(caesarCipher('aBc', 15)).not.toEqual('dEf')
})

test('shift string at end of alphabet with capitals', () => {
    expect(caesarCipher('XyZ', 3)).toBe('AbC')
})

test('loop around alphabet if shiftfactor > 26, with capitals', () => {
    expect(caesarCipher('ABc', 27)).toBe('BCd')
})

test('loop around alphabet if shiftfactor > 26 near end of alphabet, with capitals', () => {
    expect(caesarCipher('WXy', 29)).toBe('ZAb')
})

/* capitals and punctuation */
test('shift simple string with a capital and punctuation', () => {
    expect(caesarCipher('a,Bc', 3)).toBe('d,Ef')
})

test('test shouldn\'t pass with different shift factor', () => {
    expect(caesarCipher('aB c-', 15)).not.toEqual('dE f-')
})

test('shift string at end of alphabet with capitals and punctuation', () => {
    expect(caesarCipher('X yZ-', 3)).toBe('A bC-')
})

test('loop around alphabet if shiftfactor > 26, with capitals and punctuation', () => {
    expect(caesarCipher('_ _A&Bc', 27)).toBe('_ _B&Cd')
})

test('loop around alphabet if shiftfactor > 26 near end of alphabet, with capitals and punctuation', () => {
    expect(caesarCipher('W¬X~y', 29)).toBe('Z¬A~b')
})

test('test string from Odin', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

/*  */

test('analyse array of numbers', () => {
    expect(analyseArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6})
})

test('analyse a different array of numbers', () => {
    expect(analyseArray([1,2,3])).toEqual({average: 2, min: 1, max: 3, length: 3})
})

test('analyse an array with negative numbers', () => {
    expect(analyseArray([1,-4,3])).toEqual({average: 0, min: -4, max: 3, length: 3})
})

test('round average to 2dp', () => {
    expect(analyseArray([1,-2,3])).toEqual({average: 0.67, min: -2, max: 3, length: 3})
})

test('round min to 2dp', () => {
    expect(analyseArray([3.334,-3.334,4,2])).toEqual({average: 1.5, min: -3.33, max: 4, length: 4})
})

test('round max to 2dp', () => {
    expect(analyseArray([1,-2,3])).toEqual({average: 0.67, min: -2, max: 3, length: 3})
})

test('array analysis works with empty array', () => {
    expect(analyseArray([])).toEqual({average: undefined, min: undefined, max: undefined, length: 0})
})

