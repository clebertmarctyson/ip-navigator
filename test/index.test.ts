import {
  binaryToIP,
  calculateSubnetMask,
  ipToBinary,
  isValidBinaryIPAddress,
  isValidIPAddress,
} from "../index";

// isValidIPAddress
describe("isValidIPAddress", () => {
  it("Should return true for a valid IPv4 address", () => {
    expect(isValidIPAddress("192.168.0.1")).toBe(true);
  });

  it("Should return true for another valid IPv4 address", () => {
    expect(isValidIPAddress("10.0.0.0")).toBe(true);
  });

  it("Should return false for an invalid IPv4 address with a missing octet", () => {
    expect(isValidIPAddress("192.168.1")).toBe(false);
  });

  it("Should return false for an invalid IPv4 address with an octet exceeding 255", () => {
    expect(isValidIPAddress("192.168.256.1")).toBe(false);
  });

  it("Should return false for an invalid IPv4 address with a non-numeric octet", () => {
    expect(isValidIPAddress("192.168.0.abc")).toBe(false);
  });

  it("Should return true for a valid IPv4 address with single-digit octets", () => {
    expect(isValidIPAddress("1.2.3.4")).toBe(true);
  });

  it("Should return true for a valid IPv4 address with three-digit octets", () => {
    expect(isValidIPAddress("192.168.100.255")).toBe(true);
  });

  it("Should return false for an invalid IPv4 address with negative octets", () => {
    expect(isValidIPAddress("-10.0.0.1")).toBe(false);
  });

  it("Should return false for an invalid IPv4 address with an empty string", () => {
    expect(isValidIPAddress("")).toBe(false);
  });

  it("Should return false for an invalid IPv4 address with leading and trailing spaces", () => {
    expect(isValidIPAddress(" 192.168.0.1 ")).toBe(false);
  });

  it("Should return false for an invalid IPv4 address with special characters in octets", () => {
    expect(isValidIPAddress(" 192.168.0.@ ")).toBe(false);
  });

  it("Should return false for a valid IPv4 address with leading zeros", () => {
    expect(isValidIPAddress("192.168.001.001")).toBe(false);
  });

  it("Should return true for a valid IPv4 address with all zeros", () => {
    expect(isValidIPAddress("0.0.0.0")).toBe(true);
  });

  it("Should return false for an invalid IPv4 address with more than four octets", () => {
    expect(isValidIPAddress("192.168.0.1.1")).toBe(false);
  });

  it("Should return false for an invalid IPv4 address with octets exceeding three digits", () => {
    expect(isValidIPAddress("192.168.1000.1")).toBe(false);
  });

  it("Should return false for an invalid IPv4 address with octets containing leading zeros", () => {
    expect(isValidIPAddress("192.168.01.001")).toBe(false);
  });

  it("Should return false for an invalid IPv4 address with octets containing non-numeric characters", () => {
    expect(isValidIPAddress("192.1a8.0.1")).toBe(false);
  });

  it("Should return false for an invalid IPv4 address with octets containing negative values", () => {
    expect(isValidIPAddress("192.-168.0.1")).toBe(false);
  });

  it("Should return false for an invalid IPv4 address with octets exceeding 255", () => {
    expect(isValidIPAddress("192.168.0.256")).toBe(false);
  });

  it("Should return false for an invalid IPv4 address with whitespace characters", () => {
    expect(isValidIPAddress("192.168 .0.1")).toBe(false);
  });
});

