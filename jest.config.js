module.exports = {
    moduleFileExtensions: ['js', 'jsx'],
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    transform: {
        '\\.[jt]sx?$': 'babel-jest',
        "^.+\\.svg$": "<rootDir>/svgTransform.js"
    },
    setupFilesAfterEnv: ['./setup-tests.js'],
    roots: [
        'src'
    ],
    testEnvironment: "jsdom"
};
