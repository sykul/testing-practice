function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    let arr = str.split('');
    arr.reverse();
    arr = arr.reduce((string, character) => string + character, '')
    return arr;
}

export { capitalise, reverseString }
