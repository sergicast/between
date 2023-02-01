/**
 * Function to obtain the gradient for the background.
 * @param {number} leftProgess Left slider progress.
 * @param {number} rightProgess Right slider progress.
 * @returns {string} Background style.
 */
export const getProgressStyles = (leftProgess, rightProgess) => {
    return `linear-gradient(to right, 
        #fff 0%, #fff ${leftProgess + 1}%, #000 ${leftProgess + 1}%, 
        #000 ${rightProgess + 1}%, #fff ${rightProgess + 1}%, #fff 100%)`;
};
