/** @type {import('jest').Config} */
const config = {
  verbose: true,
}; 

 module.exports = config;

 module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"],
  transform: {
      "^.+\\.(js|ts)$": "ts-jest"
  },
  setupFiles: ['<rootDir>/script/test-setup.js'],
  transformIgnorePatterns: [
      "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$",
      "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.ts$",
      "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.tsx$",
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|svg)$": "<rootDir>/__mocks__/fileMock.js"
    
  },
  "resolver": undefined
} 