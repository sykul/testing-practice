import { capitalise } from "."

test('first letter is capital', () => {
    expect(capitalise('tadsfasdf')).toEqual('Tadsfasdf')
})