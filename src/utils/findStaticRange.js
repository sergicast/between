export const findStaticRange = (staticRange, value) => {
    debugger
    let selectedNum;
    staticRange.forEach(num => {
        if ((Math.trunc(num) - Math.trunc(value)) === 1) {
            selectedNum = num
        }
    });
    if(value === staticRange[0]) return value
    return selectedNum;
};
