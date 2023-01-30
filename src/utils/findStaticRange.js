export const findStaticRange = (staticRange, value) => {
    
    let selectedNum;
    staticRange.forEach(num => {
        if ((Math.trunc(num) - Math.trunc(value)) === 1) {
            selectedNum = num
        }
    });
    if(value === staticRange[0]) return value
    // if(value === staticRange[staticRange.length - 1]) return value
    return selectedNum;
};
