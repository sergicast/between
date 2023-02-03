const { getSliderProgress } = require('./');


describe('get % progress about slider', () => {

    
    it('should return a number', () => {
        const progress = getSliderProgress(10, {min: 0, max: 100});
        expect(typeof progress).toBe('number');
    });
    
    it('should return a number', () => {
        const progresOne = getSliderProgress(10, {min: 0, max: 100});
        expect(progresOne).toBe(10);
        const progressTwo = getSliderProgress(50, {min: 0, max: 100});
        expect(progressTwo).toBe(50);
        const progressThree = getSliderProgress(80, {min: 0, max: 100});
        expect(progressThree).toBe(80);
        const progressFour = getSliderProgress(90, {min: 0, max: 100});
        expect(progressFour).toBe(90);
    });

    it('should return a NaN on wrong parameters', () => {
        const wrongProgress = getSliderProgress('string', {min: 0, max: 100});
        expect(wrongProgress).toBe(NaN);
    });

});
