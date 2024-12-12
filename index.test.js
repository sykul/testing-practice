import { capitalise, reverseString } from "."

test('first letter is capital', () => {
    expect(capitalise('tadsfasdf')).toEqual('Tadsfasdf')
})

test('a string is returned reversed', () => {
    expect(reverseString('blah')).toEqual('halb')
})