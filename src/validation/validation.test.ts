import { isValidIPAddress, isValidSubnetMask, isValidCIDR } from "./index";

describe("IP Address Validation", () => {
  describe("isValidIPAddress", () => {
    it("should return true for valid IP addresses", () => {
      expect(isValidIPAddress("192.168.1.1")).toBe(true);
      expect(isValidIPAddress("10.0.0.1")).toBe(true);
      expect(isValidIPAddress("172.16.0.1")).toBe(true);
      expect(isValidIPAddress("255.255.255.255")).toBe(true);
      expect(isValidIPAddress("0.0.0.0")).toBe(true);
    });

    it("should return false for invalid IP addresses", () => {
      expect(isValidIPAddress("256.1.2.3")).toBe(false);
      expect(isValidIPAddress("192.168.1")).toBe(false);
      expect(isValidIPAddress("192.168.1.1.5")).toBe(false);
      expect(isValidIPAddress(" 192.168.1.1")).toBe(false);
      expect(isValidIPAddress("192.168.1.1 ")).toBe(false);
      expect(isValidIPAddress("192.168.01.1")).toBe(false);
      expect(isValidIPAddress("192.168..1")).toBe(false);
      expect(isValidIPAddress("192.168.1.1.")).toBe(false);
      expect(isValidIPAddress(".192.168.1.1")).toBe(false);
      expect(isValidIPAddress("a.b.c.d")).toBe(false);
    });
  });

  describe("isValidSubnetMask", () => {
    it("should return true for valid subnet masks", () => {
      expect(isValidSubnetMask("255.255.255.0")).toBe(true);
      expect(isValidSubnetMask("255.255.255.255")).toBe(true);
      expect(isValidSubnetMask("255.255.255.192")).toBe(true);
      expect(isValidSubnetMask("255.255.254.0")).toBe(true);
      expect(isValidSubnetMask("255.255.252.0")).toBe(true);
    });

    it("should return false for invalid subnet masks", () => {
      expect(isValidSubnetMask("255.255.256.0")).toBe(false);
      expect(isValidSubnetMask("255.255.255.1")).toBe(false);
      expect(isValidSubnetMask("255.255.255.160")).toBe(false);
      expect(isValidSubnetMask("255.255.239.0")).toBe(false);
      expect(isValidSubnetMask("0.255.255.0")).toBe(false);
    });
  });

  describe("isValidCIDR", () => {
    it("should return true for valid CIDR notations", () => {
      expect(isValidCIDR("192.168.1.0/24")).toBe(true);
      expect(isValidCIDR("10.0.0.0/8")).toBe(true);
      expect(isValidCIDR("172.16.0.0/12")).toBe(true);
      expect(isValidCIDR("0.0.0.0/0")).toBe(true);
      expect(isValidCIDR("255.255.255.255/32")).toBe(true);
    });

    it("should return false for invalid CIDR notations", () => {
      expect(isValidCIDR("192.168.1.0/33")).toBe(false);
      expect(isValidCIDR("192.168.1.0")).toBe(false);
      expect(isValidCIDR("192.168.1.1/24/32")).toBe(false);
      expect(isValidCIDR("192.168.1.1/24.5")).toBe(false);
      expect(isValidCIDR("192.168.1.1/")).toBe(false);
      expect(isValidCIDR(" 192.168.1.0/24")).toBe(false);
      expect(isValidCIDR("192.168.1.0/24 ")).toBe(false);
      expect(isValidCIDR("256.0.0.0/8")).toBe(false);
      expect(isValidCIDR("192.168.1.0/-1")).toBe(false);
      expect(isValidCIDR("a.b.c.d/24")).toBe(false);
    });
  });
});
