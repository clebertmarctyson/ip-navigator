import {
  getNextIPAddress,
  getPreviousIPAddress,
  isIPAddressInSubnet,
  isPublicIP,
  isPrivateIP,
  getIPRange,
  compareIPAddresses,
} from "./index";

describe("IP Address Operations", () => {
  describe("getNextIPAddress", () => {
    it("should return the next IP address", () => {
      expect(getNextIPAddress("192.168.1.1")).toBe("192.168.1.2");
    });

    it("should handle octet rollover", () => {
      expect(getNextIPAddress("192.168.1.255")).toBe("192.168.2.0");
    });

    it("should handle IP address maximum", () => {
      expect(getNextIPAddress("255.255.255.255")).toBe("0.0.0.0");
    });
  });

  describe("getPreviousIPAddress", () => {
    it("should return the previous IP address", () => {
      expect(getPreviousIPAddress("192.168.1.2")).toBe("192.168.1.1");
    });

    it("should handle octet rollover", () => {
      expect(getPreviousIPAddress("192.168.2.0")).toBe("192.168.1.255");
    });

    it("should handle IP address minimum", () => {
      expect(getPreviousIPAddress("0.0.0.0")).toBe("255.255.255.255");
    });
  });

  describe("isIPAddressInSubnet", () => {
    it("should return true for IP in subnet", () => {
      expect(
        isIPAddressInSubnet("192.168.1.50", "192.168.1.0", "255.255.255.0")
      ).toBe(true);
    });

    it("should return false for IP not in subnet", () => {
      expect(
        isIPAddressInSubnet("192.168.2.1", "192.168.1.0", "255.255.255.0")
      ).toBe(false);
    });
  });

  describe("isPublicIP", () => {
    it("should return true for public IP", () => {
      expect(isPublicIP("8.8.8.8")).toBe(true);
    });

    it("should return false for private IP", () => {
      expect(isPublicIP("192.168.1.1")).toBe(false);
    });
  });

  describe("isPrivateIP", () => {
    it("should return true for private IP", () => {
      expect(isPrivateIP("192.168.1.1")).toBe(true);
    });

    it("should return false for public IP", () => {
      expect(isPrivateIP("8.8.8.8")).toBe(false);
    });
  });

  describe("getIPRange", () => {
    it("should return correct IP range", () => {
      expect(getIPRange("192.168.1.1", "192.168.1.3")).toEqual([
        "192.168.1.1",
        "192.168.1.2",
        "192.168.1.3",
      ]);
    });

    it("should handle single IP range", () => {
      expect(getIPRange("192.168.1.1", "192.168.1.1")).toEqual(["192.168.1.1"]);
    });
  });

  describe("compareIPAddresses", () => {
    it("should return -1 when first IP is less", () => {
      expect(compareIPAddresses("192.168.1.1", "192.168.1.2")).toBe(-1);
    });

    it("should return 0 when IPs are equal", () => {
      expect(compareIPAddresses("192.168.1.1", "192.168.1.1")).toBe(0);
    });

    it("should return 1 when first IP is greater", () => {
      expect(compareIPAddresses("192.168.1.2", "192.168.1.1")).toBe(1);
    });
  });
});
