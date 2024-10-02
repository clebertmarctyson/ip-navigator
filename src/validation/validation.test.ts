import { isValidIPAddress } from "./index";

describe("isValidIPAddress", () => {
  test("valid IP addresses", () => {
    expect(isValidIPAddress("192.168.1.1")).toBe(true); // Passes
    expect(isValidIPAddress("255.255.255.255")).toBe(true); // Passes
    expect(isValidIPAddress("0.0.0.0")).toBe(true); // Passes
    expect(isValidIPAddress("10.0.0.1")).toBe(true); // Passes
  });

  test("invalid IP addresses", () => {
    expect(isValidIPAddress("256.1.2.3")).toBe(false); // Passes
    expect(isValidIPAddress("192.168.1")).toBe(false); // Passes
    expect(isValidIPAddress("192.168.1.1.5")).toBe(false); // Passes
    expect(isValidIPAddress("192.168.01.1")).toBe(false); // Passes
    expect(isValidIPAddress("192.168..1")).toBe(false); // Passes
    expect(isValidIPAddress("a.b.c.d")).toBe(false); // Passes
    expect(isValidIPAddress("192.168.1.")).toBe(false); // Passes
    expect(isValidIPAddress(".192.168.1.1")).toBe(false); // Passes
    expect(isValidIPAddress(" 192.168.1.1")).toBe(false); // Passes
    expect(isValidIPAddress("192.168.1.1 ")).toBe(false); // Passes
  });

  test("edge cases", () => {
    expect(isValidIPAddress("")).toBe(false); // Passes
    expect(isValidIPAddress("...")).toBe(false); // Passes
    expect(isValidIPAddress("192.168.1.1.")).toBe(false); // Passes
    expect(isValidIPAddress("192.168.1.1.0")).toBe(false); // Passes
  });
});