// isValidBinaryIPAddress
describe("isValidBinaryIPAddress", () => {
  it("Should return true for a valid binary IP address", () => {
    expect(isValidBinaryIPAddress("11000000.10101000.00000001.00000001")).toBe(
      true
    );
  });

  it("Should return false for an invalid binary IP address with an octet containing non-binary characters", () => {
    expect(isValidBinaryIPAddress("11000000.10101000.0000000a.00000001")).toBe(
      false
    );
  });

  it("Should return false for an invalid binary IP address with less than 4 octets", () => {
    expect(isValidBinaryIPAddress("11000000.10101000.00000001")).toBe(false);
  });

  it("Should return false for an invalid binary IP address with more than 4 octets", () => {
    expect(
      isValidBinaryIPAddress("11000000.10101000.00000001.00000001.00000001")
    ).toBe(false);
  });

  it("Should return false for an invalid binary IP address with an octet longer than 8 characters", () => {
    expect(isValidBinaryIPAddress("110000001.10101000.00000001.00000001")).toBe(
      false
    );
  });

  it("Should return false for an invalid binary IP address with an octet shorter than 8 characters", () => {
    expect(isValidBinaryIPAddress("1100000.10101000.00000001.00000001")).toBe(
      false
    );
  });

  it("Should return false for an invalid binary IP address with leading whitespace", () => {
    expect(isValidBinaryIPAddress(" 11000000.10101000.00000001.00000001")).toBe(
      false
    );
  });

  it("Should return false for an invalid binary IP address with trailing whitespace", () => {
    expect(isValidBinaryIPAddress("11000000.10101000.00000001.00000001 ")).toBe(
      false
    );
  });

  it("Should return false for an invalid binary IP address with consecutive periods", () => {
    expect(isValidBinaryIPAddress("11000000..10101000.00000001.00000001")).toBe(
      false
    );
  });

  it("Should return true for a valid binary IP address with octets containing all 0s", () => {
    expect(isValidBinaryIPAddress("00000000.00000000.00000000.00000000")).toBe(
      true
    );
  });

  it("Should return true for a valid binary IP address with octets containing all 1s", () => {
    expect(isValidBinaryIPAddress("11111111.11111111.11111111.11111111")).toBe(
      true
    );
  });

  it("Should return false for an invalid binary IP address with an empty octet", () => {
    expect(isValidBinaryIPAddress(".10101000.00000001.00000001")).toBe(false);
  });

  it("Should return true for a valid binary IP address with an octet value not exceeding 255", () => {
    expect(isValidBinaryIPAddress("11000000.10101000.00000001.11111111")).toBe(
      true
    );
  });

  it("Should return false for an invalid binary IP address with an octet value below 0", () => {
    expect(isValidBinaryIPAddress("11000000.10101000.00000001.-0000001")).toBe(
      false
    );
  });

  it("Should return false for an invalid binary IP address with octets containing spaces", () => {
    expect(isValidBinaryIPAddress("11000000.1010 1000.00000001.00000001")).toBe(
      false
    );
  });

  it("Should return false for an invalid binary IP address with octets containing special characters", () => {
    expect(isValidBinaryIPAddress("11000000.10101000.00000001.@0000001")).toBe(
      false
    );
  });

  it("Should return false for an invalid binary IP address with octets containing mixed characters", () => {
    expect(isValidBinaryIPAddress("11000000.1010abc0.00000001.00000001")).toBe(
      false
    );
  });

  it("Should return false for an invalid binary IP address with missing octets", () => {
    expect(isValidBinaryIPAddress("11000000.10101000..00000001")).toBe(false);
  });

  it("Should return true for a valid binary IP address with extra leading zeros in octets", () => {
    expect(isValidBinaryIPAddress("00001111.00000011.00111000.00000001")).toBe(
      true
    );
  });

  it("Should return true for a valid binary IP address with leading zeros limited to one in each octet", () => {
    expect(isValidBinaryIPAddress("01111111.00000011.00111000.00000001")).toBe(
      true
    );
  });
});

