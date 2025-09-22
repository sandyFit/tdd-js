describe('Matchers for Equality', () => {
    test('toBe() compares using ===', () => {
        const a = 20;
        const b = 20;

        expect(a).toBe(b);
        expect(a).not.toBe(21);
    });

    test('toBe() compares object identity', () => {
        const country1 = {
            name: "Colombia",
            population: 51_000_000,
        }
        const country2 = {
            name: "Colombia",
            population: 51_000_000,
        }

        expect(country1).toBe(country1);
        expect(country1).not.toBe(country2);
    });

    test('toEqual() compares object property values', () => {
        const country1 = {
            name: "Colombia",
            population: 51_000_000,
        }
        const country2 = {
            name: "Colombia",
            population: 51_000_000,
        }

        expect(country1).toEqual(country2);
    });

    test('toMatch() matches a string against an RE', () => {
        const message = "Bogota is the capital of Colombia";

        // ✅ Substring match
        expect(message).toMatch("Bogota");

        // ✅ Proper regex match (case insensitive, dots = wildcards)
        expect(message).toMatch(/Bog.../i);

        // ✅ Negative case
        expect(message).not.toMatch(/Mexico/);

        // ✅ This will pass because "bogota" (lowercase) doesn’t match case-sensitively
        expect(message).not.toMatch(/bogota/);
    });


    test('toMatchObject() matches a object properties', () => {
        const carOnSale = {
            make: "Mazda",
            model: "CX-30",
            fuel: "hybrid",
            color: "red",
        };

        const carDesired = {
            make: "Mazda",
            fuel: "hybrid",

        };

        expect(carOnSale).toMatchObject(carDesired);
    });
    
});

describe('Matchers for range', () => {
    
});

describe('Matchers for null, undefined or NaN', () => {
    
});

describe('Matchers for truth or falsehood', () => {
    
});

describe('Matchers for object properties', () => {
    
});

describe('Matchers for collections', () => {
    
});

describe('Matchers for errors', () => {
    
});
