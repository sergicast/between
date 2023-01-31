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
