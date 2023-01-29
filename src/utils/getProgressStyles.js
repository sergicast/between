export const getProgressStyles = (leftProgess, rightProgess) => {
    return `linear-gradient(to right, 
        grey 0%, grey ${leftProgess + 1}%, aqua ${leftProgess + 1}%, 
        aqua ${rightProgess + 1}%, grey ${rightProgess + 1}%, grey 100%)`;
};
