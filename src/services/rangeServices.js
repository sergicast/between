export const getMinMaxRange = async () => {
    return await (await fetch('http://localhost:3000/getMinMaxValues')).json();
};

export const getStaticsRanges = async () => {
    return await (await fetch('http://localhost:3000/getStaticValues')).json();
};
