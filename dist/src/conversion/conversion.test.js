"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../conversion/index");
// Describe the test suite
describe("IP Address Conversion", () => {
    // Describe the test suite for the ipToBinary function
    describe("ipToBinary", () => {
        it("should convert valid IP addresses to binary", () => {
            expect((0, index_1.ipToBinary)("192.168.1.1")).toBe("11000000.10101000.00000001.00000001");
            expect((0, index_1.ipToBinary)("10.0.0.1")).toBe("00001010.00000000.00000000.00000001");
            expect((0, index_1.ipToBinary)("255.255.255.255")).toBe("11111111.11111111.11111111.11111111");
            expect((0, index_1.ipToBinary)("0.0.0.0")).toBe("00000000.00000000.00000000.00000000");
        });
        it("should throw an error for invalid IP addresses", () => {
            expect(() => (0, index_1.ipToBinary)("256.0.0.1")).toThrow("Invalid IP address");
            expect(() => (0, index_1.ipToBinary)("192.168.1")).toThrow("Invalid IP address");
            expect(() => (0, index_1.ipToBinary)("a.b.c.d")).toThrow("Invalid IP address");
        });
    });
    // Describe the test suite for the binaryToIP function
    describe("binaryToIP", () => {
        it("should convert valid binary representations to IP addresses", () => {
            expect((0, index_1.binaryToIP)("11000000.10101000.00000001.00000001")).toBe("192.168.1.1");
            expect((0, index_1.binaryToIP)("00001010.00000000.00000000.00000001")).toBe("10.0.0.1");
            expect((0, index_1.binaryToIP)("11111111.11111111.11111111.11111111")).toBe("255.255.255.255");
            expect((0, index_1.binaryToIP)("00000000.00000000.00000000.00000000")).toBe("0.0.0.0");
        });
        it("should throw an error for invalid binary representations", () => {
            expect(() => (0, index_1.binaryToIP)("1100000.10101000.00000001.00000001")).toThrow("Invalid binary IP address");
            expect(() => (0, index_1.binaryToIP)("11000000.10101000.00000001.00000001.00000000")).toThrow("Invalid binary IP address");
            expect(() => (0, index_1.binaryToIP)("11000000.10101000.00000001.000000012")).toThrow("Invalid binary IP address");
        });
    });
    // Describe the test suite for the ipToInteger function
    describe("ipToInteger", () => {
        it("should convert valid IP addresses to integers", () => {
            expect((0, index_1.ipToInteger)("192.168.1.1")).toBe(3232235777);
            expect((0, index_1.ipToInteger)("10.0.0.1")).toBe(167772161);
            expect((0, index_1.ipToInteger)("255.255.255.255")).toBe(4294967295);
            expect((0, index_1.ipToInteger)("0.0.0.0")).toBe(0);
        });
        it("should throw an error for invalid IP addresses", () => {
            expect(() => (0, index_1.ipToInteger)("256.0.0.1")).toThrow("Invalid IP address");
            expect(() => (0, index_1.ipToInteger)("192.168.1")).toThrow("Invalid IP address");
            expect(() => (0, index_1.ipToInteger)("a.b.c.d")).toThrow("Invalid IP address");
        });
    });
    // Describe the test suite for the integerToIP function
    describe("integerToIP", () => {
        it("should convert valid integers to IP addresses", () => {
            expect((0, index_1.integerToIP)(3232235777)).toBe("192.168.1.1");
            expect((0, index_1.integerToIP)(167772161)).toBe("10.0.0.1");
            expect((0, index_1.integerToIP)(4294967295)).toBe("255.255.255.255");
            expect((0, index_1.integerToIP)(0)).toBe("0.0.0.0");
        });
        it("should throw an error for invalid integers", () => {
            expect(() => (0, index_1.integerToIP)(-1)).toThrow("Input must be an integer between 0 and 4294967295");
            expect(() => (0, index_1.integerToIP)(4294967296)).toThrow("Input must be an integer between 0 and 4294967295");
            expect(() => (0, index_1.integerToIP)(3.14)).toThrow("Input must be an integer between 0 and 4294967295");
        });
    });
    // Describe the test suite for the cidrToSubnetMask function
    describe("cidrToSubnetMask", () => {
        it("should convert valid CIDR notations to subnet masks", () => {
            expect((0, index_1.cidrToSubnetMask)(24)).toBe("255.255.255.0");
            expect((0, index_1.cidrToSubnetMask)(16)).toBe("255.255.0.0");
            expect((0, index_1.cidrToSubnetMask)(8)).toBe("255.0.0.0");
            expect((0, index_1.cidrToSubnetMask)(32)).toBe("255.255.255.255");
            expect((0, index_1.cidrToSubnetMask)(0)).toBe("0.0.0.0");
        });
        it("should throw an error for invalid CIDR notations", () => {
            expect(() => (0, index_1.cidrToSubnetMask)(-1)).toThrow("CIDR must be an integer between 0 and 32");
            expect(() => (0, index_1.cidrToSubnetMask)(33)).toThrow("CIDR must be an integer between 0 and 32");
            expect(() => (0, index_1.cidrToSubnetMask)(3.14)).toThrow("CIDR must be an integer between 0 and 32");
        });
    });
    describe("subnetMaskToCIDR", () => {
        it("should convert valid subnet masks to CIDR notations", () => {
            expect((0, index_1.subnetMaskToCIDR)("255.255.255.0")).toBe(24);
            expect((0, index_1.subnetMaskToCIDR)("255.255.0.0")).toBe(16);
            expect((0, index_1.subnetMaskToCIDR)("255.0.0.0")).toBe(8);
            expect((0, index_1.subnetMaskToCIDR)("255.255.255.255")).toBe(32);
            expect((0, index_1.subnetMaskToCIDR)("0.0.0.0")).toBe(0);
        });
        it("should throw an error for invalid subnet masks", () => {
            expect(() => (0, index_1.subnetMaskToCIDR)("255.255.255.1")).toThrow("Invalid subnet mask");
            expect(() => (0, index_1.subnetMaskToCIDR)("255.0.255.0")).toThrow("Invalid subnet mask");
            expect(() => (0, index_1.subnetMaskToCIDR)("192.168.1.1")).toThrow("Invalid subnet mask");
            expect(() => (0, index_1.subnetMaskToCIDR)("a.b.c.d")).toThrow("Invalid subnet mask");
        });
    });
});
