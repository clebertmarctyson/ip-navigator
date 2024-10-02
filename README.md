# ip-navigator

A comprehensive TypeScript/JavaScript package for IP address manipulation and subnet calculations.

## Table of Contents

- [ip-navigator](#ip-navigator)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
    - [TypeScript](#typescript)
    - [JavaScript](#javascript)
  - [API Reference](#api-reference)
  - [Documentation](#documentation)
  - [Contributing](#contributing)
  - [License](#license)
  - [Bugs and Issues](#bugs-and-issues)

## Description

ip-navigator is a powerful and user-friendly package designed to simplify IP address management and subnet calculations. It's written in TypeScript and can be used in both TypeScript and JavaScript projects. Whether you're a network administrator, developer, or student learning about networking, this tool provides an intuitive set of functions for handling various IP address operations.

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
- Full TypeScript support with type definitions

## Installation

To install ip-navigator, run the following command in your terminal:

```bash
npm install ip-navigator
```

Or if you're using pnpm:

```bash
pnpm add ip-navigator
```

## Usage

ip-navigator can be used in both TypeScript and JavaScript projects.

### TypeScript

```typescript
import ipNavigator from "ip-navigator";
// Or import specific functions
import { isValidIPAddress, ipToBinary } from "ip-navigator";

// Example usage
console.log(ipNavigator.isValidIPAddress("192.168.1.1")); // true
console.log(ipToBinary("192.168.1.1")); // '11000000.10101000.00000001.00000001'
```

### JavaScript

```javascript
const ipNavigator = require("ip-navigator");
// Or require specific functions
const { isValidIPAddress, ipToBinary } = require("ip-navigator");

// Example usage
console.log(ipNavigator.isValidIPAddress("192.168.1.1")); // true
console.log(ipToBinary("192.168.1.1")); // '11000000.10101000.00000001.00000001'
```

## API Reference

The ip-navigator package provides a wide range of functions categorized into four main areas:

1. Validation Functions
2. Conversion Functions
3. Subnet Operations
4. IP Address Operations

For a quick overview of all available functions, see the [Documentation](#documentation) section below.

## Documentation

Detailed documentation for each category of functions is available in separate files:

- [Validation Functions](docs/validation.md)
- [Conversion Functions](docs/conversion.md)
- [Subnet Operations](docs/subnet-operations.md)
- [IP Address Operations](docs/ip-address-operations.md)

Each documentation file provides in-depth information about the functions, including descriptions, parameters, return values, and usage examples.

## Contributing

We welcome contributions from the community! If you'd like to contribute to ip-navigator, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and write tests if applicable
4. Commit your changes and push to your fork
5. Create a pull request with a clear description of your changes

For more detailed information, please see our [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Bugs and Issues

If you encounter any bugs or have suggestions for improvements, please report them on our [GitHub Issues page](https://github.com/clebertmarctyson/ip-navigator/issues).
