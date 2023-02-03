const { getPixelsToMove } = require('./');


describe('get pixels to move slider', () => {
    const range = [1.99, 5.99, 10.99, 30.99, 50.99, 100.99];
    let pixels = getPixelsToMove(range, 10.99, 250, 750);
    let pixelsWrong = getPixelsToMove([], 10.99, 250, 750);
    
    
    it('should return a number', () => {
        expect(typeof pixels).toBe('object');
        expect(typeof pixels.leftPixelsAdd).toBe('number');
        expect(typeof pixels.rightPixelsAdd).toBe('number');
    });
    
    it('should return a Nan on empty range parameter',() => {
        expect(typeof pixelsWrong).toBe('object');
        expect(pixelsWrong.leftPixelsAdd).toBe(NaN);
        expect(pixelsWrong.rightPixelsAdd).toBe(NaN);
    });

});
