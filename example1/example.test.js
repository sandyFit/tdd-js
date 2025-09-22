const funcs = require('./example');

describe('Additive functions', () => {
    test('adds 1 + 2 to be 3', () => {
        expect(funcs.add(1, 2)).toBe(3);
    });
    
    test('subtract 1 - 2 to be -1', () => {
        expect(funcs.subtract(1, 2)).toBe(-1);
    })
});

describe('Multiplicative functions', () => {
    test('multiply 1 * 2 to be 2', () => {
        expect(funcs.multiply(1, 2)).toBe(2);
    });

    test('Divide 1 / 2 to be 0.5', () => {
        expect(funcs.divide(1, 2)).toBe(0.5);
    });
});

