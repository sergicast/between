/**
 * Custom Range input.
 * @typedef RangeValues
 * @property {number} min Min value of the Range.
 * @property {number} max Max value of the Range.
 */

/**
 * Custom Range input.
 * @typedef PixelsToMove
 * @property {number} min Min value of the Range.
 * @property {number} max Max value of the Range.
 */

/**
 * Function that returns the pixels to add to the slider ball in static Range.
 * 
 * @param {RangeValues} range Object with max and min values.
 * @param {Number} selectedRange Selected range.
 * @param {Number} left Left position in pixels about initial left slider.
 * @param {Number} right Right position in pixels about initial left slider.
 * @returns {PixelsToMove} Return pixels to add to left or right slider.
 */
export const getPixelsToMove = (range, selectedRange, left, right) => {
    let pixelsLeft, pixelsRight;
    if (selectedRange === range.min) {
        pixelsLeft = 0;
    } else {
        const pixelsPerRange = ((right - left) / (range.max - range.min));
        pixelsLeft = pixelsPerRange * (selectedRange - range.min);
        pixelsRight = pixelsPerRange * (selectedRange - range.max);
    }
    return {
        leftPixelsAdd: pixelsLeft,
        rightPixelsAdd: pixelsRight
    }
};
