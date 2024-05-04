/** @type {import('jest').Config} */
//https://jestjs.io/docs/configuration <= See for more info
const config = {
automock: false,
clearMocks: true,
collectCoverage: true,
coverageDirectory: "coverage",
coverageProvider: "v8",
coverageReporters: [
  "json",
  "text",
  "xml",
  "lcov",
  "clover"
],

  // An object that configures minimum threshold enforcement for coverage results
coverageThreshold: undefined,

dependencyExtractor: undefined,

errorOnDeprecated: true,
fakeTimers: {
   "enableGlobally": false
},


globalSetup: undefined,

globalTeardown: undefined,

globals: {},

maxWorkers: undefined, //"50%",

moduleDirectories: [
  "node_modules"
],

moduleFileExtensions: [
     "js",
     "mjs",
     "cjs",
     "jsx",
     "ts",
     "tsx",
     "json",
     "node"
],
moduleNameMapper: {},
modulePathIgnorePatterns: [],
notify: false,
notifyMode: "failure-change",
reporters: undefined,
resolver: undefined,
resetMocks: false,
resetModules: false,
restoreMocks: false,
rootDir: './test/',
roots: [
    "<rootDir>"
],
verbose: true,


};

export default config;