// ipToBinary
describe("ipToBinary", () => {
  it("Should convert valid IPv4 address to binary", () => {
    expect(ipToBinary("192.168.0.1")).toBe(
      "11000000.10101000.00000000.00000001"
    );
  });

  it("Should convert another valid IPv4 address to binary", () => {
    expect(ipToBinary("10.0.0.0")).toBe("00001010.00000000.00000000.00000000");
  });

  it("Should throw an error for an invalid IPv4 address with missing octet", () => {
    expect(() => ipToBinary("192.168.1")).toThrow("Invalid IP Address");
  });

  it("Should throw an error for an invalid IPv4 address with octet exceeding 255", () => {
    expect(() => ipToBinary("192.168.256.1")).toThrow("Invalid IP Address");
  });

  it("Should throw an error for an invalid IPv4 address with non-numeric octet", () => {
    expect(() => ipToBinary("192.168.0.abc")).toThrow("Invalid IP Address");
  });

  it("Should convert valid IPv4 address with single-digit octets to binary", () => {
    expect(ipToBinary("1.2.3.4")).toBe("00000001.00000010.00000011.00000100");
  });

  it("Should convert valid IPv4 address with three-digit octets to binary", () => {
    expect(ipToBinary("192.168.100.255")).toBe(
      "11000000.10101000.01100100.11111111"
    );
  });

  it("Should throw an error for an invalid IPv4 address with negative octets", () => {
    expect(() => ipToBinary("-10.0.0.1")).toThrow("Invalid IP Address");
  });

  it("Should throw an error for an empty IPv4 address", () => {
    expect(() => ipToBinary("")).toThrow("Invalid IP Address");
  });

  it("Should throw an error for an IPv4 address with leading/trailing whitespace", () => {
    expect(() => ipToBinary(" 192.168.0.1 ")).toThrow("Invalid IP Address");
  });

  it("Should throw an error for an IPv4 address with octets containing special characters", () => {
    expect(() => ipToBinary("192.168.0.@")).toThrow("Invalid IP Address");
  });

  it("Should throw an error for an invalid IPv4 address with leading zeros in octets", () => {
    expect(() => ipToBinary("192.168.001.001")).toThrow("Invalid IP Address");
  });

  it("Should convert valid IPv4 address with all zeros in octets to binary", () => {
    expect(ipToBinary("0.0.0.0")).toBe("00000000.00000000.00000000.00000000");
  });

  it("Should convert valid IPv4 address with all 255 in octets to binary", () => {
    expect(ipToBinary("255.255.255.255")).toBe(
      "11111111.11111111.11111111.11111111"
    );
  });

  it("Should convert valid IPv4 address with random octet values to binary", () => {
    expect(ipToBinary("123.45.67.89")).toBe(
      "01111011.00101101.01000011.01011001"
    );
  });

  it("Should throw an error for an IPv4 address with invalid format", () => {
    expect(() => ipToBinary("192.168.0")).toThrow("Invalid IP Address");
  });

  it("Should throw an error for an IPv4 address with invalid characters", () => {
    expect(() => ipToBinary("192.168.0.xyz")).toThrow("Invalid IP Address");
  });

  it("Should throw an error for an IPv4 address with octets exceeding 255", () => {
    expect(() => ipToBinary("256.256.256.256")).toThrow("Invalid IP Address");
  });

  it("Should throw an error for an IPv4 address with negative octet values", () => {
    expect(() => ipToBinary("-10.-20.-30.-40")).toThrow("Invalid IP Address");
  });

  it("Should throw an error for an IPv4 address with octets containing leading zeros", () => {
    expect(() => ipToBinary("192.168.010.001")).toThrow("Invalid IP Address");
  });

  it("Should throw an error for an IPv4 address with whitespace in octets", () => {
    expect(() => ipToBinary("192.168.0 .1")).toThrow("Invalid IP Address");
  });
});

// binaryToIP
describe("binaryToIP", () => {
  it("Should convert valid binary IP address to standard format", () => {
    expect(binaryToIP("11000000.10101000.00000001.00000001")).toBe(
      "192.168.1.1"
    );
  });

  it("Should convert valid binary IP address with all zeros to standard format", () => {
    expect(binaryToIP("00000000.00000000.00000000.00000000")).toBe("0.0.0.0");
  });

  it("Should convert valid binary IP address with all ones to standard format", () => {
    expect(binaryToIP("11111111.11111111.11111111.11111111")).toBe(
      "255.255.255.255"
    );
  });

  it("Should convert valid binary IP address with random values to standard format", () => {
    expect(binaryToIP("01111011.00101101.01000011.01011001")).toBe(
      "123.45.67.89"
    );
  });

  it("Should throw an error for an invalid binary IP address with invalid format", () => {
    expect(() => binaryToIP("11000000.10101000.00000001")).toThrow(
      "Invalid IP Address"
    );
  });

  it("Should throw an error for an invalid binary IP address with invalid characters", () => {
    expect(() => binaryToIP("11000000.10101000.00000001.xyz")).toThrow(
      "Invalid IP Address"
    );
  });

  it("Should not throw an error for a valid binary IP address", () => {
    expect(() => binaryToIP("11000000.10101000.00000001.11111111")).not.toThrow(
      "Invalid IP Address"
    );
  });

  it("Should throw an error for an invalid binary IP address with negative octet values", () => {
    expect(() => binaryToIP("-10.-20.-30.-40")).toThrow("Invalid IP Address");
  });

  it("Should not throw an error for a valid binary IP address", () => {
    expect(() => binaryToIP("00001111.00000011.00111000.00000001")).not.toThrow(
      "Invalid IP Address"
    );
  });

  it("Should throw an error for an invalid binary IP address with whitespace in octets", () => {
    expect(() => binaryToIP("11000000.10101000.00000001 .11111111")).toThrow(
      "Invalid IP Address"
    );
  });

  it("Should throw an error for an invalid binary IP address with missing octets", () => {
    expect(() => binaryToIP("11000000.10101000.00000001")).toThrow(
      "Invalid IP Address"
    );
  });

  it("Should throw an error for an invalid binary IP address with extra octets", () => {
    expect(() =>
      binaryToIP("11000000.10101000.00000001.11111111.00000000")
    ).toThrow("Invalid IP Address");
  });

  it("Should throw an error for an invalid binary IP address with non-binary values", () => {
    expect(() => binaryToIP("11000000.10101000.00000002.11111111")).toThrow(
      "Invalid IP Address"
    );
  });

  it("Should throw an error for an invalid binary IP address with negative values", () => {
    expect(() => binaryToIP("11000000.10101000.00000001.11111111.-10")).toThrow(
      "Invalid IP Address"
    );
  });

  it("Should throw an error for an invalid binary IP address with leading whitespace", () => {
    expect(() => binaryToIP(" 11000000.10101000.00000001.11111111")).toThrow(
      "Invalid IP Address"
    );
  });

  it("Should throw an error for an invalid binary IP address with trailing whitespace", () => {
    expect(() => binaryToIP("11000000.10101000.00000001.11111111 ")).toThrow(
      "Invalid IP Address"
    );
  });

  it("Should throw an error for an empty binary IP address", () => {
    expect(() => binaryToIP("")).toThrow("Invalid IP Address");
  });

  it("Should throw an error for an invalid binary IP address with incorrect delimiter", () => {
    expect(() => binaryToIP("11000000/10101000/00000001/11111111")).toThrow(
      "Invalid IP Address"
    );
  });

  it("Should throw an error for an invalid binary IP address with mixed delimiters", () => {
    expect(() => binaryToIP("11000000.10101000/00000001:11111111")).toThrow(
      "Invalid IP Address"
    );
  });

  it("Should throw an error for an invalid binary IP address with missing delimiters", () => {
    expect(() => binaryToIP("1100000010101000000001111111")).toThrow(
      "Invalid IP Address"
    );
  });
});

