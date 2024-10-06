import { isValidIPAddress, isValidSubnetMask, isValidCIDR } from "./index";

// Test cases for isValidIPAddress
describe("isValidIPAddress", () => {
  test("validates correct IP addresses", () => {
    expect(isValidIPAddress("192.168.1.1")).toBe(true);
    expect(isValidIPAddress("10.0.0.1")).toBe(true);
    expect(isValidIPAddress("172.16.0.1")).toBe(true);
    expect(isValidIPAddress("255.255.255.255")).toBe(true);
    expect(isValidIPAddress("0.0.0.0")).toBe(true);
  });

  test("invalidates IP addresses with numbers out of range", () => {
    expect(isValidIPAddress("256.0.0.1")).toBe(false);
    expect(isValidIPAddress("192.168.1.300")).toBe(false);
    expect(isValidIPAddress("-1.2.3.4")).toBe(false);
  });

  test("invalidates IP addresses with incorrect format", () => {
    expect(isValidIPAddress("192.168.1")).toBe(false);
    expect(isValidIPAddress("192.168.1.1.5")).toBe(false);
    expect(isValidIPAddress("192.168..1")).toBe(false);
    expect(isValidIPAddress("192.168.1.")).toBe(false);
    expect(isValidIPAddress(".192.168.1.1")).toBe(false);
  });

  test("invalidates IP addresses with non-numeric characters", () => {
    expect(isValidIPAddress("a.b.c.d")).toBe(false);
    expect(isValidIPAddress("192.168.1.x")).toBe(false);
  });

  test("invalidates empty string", () => {
    expect(isValidIPAddress("")).toBe(false);
  });

  test("invalidates IP addresses with leading zeros", () => {
    expect(isValidIPAddress("192.168.01.1")).toBe(false);
    expect(isValidIPAddress("172.016.0.1")).toBe(false);
  });

  test("invalidates IP addresses with spaces", () => {
    expect(isValidIPAddress(" 192.168.1.1")).toBe(false);
    expect(isValidIPAddress("192.168.1.1 ")).toBe(false);
    expect(isValidIPAddress("192. 168.1.1")).toBe(false);
  });

  test("invalidates IP addresses with hexadecimal notation", () => {
    expect(isValidIPAddress("0xC0.0xA8.0x01.0x01")).toBe(false);
  });

  test("invalidates IP addresses with octal notation", () => {
    expect(isValidIPAddress("0300.0250.0001.0001")).toBe(false);
  });
});

// Test cases for isValidSubnetMask
describe("isValidSubnetMask", () => {
  test("validates correct subnet masks", () => {
    expect(isValidSubnetMask("255.255.255.255")).toBe(true);
    expect(isValidSubnetMask("255.255.255.254")).toBe(true);
    expect(isValidSubnetMask("255.255.255.252")).toBe(true);
    expect(isValidSubnetMask("255.255.255.248")).toBe(true);
    expect(isValidSubnetMask("255.255.255.240")).toBe(true);
    expect(isValidSubnetMask("255.255.255.224")).toBe(true);
    expect(isValidSubnetMask("255.255.255.192")).toBe(true);
    expect(isValidSubnetMask("255.255.255.128")).toBe(true);
    expect(isValidSubnetMask("255.255.255.0")).toBe(true);
    expect(isValidSubnetMask("255.255.254.0")).toBe(true);
    expect(isValidSubnetMask("255.255.252.0")).toBe(true);
    expect(isValidSubnetMask("255.255.248.0")).toBe(true);
    expect(isValidSubnetMask("255.255.240.0")).toBe(true);
    expect(isValidSubnetMask("255.255.224.0")).toBe(true);
    expect(isValidSubnetMask("255.255.192.0")).toBe(true);
    expect(isValidSubnetMask("255.255.128.0")).toBe(true);
    expect(isValidSubnetMask("255.255.0.0")).toBe(true);
    expect(isValidSubnetMask("255.254.0.0")).toBe(true);
    expect(isValidSubnetMask("255.252.0.0")).toBe(true);
    expect(isValidSubnetMask("255.248.0.0")).toBe(true);
    expect(isValidSubnetMask("255.240.0.0")).toBe(true);
    expect(isValidSubnetMask("255.224.0.0")).toBe(true);
    expect(isValidSubnetMask("255.192.0.0")).toBe(true);
    expect(isValidSubnetMask("255.128.0.0")).toBe(true);
    expect(isValidSubnetMask("255.0.0.0")).toBe(true);
    expect(isValidSubnetMask("254.0.0.0")).toBe(true);
    expect(isValidSubnetMask("252.0.0.0")).toBe(true);
    expect(isValidSubnetMask("248.0.0.0")).toBe(true);
    expect(isValidSubnetMask("240.0.0.0")).toBe(true);
    expect(isValidSubnetMask("224.0.0.0")).toBe(true);
    expect(isValidSubnetMask("192.0.0.0")).toBe(true);
    expect(isValidSubnetMask("128.0.0.0")).toBe(true);
    expect(isValidSubnetMask("0.0.0.0")).toBe(true);
  });

  test("invalidates subnet masks with incorrect format", () => {
    expect(isValidSubnetMask("255.255.255")).toBe(false);
    expect(isValidSubnetMask("255.255.255.255.0")).toBe(false);
    expect(isValidSubnetMask("255.255.255.")).toBe(false);
    expect(isValidSubnetMask(".255.255.255")).toBe(false);
  });

  test("invalidates subnet masks with invalid values", () => {
    expect(isValidSubnetMask("255.255.255.256")).toBe(false);
    expect(isValidSubnetMask("255.255.256.0")).toBe(false);
    expect(isValidSubnetMask("255.256.0.0")).toBe(false);
    expect(isValidSubnetMask("256.0.0.0")).toBe(false);
  });

  test("invalidates subnet masks with non-contiguous bits", () => {
    expect(isValidSubnetMask("255.255.0.255")).toBe(false);
    expect(isValidSubnetMask("255.0.255.0")).toBe(false);
    expect(isValidSubnetMask("0.255.255.0")).toBe(false);
    expect(isValidSubnetMask("255.255.254.1")).toBe(false);
    expect(isValidSubnetMask("255.255.253.0")).toBe(false);
  });

  test("invalidates subnet masks with non-numeric characters", () => {
    expect(isValidSubnetMask("255.255.255.a")).toBe(false);
    expect(isValidSubnetMask("a.b.c.d")).toBe(false);
  });

  test("invalidates empty string", () => {
    expect(isValidSubnetMask("")).toBe(false);
  });

  test("invalidates subnet masks with leading zeros", () => {
    expect(isValidSubnetMask("255.255.255.04")).toBe(false);
    expect(isValidSubnetMask("255.255.0255.0")).toBe(false);
  });

  test("invalidates subnet masks with spaces", () => {
    expect(isValidSubnetMask(" 255.255.255.0")).toBe(false);
    expect(isValidSubnetMask("255.255.255.0 ")).toBe(false);
    expect(isValidSubnetMask("255. 255.255.0")).toBe(false);
  });
});

