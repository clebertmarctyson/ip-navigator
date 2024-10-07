# ip-navigator

A comprehensive TypeScript package for IP address manipulation and subnet calculations.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
  - [Validation Functions](#validation-functions)
  - [Conversion Functions](#conversion-functions)
  - [Subnet Operations](#subnet-operations)
  - [IP Address Operations](#ip-address-operations)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Bugs and Issues](#bugs-and-issues)

## Description

ip-navigator is a powerful and user-friendly TypeScript package designed to simplify IP address management and subnet calculations. Whether you're a network administrator, developer, or student learning about networking, this tool provides an intuitive set of functions for handling various IP address operations.

## Features

- Validate IPv4 addresses and subnet masks
- Convert between decimal, binary, and integer IP formats
- Perform subnet calculations (network address, broadcast address, available hosts)
- Manipulate and compare IP addresses
- Work with CIDR notation
- Classify IP addresses (public, private)
- Generate IP address ranges
- Check if IP addresses belong to specific subnets
- Full TypeScript support with type definitions
- Comprehensive test suite using Jest

## Installation

To install ip-navigator, run the following command in your terminal:

```bash
npm install ip-navigator
```

```bash
pnpm add ip-navigator
```

## Usage

ip-navigator is designed for use in TypeScript projects. Here's a basic example of how to use it:

```javascript
import { isValidIPAddress, ipToBinary } from "ip-navigator";

// Example usage
console.log(isValidIPAddress("192.168.1.1")); // true
console.log(ipToBinary("192.168.1.1")); // '11000000.10101000.00000001.00000001'
```

## API Reference

### Validation Functions

#### isValidIPAddress(ipAddress: string): boolean

Validates whether the given string is a valid IPv4 address.

```javascript
isValidIPAddress("192.168.1.1"); // returns true
isValidIPAddress("256.1.2.3"); // returns false
```

#### isValidSubnetMask(subnetMask: string): boolean

Checks if the given string is a valid subnet mask.

```javascript
isValidSubnetMask("255.255.255.0"); // returns true
isValidSubnetMask("255.255.256.0"); // returns false
```

#### isValidCIDR(cidr: string): boolean

Checks if the given string is a valid CIDR notation.

```javascript
isValidCIDR("192.168.1.0/24"); // returns true
isValidCIDR("192.168.1.0/33"); // returns false
```

### Conversion Functions

#### ipToBinary(ipAddress: string): string

Converts an IPv4 address to its binary representation.

```javascript
ipToBinary("192.168.1.1"); // returns '11000000.10101000.00000001.00000001'
```

#### binaryToIP(binaryIP: string): string

Converts a binary representation of an IP address to its decimal format.

```javascript
binaryToIP("11000000.10101000.00000001.00000001"); // returns '192.168.1.1'
```

#### ipToInteger(ipAddress: string): number

Converts an IPv4 address to its integer representation.

```javascript
ipToInteger("192.168.1.1"); // returns 3232235777
```

#### integerToIP(integer: number): string

Converts an integer representation of an IP address to its decimal format.

```javascript
integerToIP(3232235777); // returns '192.168.1.1'
```

### Subnet Operations

#### calculateNetworkAddress(ipAddress: string, subnetMask: string): string

Calculates the network address based on an IP address and subnet mask.

```javascript
calculateNetworkAddress("192.168.1.100", "255.255.255.0"); // returns '192.168.1.0'
```

#### calculateBroadcastAddress(ipAddress: string, subnetMask: string): string

Calculates the broadcast address based on an IP address and subnet mask.

```javascript
calculateBroadcastAddress("192.168.1.100", "255.255.255.0"); // returns '192.168.1.255'
```

#### getSubnetInfo(ipAddress: string, subnetMask: string): SubnetInfo

Retrieves comprehensive information about a subnet.

```javascript
getSubnetInfo("192.168.1.100", "255.255.255.0");
// returns {
//   networkAddress: '192.168.1.0',
//   broadcastAddress: '192.168.1.255',
//   totalHosts: 256,
//   usableHosts: 254,
//   firstUsableHost: '192.168.1.1',
//   lastUsableHost: '192.168.1.254'
// }
```

### IP Address Operations

#### getNextIPAddress(ipAddress: string): string

Returns the next IP address in sequential order.

```javascript
getNextIPAddress("192.168.1.1"); // returns '192.168.1.2'
```

#### getPreviousIPAddress(ipAddress: string): string

Returns the previous IP address in sequential order.

```javascript
getPreviousIPAddress("192.168.1.2"); // returns '192.168.1.1'
```

#### isIPAddressInSubnet(ipAddress: string, networkAddress: string, subnetMask: string): boolean

Checks if an IP address belongs to a given subnet.

```javascript
isIPAddressInSubnet("192.168.1.100", "192.168.1.0", "255.255.255.0"); // returns true
```

#### isPublicIP(ipAddress: string): boolean

Checks if an IP address is a public IP address.

```javascript
isPublicIP("8.8.8.8"); // returns true
isPublicIP("192.168.1.1"); // returns false
```

#### isPrivateIP(ipAddress: string): boolean

Checks if an IP address is a private IP address.

```javascript
isPrivateIP("192.168.1.1"); // returns true
isPrivateIP("8.8.8.8"); // returns false
```

#### getIPRange(startIP: string, endIP: string): string[]

Generates an array of IP addresses within the specified range.

```javascript
getIPRange("192.168.1.1", "192.168.1.3");
// returns ['192.168.1.1', '192.168.1.2', '192.168.1.3']
```

## Testing

ip-navigator uses Jest for unit testing. To run the tests, use the following command:

```bash
pnpm test # or npm test
```

Our test suite covers all functions in the package, ensuring reliability and correctness. We strive for high test coverage and encourage contributors to write tests for any new features or bug fixes.

## Contributing

We welcome contributions from the community! If you'd like to contribute to ip-navigator, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and write tests if applicable
4. Ensure all tests pass by running `pnpm test # or npm test`
5. Commit your changes and push to your fork
6. Create a pull request with a clear description of your changes

Please ensure that your code adheres to the existing style and that all tests pass before submitting a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/clebertmarctyson/ip-navigator/blob/master/LICENSE) file for details.

## Bugs and Issues

If you encounter any bugs or have suggestions for improvements, please report them on our [GitHub Issues page](https://github.com/clebertmarctyson/ip-navigator/issues). When reporting an issue, please include:

- A clear and descriptive title
- A detailed description of the issue
- Steps to reproduce the problem
- Expected behavior
- Actual behavior
- Any relevant code snippets or error messages

Your feedback helps us improve ip-navigator for everyone!
