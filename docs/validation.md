# Validation Functions

This document details the validation functions available in the ip-navigator package.

## isValidIPAddress(ipAddress: string): boolean

Checks if the given string is a valid IPv4 address.

- **Parameters:**
  - `ipAddress: string` - The IP address to validate
- **Returns:** `boolean` - `true` if the IP address is valid, `false` otherwise
- **Example:**
  ```typescript
  console.log(isValidIPAddress("192.168.1.1")); // true
  console.log(isValidIPAddress("256.0.0.1")); // false
  ```

## isValidSubnetMask(subnetMask: string): boolean

Checks if the given string is a valid subnet mask.

- **Parameters:**
  - `subnetMask: string` - The subnet mask to validate
- **Returns:** `boolean` - `true` if the subnet mask is valid, `false` otherwise
- **Example:**
  ```typescript
  console.log(isValidSubnetMask("255.255.255.0")); // true
  console.log(isValidSubnetMask("255.255.256.0")); // false
  ```

## isValidCIDR(cidr: string): boolean

Checks if the given string is a valid CIDR notation.

- **Parameters:**
  - `cidr: string` - The CIDR notation to validate
- **Returns:** `boolean` - `true` if the CIDR notation is valid, `false` otherwise
- **Example:**
  ```typescript
  console.log(isValidCIDR("192.168.1.0/24")); // true
  console.log(isValidCIDR("192.168.1.0/33")); // false
  ```

## isIPv4(ipAddress: string): boolean

Checks if the given string is a valid IPv4 address.

- **Parameters:**
  - `ipAddress: string` - The IP address to check
- **Returns:** `boolean` - `true` if the address is a valid IPv4 address, `false` otherwise
- **Example:**
  ```typescript
  console.log(isIPv4("192.168.1.1")); // true
  console.log(isIPv4("2001:0db8:85a3:0000:0000:8a2e:0370:7334")); // false
  ```

## Additional Information

These validation functions are essential for ensuring the integrity of input data when working with IP addresses and subnet masks. They can be used as prerequisites for other operations in the ip-navigator package to prevent errors caused by invalid inputs.

When using these functions, keep in mind:

- IPv4 addresses should be in the format `x.x.x.x` where x is a number between 0 and 255.
- Subnet masks should be in the same format as IPv4 addresses but follow specific patterns (e.g., 255.255.255.0, 255.255.0.0).
- CIDR notation combines an IP address with a prefix length (e.g., 192.168.1.0/24).

For more complex validation scenarios or additional IP-related operations, refer to the other sections of the ip-navigator documentation.