// Test cases for isValidCIDR
describe("isValidCIDR", () => {
  test("validates correct CIDR notations", () => {
    expect(isValidCIDR("192.168.0.0/24")).toBe(true);
    expect(isValidCIDR("10.0.0.0/8")).toBe(true);
    expect(isValidCIDR("172.16.0.0/12")).toBe(true);
    expect(isValidCIDR("0.0.0.0/0")).toBe(true);
    expect(isValidCIDR("255.255.255.255/32")).toBe(true);
  });

  test("validates edge cases of prefix length", () => {
    expect(isValidCIDR("192.168.1.1/0")).toBe(true);
    expect(isValidCIDR("192.168.1.1/32")).toBe(true);
  });

  test("invalidates CIDR with incorrect IP format", () => {
    expect(isValidCIDR("192.168.1/24")).toBe(false);
    expect(isValidCIDR("192.168.1.1.1/24")).toBe(false);
    expect(isValidCIDR("192.168..1/24")).toBe(false);
  });

  test("invalidates CIDR with invalid IP values", () => {
    expect(isValidCIDR("256.0.0.0/24")).toBe(false);
    expect(isValidCIDR("192.168.1.300/24")).toBe(false);
    expect(isValidCIDR("-1.2.3.4/24")).toBe(false);
  });

  test("invalidates CIDR with incorrect prefix format", () => {
    expect(isValidCIDR("192.168.1.1/")).toBe(false);
    expect(isValidCIDR("192.168.1.1/33")).toBe(false);
    expect(isValidCIDR("192.168.1.1/-1")).toBe(false);
  });

  test("invalidates CIDR with non-numeric characters", () => {
    expect(isValidCIDR("192.168.1.1/a")).toBe(false);
    expect(isValidCIDR("a.b.c.d/24")).toBe(false);
  });

  test("invalidates empty string", () => {
    expect(isValidCIDR("")).toBe(false);
  });

  test("invalidates CIDR with leading zeros in IP", () => {
    expect(isValidCIDR("192.168.01.1/24")).toBe(false);
  });

  test("invalidates CIDR with spaces", () => {
    expect(isValidCIDR(" 192.168.1.1/24")).toBe(false);
    expect(isValidCIDR("192.168.1.1/24 ")).toBe(false);
    expect(isValidCIDR("192.168.1.1 / 24")).toBe(false);
  });

  test("invalidates CIDR without prefix", () => {
    expect(isValidCIDR("192.168.1.1")).toBe(false);
  });

  test("invalidates CIDR with multiple slashes", () => {
    expect(isValidCIDR("192.168.1.1/24/32")).toBe(false);
  });

  test("invalidates CIDR with decimal prefix", () => {
    expect(isValidCIDR("192.168.1.1/24.5")).toBe(false);
  });
});
