const { findStaticRange } = require('./');


describe('find static range function', () => {

    const range = [1.99, 5.99, 10.99, 30.99, 50.99, 100.99];

    it('should return a value from all of static range', () => {

        expect(findStaticRange(range, 0.99)).toBe(1.99);
        expect(findStaticRange(range, 4.99)).toBe(5.99);
        expect(findStaticRange(range, 9.99)).toBe(10.99);
        expect(findStaticRange(range, 29.99)).toBe(30.99);
        expect(findStaticRange(range, 49.99)).toBe(50.99);
        expect(findStaticRange(range, 99.99)).toBe(100.99);
    });

    it('should return an undefined value', () => {

        expect(findStaticRange(range, 2.99)).toBeUndefined();
        expect(findStaticRange(range, 74.99)).toBeUndefined();
        expect(findStaticRange(range, 20.99)).toBeUndefined();
        expect(findStaticRange(range, 28.99)).toBeUndefined();
    });

    it('should return a number', () => {
        const returnValue = findStaticRange(range, 0.99);
        expect(typeof returnValue).toBe('number');
    });
});
