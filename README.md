# ip-navigator

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Validating IP Addresses](#validating-ip-addresses)
  - [Converting IP Addresses](#converting-ip-addresses)
  - [Subnet Operations](#subnet-operations)
  - [IP Address Operations](#ip-address-operations)
  - [CIDR Operations](#cidr-operations)
  - [IP Address Classification](#ip-address-classification)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)
- [Bugs and Issues](#bugs-and-issues)
- [Credits](#credits)

## Description

ip-navigator is a comprehensive and user-friendly JavaScript package designed to simplify IPv4 address management and subnet calculations. Whether you're a network administrator, developer, or student learning about networking, this tool provides an intuitive set of functions for handling various IP address operations.

## Features

- Validate IPv4 addresses
- Convert between decimal and binary IP formats
- Perform subnet calculations (network address, broadcast address, available hosts)
- Manipulate and compare IP addresses
- Work with CIDR notation
- Classify IP addresses (public, private, loopback, etc.)
- Generate IP address ranges
- Perform bitwise operations on IP addresses
- Check if IP addresses belong to specific subnets
- Convert between IP address and integer representations

## Installation

To install ip-navigator, run the following command in your terminal:

```bash
npm install ip-navigator
```

## Usage

First, import the package in your JavaScript or TypeScript file:

```javascript
import ipNavigator from "ip-navigator";
```

### Validating IP Addresses

#### `isValidIPAddress(ipAddress: string): boolean`

Checks if a given IPv4 address is valid.

Example:

```javascript
console.log(ipNavigator.isValidIPAddress("192.168.1.1")); // Output: true
console.log(ipNavigator.isValidIPAddress("256.0.0.1")); // Output: false
```

### Converting IP Addresses

#### `ipToBinary(ipAddress: string): string`

Converts an IPv4 address to its binary representation.

Example:

```javascript
console.log(ipNavigator.ipToBinary("192.168.1.1"));
// Output: 11000000.10101000.00000001.00000001
```

#### `binaryToIP(binaryIPAddress: string): string`

Converts a binary IPv4 address to its decimal representation.

Example:

```javascript
console.log(ipNavigator.binaryToIP("11000000.10101000.00000001.00000001"));
// Output: 192.168.1.1
```

### Subnet Operations

#### `calculateSubnetMask(prefixLength: number): string`

Calculates the subnet mask based on a given prefix length.

Example:

```javascript
console.log(ipNavigator.calculateSubnetMask(24));
// Output: 255.255.255.0
```

#### `calculateNetworkAddress(ipAddress: string, subnetMask: string): string`

Calculates the network address based on an IP address and subnet mask.

Example:

```javascript
console.log(
  ipNavigator.calculateNetworkAddress("192.168.1.100", "255.255.255.0")
);
// Output: 192.168.1.0
```

#### `calculateBroadcastAddress(ipAddress: string, subnetMask: string): string`

Calculates the broadcast address based on an IP address and subnet mask.

Example:

```javascript
console.log(
  ipNavigator.calculateBroadcastAddress("192.168.1.100", "255.255.255.0")
);
// Output: 192.168.1.255
```

### IP Address Operations

#### `getNextIPAddress(ipAddress: string): string`

Returns the next IP address in sequential order.

Example:

```javascript
console.log(ipNavigator.getNextIPAddress("192.168.1.1"));
// Output: 192.168.1.2
```

#### `getPreviousIPAddress(ipAddress: string): string`

Returns the previous IP address in sequential order.

Example:

```javascript
console.log(ipNavigator.getPreviousIPAddress("192.168.1.2"));
// Output: 192.168.1.1
```

#### `isIPAddressInSubnet(ipAddress: string, networkAddress: string, subnetMask: string): boolean`

Checks if an IP address belongs to a given subnet.

Example:

```javascript
console.log(
  ipNavigator.isIPAddressInSubnet(
    "192.168.1.100",
    "192.168.1.0",
    "255.255.255.0"
  )
);
// Output: true
```

### CIDR Operations

#### `cidrToSubnetMask(cidr: number): string`

Converts CIDR notation to a subnet mask.

Example:

```javascript
console.log(ipNavigator.cidrToSubnetMask(24));
// Output: 255.255.255.0
```

#### `subnetMaskToCIDR(subnetMask: string): number`

Converts a subnet mask to CIDR notation.

Example:

```javascript
console.log(ipNavigator.subnetMaskToCIDR("255.255.255.0"));
// Output: 24
```

### IP Address Classification

#### `isPublicIP(ipAddress: string): boolean`

Checks if an IP address is public.

Example:

```javascript
console.log(ipNavigator.isPublicIP("8.8.8.8")); // Output: true
console.log(ipNavigator.isPublicIP("192.168.1.1")); // Output: false
```

#### `isPrivateIP(ipAddress: string): boolean`

Checks if an IP address is private.

Example:

```javascript
console.log(ipNavigator.isPrivateIP("192.168.1.1")); // Output: true
console.log(ipNavigator.isPrivateIP("8.8.8.8")); // Output: false
```

## Error Handling

All functions in ip-navigator perform input validation. If an invalid input is provided (e.g., an incorrectly formatted IP address), the functions will typically return `false` for boolean functions or throw an error for other types of functions. Always check the return value and handle potential errors in your code.

## Contributing

We welcome contributions from the community! If you'd like to contribute to ip-navigator, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and write tests if applicable
4. Commit your changes and push to your fork
5. Create a pull request with a clear description of your changes

For more detailed information, please see our [CONTRIBUTING.md](https://github.com/clebertmarctyson/ip-navigator/blob/master/CONTRIBUTING.md) file.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/clebertmarctyson/ip-navigator/blob/master/LICENSE) file for details.

## Bugs and Issues

If you encounter any bugs or have suggestions for improvements, please report them on our [GitHub Issues page](https://github.com/clebertmarctyson/ip-navigator/issues).

## Credits

ip-navigator is developed and maintained by [CLEBERT Marc Tyson](https://github.com/clebertmarctyson).
