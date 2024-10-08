"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("IP Address Operations", () => {
    describe("getNextIPAddress", () => {
        it("should return the next IP address", () => {
            expect((0, index_1.getNextIPAddress)("192.168.1.1")).toBe("192.168.1.2");
        });
        it("should handle octet rollover", () => {
            expect((0, index_1.getNextIPAddress)("192.168.1.255")).toBe("192.168.2.0");
        });
        it("should handle IP address maximum", () => {
            expect((0, index_1.getNextIPAddress)("255.255.255.255")).toBe("0.0.0.0");
        });
    });
    describe("getPreviousIPAddress", () => {
        it("should return the previous IP address", () => {
            expect((0, index_1.getPreviousIPAddress)("192.168.1.2")).toBe("192.168.1.1");
        });
        it("should handle octet rollover", () => {
            expect((0, index_1.getPreviousIPAddress)("192.168.2.0")).toBe("192.168.1.255");
        });
        it("should handle IP address minimum", () => {
            expect((0, index_1.getPreviousIPAddress)("0.0.0.0")).toBe("255.255.255.255");
        });
    });
    describe("isIPAddressInSubnet", () => {
        it("should return true for IP in subnet", () => {
            expect((0, index_1.isIPAddressInSubnet)("192.168.1.50", "192.168.1.0", "255.255.255.0")).toBe(true);
        });
        it("should return false for IP not in subnet", () => {
            expect((0, index_1.isIPAddressInSubnet)("192.168.2.1", "192.168.1.0", "255.255.255.0")).toBe(false);
        });
    });
    describe("isPublicIP", () => {
        it("should return true for public IP", () => {
            expect((0, index_1.isPublicIP)("8.8.8.8")).toBe(true);
        });
        it("should return false for private IP", () => {
            expect((0, index_1.isPublicIP)("192.168.1.1")).toBe(false);
        });
    });
    describe("isPrivateIP", () => {
        it("should return true for private IP", () => {
            expect((0, index_1.isPrivateIP)("192.168.1.1")).toBe(true);
        });
        it("should return false for public IP", () => {
            expect((0, index_1.isPrivateIP)("8.8.8.8")).toBe(false);
        });
    });
    describe("getIPRange", () => {
        it("should return correct IP range", () => {
            expect((0, index_1.getIPRange)("192.168.1.1", "192.168.1.3")).toEqual([
                "192.168.1.1",
                "192.168.1.2",
                "192.168.1.3",
            ]);
        });
        it("should handle single IP range", () => {
            expect((0, index_1.getIPRange)("192.168.1.1", "192.168.1.1")).toEqual(["192.168.1.1"]);
        });
    });
    describe("compareIPAddresses", () => {
        it("should return -1 when first IP is less", () => {
            expect((0, index_1.compareIPAddresses)("192.168.1.1", "192.168.1.2")).toBe(-1);
        });
        it("should return 0 when IPs are equal", () => {
            expect((0, index_1.compareIPAddresses)("192.168.1.1", "192.168.1.1")).toBe(0);
        });
        it("should return 1 when first IP is greater", () => {
            expect((0, index_1.compareIPAddresses)("192.168.1.2", "192.168.1.1")).toBe(1);
        });
    });
});
