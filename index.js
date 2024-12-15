function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    let arr = str.split('');
    arr.reverse();
    arr = arr.reduce((string, character) => string + character, '')
    return arr;
}

class Calculator {
    add(num1, num2) {

        return Number(num1) + Number(num2);
    }

    subtract(num1, num2) {
        return Number(num1) - Number(num2);
    }

    multiply(num1, num2) {
        return Number(num1) * Number(num2);
    }

    divide(num1, num2) {
        if (Number(num2) === 0) {
            throw new Error("Can't divide by zero");
        }
        return Number(num1) / Number(num2);
    }
}

const calc = new Calculator();


function caesarCipher(str, shiftFactor) {
    let letterArray = str.split('');
    let newWordArray = letterArray.map((letter) => {
        const charCode = letter.charCodeAt(0);
        let newLetter = '';
        if (96 < charCode && charCode < 123) {
            newLetter = String.fromCharCode((charCode + shiftFactor - 97) % 26 + 97)
        } else if (64 < charCode && charCode < 91) {
            newLetter = String.fromCharCode((charCode + shiftFactor - 65) % 26 + 65)
        } else {
            newLetter = String.fromCharCode(charCode)
        }
        
        return newLetter;
    });

    let newWord = newWordArray.reduce((acc, current) => {
        return acc += current;
    }, "")

    return newWord;
}

function analyseArray(arr) {
    const length = arr.length;
    const sum = arr.reduce((acc, number) => {
        return acc += number;
    }, 0) 
    const average = Math.round((100 * (sum / length)))/100;
    const min = Math.round(100 * Math.min(...arr))/100;
    const max = Math.round(100 * Math.max(...arr))/100;

    const object = {
        average: average,
        min: min,
        max: max,
        length: length
     };
     return object;
}

export { capitalise, reverseString, calc, caesarCipher, analyseArray }
