var enzyme = require('enzyme');
var Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

enzyme.configure({ adapter: new Adapter() })

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    moduleNameMapper:{
        "\\.(css)": "identity-obj-proxy"
    }
};

