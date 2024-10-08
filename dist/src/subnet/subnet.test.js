"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../subnet/index");
describe("Subnet Calculations", () => {
    describe("calculateNetworkAddress", () => {
        it("should calculate the correct network address", () => {
            expect((0, index_1.calculateNetworkAddress)("192.168.1.100", "255.255.255.0")).toBe("192.168.1.0");
            expect((0, index_1.calculateNetworkAddress)("10.0.0.50", "255.0.0.0")).toBe("10.0.0.0");
            expect((0, index_1.calculateNetworkAddress)("172.16.50.100", "255.255.0.0")).toBe("172.16.0.0");
        });
    });
    describe("calculateBroadcastAddress", () => {
        it("should calculate the correct broadcast address", () => {
            expect((0, index_1.calculateBroadcastAddress)("192.168.1.100", "255.255.255.0")).toBe("192.168.1.255");
            expect((0, index_1.calculateBroadcastAddress)("10.0.0.50", "255.0.0.0")).toBe("10.255.255.255");
            expect((0, index_1.calculateBroadcastAddress)("172.16.50.100", "255.255.0.0")).toBe("172.16.255.255");
        });
    });
    describe("calculateAvailableIPs", () => {
        it("should calculate the correct available IP addresses", () => {
            const ips = (0, index_1.calculateAvailableIPs)("192.168.1.0", "255.255.255.252");
            expect(ips).toEqual(["192.168.1.1", "192.168.1.2"]);
        });
        it("should return an empty array for a /31 subnet", () => {
            const ips = (0, index_1.calculateAvailableIPs)("192.168.1.0", "255.255.255.254");
            expect(ips).toEqual([]);
        });
        it("should return an empty array for a /32 subnet", () => {
            const ips = (0, index_1.calculateAvailableIPs)("192.168.1.1", "255.255.255.255");
            expect(ips).toEqual([]);
        });
    });
    describe("getSubnetInfo", () => {
        it("should return correct subnet information for a /24 network", () => {
            const info = (0, index_1.getSubnetInfo)("192.168.1.100", "255.255.255.0");
            expect(info).toEqual({
                networkAddress: "192.168.1.0",
                broadcastAddress: "192.168.1.255",
                totalHosts: 256,
                usableHosts: 254,
                firstUsableHost: "192.168.1.1",
                lastUsableHost: "192.168.1.254",
            });
        });
        it("should return correct subnet information for a /16 network", () => {
            const info = (0, index_1.getSubnetInfo)("172.16.50.100", "255.255.0.0");
            expect(info).toEqual({
                networkAddress: "172.16.0.0",
                broadcastAddress: "172.16.255.255",
                totalHosts: 65536,
                usableHosts: 65534,
                firstUsableHost: "172.16.0.1",
                lastUsableHost: "172.16.255.254",
            });
        });
        it("should return correct subnet information for a /31 network", () => {
            const info = (0, index_1.getSubnetInfo)("192.168.1.0", "255.255.255.254");
            expect(info).toEqual({
                networkAddress: "192.168.1.0",
                broadcastAddress: "192.168.1.1",
                totalHosts: 2,
                usableHosts: 2,
                firstUsableHost: "192.168.1.0",
                lastUsableHost: "192.168.1.1",
            });
        });
        it("should return correct subnet information for a /32 network", () => {
            const info = (0, index_1.getSubnetInfo)("192.168.1.1", "255.255.255.255");
            expect(info).toEqual({
                networkAddress: "192.168.1.1",
                broadcastAddress: "192.168.1.1",
                totalHosts: 1,
                usableHosts: 0,
                firstUsableHost: "192.168.1.1",
                lastUsableHost: "192.168.1.1",
            });
        });
    });
});
