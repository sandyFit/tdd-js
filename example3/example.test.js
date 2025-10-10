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
        expect(message).toMatch(/bog.../i);

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
    test('toBeLessThan() test for <', () => {
        const a = 1.5;
        const b = 2.5;
        expect(a).toBeLessThan(b);
        expect(b).not.toBeLessThan(a);
        
        // Works for bigInt too
        const c = 123456789987600034500532n;
        const d = 123456789987600034500533n;
        expect(c).toBeLessThan(d);
        expect(d).not.toBeLessThan(d);
    });

    test('toBeLessThanOrEqual()', () => {
        const a = 1.5;
        expect(a).toBeLessThanOrEqual(a);
        expect(a).toBeLessThanOrEqual(1.5);
        expect(a).not.toBeLessThanOrEqual(1.45);

        const b = 12345n;
        expect(b).toBeLessThanOrEqual(b);
        expect(b).toBeLessThanOrEqual(12345n);
        expect(b).not.toBeLessThanOrEqual(12344n);
    });

    test('toBeGreaterThan()', () => {
        const a = 1.5;
        const b = 34;
        expect(b).toBeGreaterThan(a);
        expect(a).toBeGreaterThan(1);
        expect(a).not.toBeGreaterThan(b);

        const c = 12345n;
        expect(c).toBeGreaterThan(12344n);
        expect(c).not.toBeGreaterThan(12346n);
    });

    test('toBeGreaterThanOrEqual()', () => {
        // First paranemeter: the number you want to compare against
        // Second parameter: number of digits after decimal point (default 2)
        const a = 1.5;
        expect(a).toBeGreaterThanOrEqual(a);
        expect(a).toBeGreaterThanOrEqual(1);
        expect(a).not.toBeGreaterThanOrEqual(3);

        const c = 12345n;
        expect(c).toBeGreaterThanOrEqual(c);
        expect(c).toBeGreaterThanOrEqual(12344n);
        expect(c).not.toBeGreaterThanOrEqual(12346n);
    });


    test('toBeClose() test for mathematical proximity', () => {
        const a = 10.12345;
        const b = 10.12348;
        expect(a).toBeCloseTo(b);
        expect(a).toBeCloseTo(b, 4);
        expect(a).not.toBeCloseTo(b, 6);
        
    });
});

describe('Matchers for null, undefined or NaN', () => {
    test('toBeNull() test for null values', () => {
        const a = null;
        const b = 43;
        expect(a).toBeNull();
        expect(b).not.toBeNull();
    });

    test('toBeDefined() test if a property is undefined', () => {
        const person = {
            name: "John",
            age: 32
        }
        expect(person.name).toBeDefined();
        expect(person.address).not.toBeDefined();
    });

    test('toBeNaN() test if a property is NaN', () => {
        const a = Math.sqrt(-25);
        const b = Math.sqrt(25);
        expect(a).toBeNaN();
        expect(b).not.toBeNaN();
    });

    // ✅ Positive tests
    test('should recognize explicit null assignment', () => {
        const car = { model: null };
        expect(car.model).toBeNull();
    });

    test('should detect undefined variable', () => {
        let car;
        expect(car).toBeUndefined();
        car = 'Tesla';
        expect(car).toBeDefined();
    });

    test('should detect NaN from invalid number conversion', () => {
        const invalidNumber = Number('Hello');
        expect(invalidNumber).toBeNaN();
    });

    test('should distinguish between null and undefined', () => {
        const data = { key: null };
        expect(data.key).toBeNull();
        expect(data.key).toBeDefined();
    });

    test('should confirm valid numeric results are not NaN', () => {
        const sum = 10 + 5;
        expect(sum).not.toBeNaN();
    });

    test('should handle undefined nested property safely', () => {
        const user = { profile: { name: "Alice" } };
        expect(user.profile.name).toBeDefined();
        expect(user.profile.age).toBeUndefined();
    });

    // ❌ Negative test cases — intentionally failing
    test('FAIL: toBeNull() should fail if value is undefined', () => {
        const x = undefined;
        expect(x).toBeNull(); // should fail
    });

    test('FAIL: toBeUndefined() should fail if value is null', () => {
        const y = null;
        expect(y).toBeUndefined(); // should fail
    });

    test('FAIL: toBeNaN() should fail for valid number', () => {
        const z = 123;
        expect(z).toBeNaN(); // should fail
    });

    test('FAIL: not.toBeDefined() should fail for defined value', () => {
        const message = "Hello";
        expect(message).not.toBeDefined(); // should fail
    });

    test('FAIL: not.toBeNull() should fail for null value', () => {
        const obj = null;
        expect(obj).not.toBeNull(); // should fail
    });
});



describe('Matchers for truth or falsehood', () => {
    
});

describe('Matchers for object properties', () => {
    
});

describe('Matchers for collections', () => {
    
});

describe('Matchers for errors', () => {
    
});
