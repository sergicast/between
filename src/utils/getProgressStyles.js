/**
 * Function to obtain the gradient for the background.
 * 
 * @param {Number} leftProgess Left slider progress.
 * @param {Number} rightProgess Right slider progress.
 * @returns {String} Background style.
 */
export const getProgressStyles = (leftProgess, rightProgess) => {
    return `linear-gradient(to right, 
        #fff 0%, #fff ${leftProgess + 1}%, #000 ${leftProgess + 1}%, 
        #000 ${rightProgess + 1}%, #fff ${rightProgess + 1}%, #fff 100%)`;
};
