import {
  ipToBinary,
  binaryToIP,
  ipToInteger,
  integerToIP,
  cidrToSubnetMask,
  subnetMaskToCIDR,
} from "../conversion/index";

// Describe the test suite
describe("IP Address Conversion", () => {
  // Describe the test suite for the ipToBinary function
  describe("ipToBinary", () => {
    it("should convert valid IP addresses to binary", () => {
      expect(ipToBinary("192.168.1.1")).toBe(
        "11000000.10101000.00000001.00000001"
      );
      expect(ipToBinary("10.0.0.1")).toBe(
        "00001010.00000000.00000000.00000001"
      );
      expect(ipToBinary("255.255.255.255")).toBe(
        "11111111.11111111.11111111.11111111"
      );
      expect(ipToBinary("0.0.0.0")).toBe("00000000.00000000.00000000.00000000");
    });

    it("should throw an error for invalid IP addresses", () => {
      expect(() => ipToBinary("256.0.0.1")).toThrow("Invalid IP address");
      expect(() => ipToBinary("192.168.1")).toThrow("Invalid IP address");
      expect(() => ipToBinary("a.b.c.d")).toThrow("Invalid IP address");
    });
  });

  // Describe the test suite for the binaryToIP function
  describe("binaryToIP", () => {
    it("should convert valid binary representations to IP addresses", () => {
      expect(binaryToIP("11000000.10101000.00000001.00000001")).toBe(
        "192.168.1.1"
      );
      expect(binaryToIP("00001010.00000000.00000000.00000001")).toBe(
        "10.0.0.1"
      );
      expect(binaryToIP("11111111.11111111.11111111.11111111")).toBe(
        "255.255.255.255"
      );
      expect(binaryToIP("00000000.00000000.00000000.00000000")).toBe("0.0.0.0");
    });

    it("should throw an error for invalid binary representations", () => {
      expect(() => binaryToIP("1100000.10101000.00000001.00000001")).toThrow(
        "Invalid binary IP address"
      );
      expect(() =>
        binaryToIP("11000000.10101000.00000001.00000001.00000000")
      ).toThrow("Invalid binary IP address");
      expect(() => binaryToIP("11000000.10101000.00000001.000000012")).toThrow(
        "Invalid binary IP address"
      );
    });
  });

  // Describe the test suite for the ipToInteger function
  describe("ipToInteger", () => {
    it("should convert valid IP addresses to integers", () => {
      expect(ipToInteger("192.168.1.1")).toBe(3232235777);
      expect(ipToInteger("10.0.0.1")).toBe(167772161);
      expect(ipToInteger("255.255.255.255")).toBe(4294967295);
      expect(ipToInteger("0.0.0.0")).toBe(0);
    });

    it("should throw an error for invalid IP addresses", () => {
      expect(() => ipToInteger("256.0.0.1")).toThrow("Invalid IP address");
      expect(() => ipToInteger("192.168.1")).toThrow("Invalid IP address");
      expect(() => ipToInteger("a.b.c.d")).toThrow("Invalid IP address");
    });
  });

  // Describe the test suite for the integerToIP function
  describe("integerToIP", () => {
    it("should convert valid integers to IP addresses", () => {
      expect(integerToIP(3232235777)).toBe("192.168.1.1");
      expect(integerToIP(167772161)).toBe("10.0.0.1");
      expect(integerToIP(4294967295)).toBe("255.255.255.255");
      expect(integerToIP(0)).toBe("0.0.0.0");
    });

    it("should throw an error for invalid integers", () => {
      expect(() => integerToIP(-1)).toThrow(
        "Input must be an integer between 0 and 4294967295"
      );
      expect(() => integerToIP(4294967296)).toThrow(
        "Input must be an integer between 0 and 4294967295"
      );
      expect(() => integerToIP(3.14)).toThrow(
        "Input must be an integer between 0 and 4294967295"
      );
    });
  });

  // Describe the test suite for the cidrToSubnetMask function
  describe("cidrToSubnetMask", () => {
    it("should convert valid CIDR notations to subnet masks", () => {
      expect(cidrToSubnetMask(24)).toBe("255.255.255.0");
      expect(cidrToSubnetMask(16)).toBe("255.255.0.0");
      expect(cidrToSubnetMask(8)).toBe("255.0.0.0");
      expect(cidrToSubnetMask(32)).toBe("255.255.255.255");
      expect(cidrToSubnetMask(0)).toBe("0.0.0.0");
    });

    it("should throw an error for invalid CIDR notations", () => {
      expect(() => cidrToSubnetMask(-1)).toThrow(
        "CIDR must be an integer between 0 and 32"
      );
      expect(() => cidrToSubnetMask(33)).toThrow(
        "CIDR must be an integer between 0 and 32"
      );
      expect(() => cidrToSubnetMask(3.14)).toThrow(
        "CIDR must be an integer between 0 and 32"
      );
    });
  });

  describe("subnetMaskToCIDR", () => {
    it("should convert valid subnet masks to CIDR notations", () => {
      expect(subnetMaskToCIDR("255.255.255.0")).toBe(24);
      expect(subnetMaskToCIDR("255.255.0.0")).toBe(16);
      expect(subnetMaskToCIDR("255.0.0.0")).toBe(8);
      expect(subnetMaskToCIDR("255.255.255.255")).toBe(32);
      expect(subnetMaskToCIDR("0.0.0.0")).toBe(0);
    });

    it("should throw an error for invalid subnet masks", () => {
      expect(() => subnetMaskToCIDR("255.255.255.1")).toThrow(
        "Invalid subnet mask"
      );
      expect(() => subnetMaskToCIDR("255.0.255.0")).toThrow(
        "Invalid subnet mask"
      );
      expect(() => subnetMaskToCIDR("192.168.1.1")).toThrow(
        "Invalid subnet mask"
      );
      expect(() => subnetMaskToCIDR("a.b.c.d")).toThrow("Invalid subnet mask");
    });
  });
});