// calculateSubnetMask
describe("calculateSubnetMask", () => {
  it("Should calculate subnet mask for prefix length 1", () => {
    expect(calculateSubnetMask(1)).toBe("128.0.0.0");
  });

  it("Should calculate subnet mask for prefix length 8", () => {
    expect(calculateSubnetMask(8)).toBe("255.0.0.0");
  });

  it("Should calculate subnet mask for prefix length 16", () => {
    expect(calculateSubnetMask(16)).toBe("255.255.0.0");
  });

  it("Should calculate subnet mask for prefix length 24", () => {
    expect(calculateSubnetMask(24)).toBe("255.255.255.0");
  });

  it("Should calculate subnet mask for prefix length 32", () => {
    expect(calculateSubnetMask(32)).toBe("255.255.255.255");
  });

  it("Should throw an error for prefix length less than 1", () => {
    expect(() => calculateSubnetMask(0)).toThrow("Invalid Prefix Length");
  });

  it("Should throw an error for prefix length greater than 32", () => {
    expect(() => calculateSubnetMask(33)).toThrow("Invalid Prefix Length");
  });

  it("Should throw an error for invalid prefix length (negative number)", () => {
    expect(() => calculateSubnetMask(-1)).toThrow("Invalid Prefix Length");
  });

  it("Should throw an error for invalid prefix length (non-integer)", () => {
    expect(() => calculateSubnetMask(10.5)).toThrow("Invalid Prefix Length");
  });

  it("Should calculate subnet mask for prefix length 2", () => {
    expect(calculateSubnetMask(2)).toBe("192.0.0.0");
  });

  it("Should calculate subnet mask for prefix length 4", () => {
    expect(calculateSubnetMask(4)).toBe("240.0.0.0");
  });

  it("Should calculate subnet mask for prefix length 12", () => {
    expect(calculateSubnetMask(12)).toBe("255.240.0.0");
  });

  it("Should calculate subnet mask for prefix length 20", () => {
    expect(calculateSubnetMask(20)).toBe("255.255.240.0");
  });

  it("Should calculate subnet mask for prefix length 28", () => {
    expect(calculateSubnetMask(28)).toBe("255.255.255.240");
  });

  it("Should calculate subnet mask for prefix length 5", () => {
    expect(calculateSubnetMask(5)).toBe("248.0.0.0");
  });

  it("Should calculate subnet mask for prefix length 13", () => {
    expect(calculateSubnetMask(13)).toBe("255.248.0.0");
  });

  it("Should calculate subnet mask for prefix length 21", () => {
    expect(calculateSubnetMask(21)).toBe("255.255.248.0");
  });

  it("Should calculate subnet mask for prefix length 29", () => {
    expect(calculateSubnetMask(29)).toBe("255.255.255.248");
  });

  it("Should calculate subnet mask for prefix length 10", () => {
    expect(calculateSubnetMask(10)).toBe("255.192.0.0");
  });

  it("Should calculate subnet mask for prefix length 30", () => {
    expect(calculateSubnetMask(30)).toBe("255.255.255.252");
  });
});
