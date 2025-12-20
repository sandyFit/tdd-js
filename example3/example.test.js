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
    /**
     *  Everything in JS is truthy except falsy values
     *  Falsy values: false, 0, "", null, undefined, NaN
     *  Empty objects and empting arrays are considered true but empty strings are false
     */

    test("toBeTruthy() tests for trythy values", () => {
        const a = true;
        const b = 43;
        const c = 43n;
        const d = 3.14;
        const e = "Hello";
        const f = {};
        const g = [];

        expect(a).toBeTruthy();
        expect(b).toBeTruthy();
        expect(c).toBeTruthy();
        expect(d).toBeTruthy();
        expect(e).toBeTruthy();
        expect(f).toBeTruthy();
        expect(g).toBeTruthy();
    });

    test("toBeFalsy() tests for falsy values", () => {
        const a = false;
        const b = 0; // or -0, 
        const c = 0n; // or -0n
        const d = 0.0;
        const e = "";
        const f = null;
        const g = undefined;
        const h = NaN;

        expect(a).toBeFalsy();
        expect(b).toBeFalsy();
        expect(c).toBeFalsy();
        expect(d).toBeFalsy();
        expect(e).toBeFalsy();
        expect(f).toBeFalsy();
        expect(g).toBeFalsy();
        expect(h).toBeFalsy();
    });
});

describe('Matchers for object properties', () => {
    test('test for a length property', () => {
        const a = [10, 20, 30];
        const b = "abcd";

        expect(a).toHaveLength(3);
        expect(b).toHaveLength(4);
    });

    test('test for an object property using dot syntax', () => {
        /**
         * Use toHaveProperty() to test if an object has a property
         * Your can specify the property using dot syntax
         */
        const employee = {
            name: "Trish",
            benefits: {
                car: { make: "Mazda", model: "6" },
                pay: { salary: 10_000, bonus: 500 }
            }
        }
        expect(employee).toHaveProperty("benefits.car.make");
        expect(employee).toHaveProperty("benefits.pay.bonus");
        expect(employee).not.toHaveProperty("benefits.yatch");
    });

    // You can also use the array syntax
    test('test for an object property using array syntax', () => {
        const product = {
            price: { unit: 100, dozen: 1_000 },
            category: { electronics: "cellphones" }
        }
        expect(product).toHaveProperty(["price", "unit"]);
        expect(product).not.toHaveProperty(["category", "wear"]);
    });

    // You can test for an object property that's an array element
    test("test for an object property that's an array element", () => {
        const employee = {
            name: "Trish",
            benefits: {
                car: { make: "Mazda", model: "6" },
                pay: { salary: 10_000, bonus: 500 }
            },
            skills: ["JS", "TS", "C#"]
        }
        expect(employee).toHaveProperty(["skills", 0]);
        expect(employee).toHaveProperty(["skills", 1]);
        expect(employee).toHaveProperty(["skills", 2]);
        expect(employee).not.toHaveProperty(["skills", 3]);
    });

    // You can pass in a second argument to specify the desired value
    test('test for an object property value', () => {
        const employee = {
            name: "Trish",
            benefits: {
                car: { make: "Mazda", model: "6" },
                pay: { salary: 10_000, bonus: 500 }
            },
            skills: ["JS", "TS", "C#"]
        }
        expect(employee).toHaveProperty("benefits.car.make", "Mazda");
        expect(employee).toHaveProperty("benefits.car.model", "6");
        expect(employee).toHaveProperty(["benefits", "pay", "salary"], 10_000);
        expect(employee).toHaveProperty(["skills", 0], "JS");
        expect(employee).not.toHaveProperty(["skills", 3], "JS");
    });
    
});

describe('Matchers for collections', () => {
    // npm run test -- -t collections (run all collections tests)
    // toContain compares reference not object values

    test('test for an item in an array', () => {
        const p1 = { name: "Joan", age: 21 };
        const p2 = { name: "John", age: 33 };
        const p3 = { name: "Mary", age: 45 };
        const p4 = { name: "Chris", age: 62 };
        const p5 = { name: "Jim", age: 19 };

        const people = [p1, p2, p3, p4];
        expect(people).toContain(p1);
        expect(people).not.toContain(p5);
        expect(people).not.toContain({ name: "Joan", age: 21 }); // it doesn't compare object values

    });

    test('test for a value in an Array', () => {
        // use toContainEqual() to test for a value in an Array
        const p1 = { name: "Joan", age: 21 };
        const p2 = { name: "John", age: 33 };
        const p3 = { name: "Mary", age: 45 };
        const p4 = { name: "Chris", age: 62 };
        const p5 = { name: "Jim", age: 19 };

        const people = [p1, p2, p3, p4];

        expect(people).toContainEqual({ name: "Joan", age: 21 });

    });

    test('test for a key in a Map', () => {
        /**
         * call has() on a Map to see if it has a key
         * Test if the result is truthy
         */
        const diallingCodes = new Map([
            ["SA", "+27"],
            ["NO", "+47"],
            ["SG", "+65"],
        ]);

        expect(diallingCodes.has("SA")).toBeTruthy();
        expect(diallingCodes.has("UK")).toBeFalsy();

    });
    
    test('test the value of an item in an Map', () => {
        // Call get() on a Map, to get the value for a key
        // Test if the result is what you expect
        const diallingCodes = new Map([
            ["SA", "+27"],
            ["NO", "+47"],
            ["SG", "+65"],
        ]);

        expect(diallingCodes.get("SG")).toBe("+65");
        expect(diallingCodes.get("UK")).toBeUndefined();
    });

    test('test for an item in a Set', () => {
        // Call has() on a Set to see if it has an item
        // Test if the result is truthy
        const countries = new Set()
            .add("SA")
            .add("NO")
            .add("SG")

        expect(countries.has("SG")).toBeTruthy();
        expect(countries.has("UK")).toBeFalsy();
    });
});

describe('Matchers for errors', () => {
    /**
     *  How to test that an error has occurred
     *  We'll see how to use toThrow() and toThrowError matchers
     *  You must enclose the code in a function, otherwise toThrow() won't 
     *  detect the error
     */
    test('toThrow() test if a function throws an error', () => {
        const badFunc = () => zzz + 1;
        const goodFunc = () => 2 + 2;

        expect(badFunc).toThrow();
        expect(goodFunc).not.toThrow();
    });

    /**
     * toThrow() takes an optional argument:
     * - The error object is an instance of a particular class
     * - The error message matches a specific string
     * - The error message matches a regular expression
     * - The error message include a substring
     */

    
});
