"use strict";
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/test/**/*.test.ts"],
    roots: ["./test"],
    moduleFileExtensions: ["ts", "js"],
    modulePathIgnorePatterns: ["./node_modules"],
};
