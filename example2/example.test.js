import { add, subtract, multiply, divide } from './example.js';

describe('Additive functions', () => {
    test('adds 1 + 2 to be 3', () => {
        expect(add(1, 2)).toBe(3);
    });
    
    test('subtract 1 - 2 to be -1', () => {
        expect(subtract(1, 2)).toBe(-1);
    })
});

describe('Multiplicative functions', () => {
    test('multiply 1 * 2 to be 2', () => {
        expect(multiply(1, 2)).toBe(2);
    });

    test('Divide 1 / 2 to be 0.5', () => {
        expect(divide(1, 2)).toBe(0.5);
    });
});

