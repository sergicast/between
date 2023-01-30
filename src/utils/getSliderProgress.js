export const getSliderProgress = (value, range) => {
    const { min, max } = range;
    return ((value - min) / (max - min)) * 100
};
