const { cleanup } = require('@testing-library/react');
const { getProgressStyles } = require('./');


describe('get backgorund style string', () => {
    let style;

    beforeEach(() => {
        style = getProgressStyles(20, 80);
    });

    afterEach(cleanup);
    it('should return a number', () => {
        expect(typeof style).toBe('string');
    });

});
