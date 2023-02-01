/**
 * Function to obtain the progress of a slider.
 * @param {Number} value Current value of the slider position.
 * @param {Object} range Object with the minimum and maximum value of the range used.
 * @param {Number} range.min Minimum range.
 * @param {Number} range.max Maximum range.
 * 
 * @returns {Number} Progress of a slider.
 */
export const getSliderProgress = (value, range) => {
    const { min, max } = range;
    return ((value - min) / (max - min)) * 100
};
