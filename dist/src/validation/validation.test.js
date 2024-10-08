"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("IP Address Validation", () => {
    describe("isValidIPAddress", () => {
        it("should return true for valid IP addresses", () => {
            expect((0, index_1.isValidIPAddress)("192.168.1.1")).toBe(true);
            expect((0, index_1.isValidIPAddress)("10.0.0.1")).toBe(true);
            expect((0, index_1.isValidIPAddress)("172.16.0.1")).toBe(true);
            expect((0, index_1.isValidIPAddress)("255.255.255.255")).toBe(true);
            expect((0, index_1.isValidIPAddress)("0.0.0.0")).toBe(true);
        });
        it("should return false for invalid IP addresses", () => {
            expect((0, index_1.isValidIPAddress)("256.1.2.3")).toBe(false);
            expect((0, index_1.isValidIPAddress)("192.168.1")).toBe(false);
            expect((0, index_1.isValidIPAddress)("192.168.1.1.5")).toBe(false);
            expect((0, index_1.isValidIPAddress)(" 192.168.1.1")).toBe(false);
            expect((0, index_1.isValidIPAddress)("192.168.1.1 ")).toBe(false);
            expect((0, index_1.isValidIPAddress)("192.168.01.1")).toBe(false);
            expect((0, index_1.isValidIPAddress)("192.168..1")).toBe(false);
            expect((0, index_1.isValidIPAddress)("192.168.1.1.")).toBe(false);
            expect((0, index_1.isValidIPAddress)(".192.168.1.1")).toBe(false);
            expect((0, index_1.isValidIPAddress)("a.b.c.d")).toBe(false);
        });
    });
    describe("isValidSubnetMask", () => {
        it("should return true for valid subnet masks", () => {
            expect((0, index_1.isValidSubnetMask)("255.255.255.0")).toBe(true);
            expect((0, index_1.isValidSubnetMask)("255.255.255.255")).toBe(true);
            expect((0, index_1.isValidSubnetMask)("255.255.255.192")).toBe(true);
            expect((0, index_1.isValidSubnetMask)("255.255.254.0")).toBe(true);
            expect((0, index_1.isValidSubnetMask)("255.255.252.0")).toBe(true);
        });
        it("should return false for invalid subnet masks", () => {
            expect((0, index_1.isValidSubnetMask)("255.255.256.0")).toBe(false);
            expect((0, index_1.isValidSubnetMask)("255.255.255.1")).toBe(false);
            expect((0, index_1.isValidSubnetMask)("255.255.255.160")).toBe(false);
            expect((0, index_1.isValidSubnetMask)("255.255.239.0")).toBe(false);
            expect((0, index_1.isValidSubnetMask)("0.255.255.0")).toBe(false);
        });
    });
    describe("isValidCIDR", () => {
        it("should return true for valid CIDR notations", () => {
            expect((0, index_1.isValidCIDR)("192.168.1.0/24")).toBe(true);
            expect((0, index_1.isValidCIDR)("10.0.0.0/8")).toBe(true);
            expect((0, index_1.isValidCIDR)("172.16.0.0/12")).toBe(true);
            expect((0, index_1.isValidCIDR)("0.0.0.0/0")).toBe(true);
            expect((0, index_1.isValidCIDR)("255.255.255.255/32")).toBe(true);
        });
        it("should return false for invalid CIDR notations", () => {
            expect((0, index_1.isValidCIDR)("192.168.1.0/33")).toBe(false);
            expect((0, index_1.isValidCIDR)("192.168.1.0")).toBe(false);
            expect((0, index_1.isValidCIDR)("192.168.1.1/24/32")).toBe(false);
            expect((0, index_1.isValidCIDR)("192.168.1.1/24.5")).toBe(false);
            expect((0, index_1.isValidCIDR)("192.168.1.1/")).toBe(false);
            expect((0, index_1.isValidCIDR)(" 192.168.1.0/24")).toBe(false);
            expect((0, index_1.isValidCIDR)("192.168.1.0/24 ")).toBe(false);
            expect((0, index_1.isValidCIDR)("256.0.0.0/8")).toBe(false);
            expect((0, index_1.isValidCIDR)("192.168.1.0/-1")).toBe(false);
            expect((0, index_1.isValidCIDR)("a.b.c.d/24")).toBe(false);
        });
    });
});
