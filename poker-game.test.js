const handOut = require('./poker-game');

describe('Poker game', () => {
    test('insert a poker', () => {
        expect(handOut(['Th', 'Td', 'Tf', 'Tc', '2c'])).toStrictEqual(
            'You have a Poker!'
        )
    })
    test('insert a Royal Flush', () => {
        expect(handOut(['Ah', 'Kh', 'Qh', 'Jh', 'Th'])).toStrictEqual(
            'You have a Royal Flush!'
        )
    })
    test('insert a Royal Straight', () => {
        expect(handOut(['Af', 'Kc', 'Qd', 'Jh', 'Th'])).toStrictEqual(
            'You have a Royal Straight!'
        )
    })
    test('insert a Flush', () => {
        expect(handOut(['7f', '3f', 'Qf', '8f', 'Tf'])).toStrictEqual(
            'You have a Flush!'
        )
    })
    test('insert a Straight', () => {
        expect(handOut(['3c', '4f', '5d', '6h', '7f'])).toStrictEqual(
            'You have a Straight!'
        )
    })
    test('insert a Full', () => {
        expect(handOut(['Tc', 'Tf', 'Td', '6h', '6f'])).toStrictEqual(
            'You have a Full!'
        )
    })
    test('insert a Tris', () => {
        expect(handOut(['Kc', 'Kf', 'Kd', '9h', '6f'])).toStrictEqual(
            'You have a Tris!'
        )
    })
    test('insert a Pair', () => {
        expect(handOut(['Ac', 'Af', '6d', '9h', '2f'])).toStrictEqual(
            'You have a Pair!'
        )
    })
    test('insert a High Card', () => {
        expect(handOut(['Ac', '5f', '6d', '9h', '2f'])).toStrictEqual(
            'You have a High Card!'
        )
    })
})