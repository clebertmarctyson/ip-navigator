import { ipToBinary, binaryToIP } from "./index";

// Test cases for ipToBinary
describe("ipToBinary", () => {
  test("converts standard IP addresses correctly", () => {
    expect(ipToBinary("192.168.1.1")).toBe(
      "11000000.10101000.00000001.00000001"
    );
    expect(ipToBinary("10.0.0.1")).toBe("00001010.00000000.00000000.00000001");
    expect(ipToBinary("172.16.0.1")).toBe(
      "10101100.00010000.00000000.00000001"
    );
  });

  test("handles IP address with all zeros", () => {
    expect(ipToBinary("0.0.0.0")).toBe("00000000.00000000.00000000.00000000");
  });

  test("handles IP address with all 255s", () => {
    expect(ipToBinary("255.255.255.255")).toBe(
      "11111111.11111111.11111111.11111111"
    );
  });

  test("throws error for invalid IP addresses", () => {
    expect(() => ipToBinary("256.0.0.1")).toThrow();
    expect(() => ipToBinary("192.168.1")).toThrow();
    expect(() => ipToBinary("192.168.1.1.5")).toThrow();
    expect(() => ipToBinary("192.168..1")).toThrow();
  });

  test("throws error for non-numeric octets", () => {
    expect(() => ipToBinary("a.b.c.d")).toThrow();
  });

  test("throws error for empty string", () => {
    expect(() => ipToBinary("")).toThrow();
  });

  test("throws error for IP addresses with leading zeros", () => {
    expect(() => ipToBinary("192.168.01.1")).toThrow();
  });

  test("handles edge cases of valid IP addresses", () => {
    expect(ipToBinary("127.0.0.1")).toBe("01111111.00000000.00000000.00000001");
    expect(ipToBinary("1.2.3.4")).toBe("00000001.00000010.00000011.00000100");
  });
});

// Test cases for binaryToIP
describe("binaryToIP", () => {
  test("converts standard binary IP representations correctly", () => {
    expect(binaryToIP("11000000.10101000.00000001.00000001")).toBe(
      "192.168.1.1"
    );
    expect(binaryToIP("00001010.00000000.00000000.00000001")).toBe("10.0.0.1");
    expect(binaryToIP("10101100.00010000.00000000.00000001")).toBe(
      "172.16.0.1"
    );
  });

  test("handles binary IP with all zeros", () => {
    expect(binaryToIP("00000000.00000000.00000000.00000000")).toBe("0.0.0.0");
  });

  test("handles binary IP with all ones", () => {
    expect(binaryToIP("11111111.11111111.11111111.11111111")).toBe(
      "255.255.255.255"
    );
  });

  test("throws error for invalid binary representations", () => {
    expect(() => binaryToIP("11111111.11111111.11111111")).toThrow();
    expect(() =>
      binaryToIP("11111111.11111111.11111111.11111111.11111111")
    ).toThrow();
    expect(() => binaryToIP("111111111.11111111.11111111.11111111")).toThrow();
  });

  test("throws error for non-binary digits", () => {
    expect(() => binaryToIP("11000000.10101000.00000001.00000002")).toThrow();
    expect(() => binaryToIP("11000000.10101000.0000000a.00000001")).toThrow();
  });

  test("throws error for empty string", () => {
    expect(() => binaryToIP("")).toThrow();
  });

  test("throws error for binary representations without dots", () => {
    expect(() => binaryToIP("11000000101010000000000100000001")).toThrow();
  });

  test("throws error for binary representations with incorrect number of bits", () => {
    expect(() => binaryToIP("1100000.10101000.00000001.00000001")).toThrow();
    expect(() => binaryToIP("110000000.10101000.00000001.00000001")).toThrow();
  });

  test("handles edge cases of valid binary IP representations", () => {
    expect(binaryToIP("01111111.00000000.00000000.00000001")).toBe("127.0.0.1");
    expect(binaryToIP("00000001.00000010.00000011.00000100")).toBe("1.2.3.4");
  });

  test("throws error for binary representations with spaces", () => {
    expect(() => binaryToIP(" 11000000.10101000.00000001.00000001")).toThrow();
    expect(() => binaryToIP("11000000.10101000.00000001.00000001 ")).toThrow();
    expect(() => binaryToIP("11000000. 10101000.00000001.00000001")).toThrow();
  });
});
