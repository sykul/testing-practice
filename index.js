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

export { capitalise, reverseString, calc }
