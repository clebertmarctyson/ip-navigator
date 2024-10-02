# Conversion Functions

This document details the conversion functions available in the ip-navigator package.

## ipToBinary(ipAddress: string): string

Converts an IPv4 address to its binary representation.

- **Parameters:**
  - `ipAddress: string` - The IP address to convert
- **Returns:** `string` - The binary representation of the IP address
- **Example:**
  ```typescript
  console.log(ipToBinary("192.168.1.1"));
  // Output: '11000000.10101000.00000001.00000001'
  ```

## binaryToIP(binaryIP: string): string

Converts a binary representation of an IP address to its decimal format.

- **Parameters:**
  - `binaryIP: string` - The binary representation of an IP address
- **Returns:** `string` - The decimal format of the IP address
- **Example:**
  ```typescript
  console.log(binaryToIP("11000000.10101000.00000001.00000001"));
  // Output: '192.168.1.1'
  ```

## ipToInteger(ipAddress: string): number

Converts an IPv4 address to its integer representation.

- **Parameters:**
  - `ipAddress: string` - The IP address to convert
- **Returns:** `number` - The integer representation of the IP address
- **Example:**
  ```typescript
  console.log(ipToInteger("192.168.1.1"));
  // Output: 3232235777
  ```

## integerToIP(integer: number): string

Converts an integer representation of an IP address to its decimal format.

- **Parameters:**
  - `integer: number` - The integer representation of an IP address
- **Returns:** `string` - The decimal format of the IP address
- **Example:**
  ```typescript
  console.log(integerToIP(3232235777));
  // Output: '192.168.1.1'
  ```

## Additional Information

These conversion functions are crucial for various IP address manipulations and calculations. They allow you to convert between different representations of IP addresses, which can be useful in various networking scenarios:

- Binary representations are useful for subnet calculations and bitwise operations.
- Integer representations can be helpful for storing IP addresses efficiently or performing arithmetic operations on them.

When using these functions, keep in mind:

- The binary representation uses dots to separate octets for readability, matching the format of decimal IP addresses.
- The integer representation treats the IP address as a 32-bit number, which can be useful for certain algorithms or database storage.
- All these functions assume valid IPv4 addresses. It's recommended to use the validation functions from the validation module before performing conversions to ensure input integrity.

For more IP-related operations or manipulations, refer to the other sections of the ip-navigator documentation.
