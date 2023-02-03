/**
 * Function that returns the next value of the static range in the direction that the slider goes.
 * @param {Array} staticRange Array of the static ranks.
 * @param {Number} value Current slider value.
 * @returns {Number} Static value where the slider will jump.
 */
export const findStaticRange = (staticRange, value) => {
    
    let selectedNum;
    staticRange.forEach(num => {
        if ((Math.trunc(num) - Math.trunc(value)) === 1) {
            selectedNum = num
        }
    });
    if(value === staticRange[0]) return value;
    return selectedNum;
};
