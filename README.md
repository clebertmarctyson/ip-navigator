# @marctysonclebert/ip-navigator

## Table of Contents

- [@marctysonclebert/ip-navigator](#marctysonclebertip-navigator)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Documentation](#documentation)
    - [`isValidIPAddress(ipAddress: string): boolean`](#isvalidipaddressipaddress-string-boolean)
    - [`isValidBinaryIPAddress(binaryIPAddress: string): boolean`](#isvalidbinaryipaddressbinaryipaddress-string-boolean)
    - [`ipToBinary(ipAddress: string): string`](#iptobinaryipaddress-string-string)
    - [`binaryToIP(binaryIPAddress: string): string`](#binarytoipbinaryipaddress-string-string)
    - [`calculateSubnetMask(prefixLength: number): string`](#calculatesubnetmaskprefixlength-number-string)
    - [`calculateNetworkAddress(ipAddress: string, subnetMask: string): string`](#calculatenetworkaddressipaddress-string-subnetmask-string-string)
    - [`calculateBroadcastAddress(ipAddress: string, subnetMask: string): string`](#calculatebroadcastaddressipaddress-string-subnetmask-string-string)
    - [`getNextIPAddress(ipAddress: string): string`](#getnextipaddressipaddress-string-string)
    - [`getPreviousIPAddress(ipAddress: string): string`](#getpreviousipaddressipaddress-string-string)
    - [`isIPAddressInSubnet(ipAddress: string, networkAddress: string, subnetMask: string): boolean`](#isipaddressinsubnetipaddress-string-networkaddress-string-subnetmask-string-boolean)
    - [`getAvailableHostsCount(subnetMask: string): number`](#getavailablehostscountsubnetmask-string-number)
    - [`areIPAddressesEqual(firstIpAddress: string, secondIpAddress: string): boolean`](#areipaddressesequalfirstipaddress-string-secondipaddress-string-boolean)
  - [Contributing](#contributing)
  - [License](#license)
  - [Bugs and Issues](#bugs-and-issues)
  - [Credits](#credits)

## Description

ip-navigator is a versatile IP address package for developers and administrators. It provides a comprehensive set of tools for managing, converting, and calculating IP addresses effortlessly. Simplify networking tasks, perform validity checks, manipulate addresses, explore networks, and more. Boost your productivity with ip-navigator!

## Features

- Validate IP addresses
- Validate binary IP addresses
- Convert IP addresses to binary format
- Convert binary IP addresses to standard format
- Calculate subnet masks based on prefix length
- Calculate network addresses based on IP address and subnet mask
- Calculate broadcast addresses based on IP address and subnet mask
- Get the next IP address in sequential order
- Get the previous IP address in sequential order
- Check if an IP address is in a given subnet
- Get the number of available hosts in a subnet
- Check if two IP addresses are equal

## Installation

```bash
npm install @marctysonclebert/ip-navigator
```

## Usage

```javascript
import {
  isValidIPAddress,
  isValidBinaryIPAddress,
  ipToBinary,
  binaryToIP,
  calculateSubnetMask,
  calculateNetworkAddress,
  calculateBroadcastAddress,
  getNextIPAddress,
  getPreviousIPAddress,
  isIPAddressInSubnet,
  getAvailableHostsCount,
  areIPAddressesEqual,
} from "@marctysonclebert/ip-navigator";

const ipAddress = "192.168.0.1";

const isValid = isValidIPAddress(ipAddress);

const binaryIP = ipToBinary(ipAddress);

const prefixLength = 24;
const subnetMask = calculateSubnetMask(prefixLength);

const subnet = "192.168.0.0/24";
const isInRange = isIPAddressInSubnet(ipAddress, subnet);

const networkAddress = calculateNetworkAddress(ipAddress, subnetMask);

const broadcastAddress = calculateBroadcastAddress(ipAddress, subnetMask);

const nextIP = getNextIPAddress(ipAddress);

const previousIP = getPreviousIPAddress(ipAddress);

const availableHosts = getAvailableHostsCount(subnetMask);

const otherIPAddress = "192.168.0.2";

const areEqual = areIPAddressesEqual(ipAddress, otherIPAddress);

console.log(`Is ${ipAddress} valid? ${isValid}`);
console.log(`Binary representation of ${ipAddress}: ${binaryIP}`);
console.log(`Subnet mask for prefix length ${prefixLength}: ${subnetMask}`);
console.log(`Is ${ipAddress} in the subnet ${subnet}? ${isInRange}`);
console.log(
  `Network address for ${ipAddress} with subnet mask ${subnetMask}: ${networkAddress}`
);
console.log(
  `Broadcast address for ${ipAddress} with subnet mask ${subnetMask}: ${broadcastAddress}`
);
console.log(`Next IP address after ${ipAddress}: ${nextIP}`);
console.log(`Previous IP address before ${ipAddress}: ${previousIP}`);
console.log(
  `Number of available hosts with subnet mask ${subnetMask}: ${availableHosts}`
);
console.log(`Are ${ipAddress} and ${otherIPAddress} equal? ${areEqual}`);
```

## Documentation

### `isValidIPAddress(ipAddress: string): boolean`

Checks if an IP address is valid.

**Parameters:**

- `ipAddress` (string): The IP address to validate.

**Returns:**

- `boolean`: True if the IP address is valid, false otherwise.

### `isValidBinaryIPAddress(binaryIPAddress: string): boolean`

Checks if a binary IP address is valid.

**Parameters:**

- `binaryIPAddress` (string): The binary IP address to validate.

**Returns:**

- `boolean`: True if the

binary IP address is valid, false otherwise.

### `ipToBinary(ipAddress: string): string`

Converts an IP address to binary format.

**Parameters:**

- `ipAddress` (string): The IP address to convert.

**Returns:**

- `string`: The IP address converted to binary format.

### `binaryToIP(binaryIPAddress: string): string`

Converts a binary IP address to standard format.

**Parameters:**

- `binaryIPAddress` (string): The binary IP address to convert.

**Returns:**

- `string`: The IP address converted to standard format.

### `calculateSubnetMask(prefixLength: number): string`

Calculates the subnet mask based on a prefix length.

**Parameters:**

- `prefixLength` (number): The prefix length.

**Returns:**

- `string`: The calculated subnet mask.

### `calculateNetworkAddress(ipAddress: string, subnetMask: string): string`

Calculates the network address based on an IP address and subnet mask.

**Parameters:**

- `ipAddress` (string): The IP address.
- `subnetMask` (string): The subnet mask.

**Returns:**

- `string`: The calculated network address.

### `calculateBroadcastAddress(ipAddress: string, subnetMask: string): string`

Calculates the broadcast address based on an IP address and subnet mask.

**Parameters:**

- `ipAddress` (string): The IP address.
- `subnetMask` (string): The subnet mask.

**Returns:**

- `string`: The calculated broadcast address.

### `getNextIPAddress(ipAddress: string): string`

Gets the next IP address in sequential order.

**Parameters:**

- `ipAddress` (string): The current IP address.

**Returns:**

- `string`: The next IP address.

### `getPreviousIPAddress(ipAddress: string): string`

Gets the previous IP address in sequential order.

**Parameters:**

- `ipAddress` (string): The current IP address.

**Returns:**

- `string`: The previous IP address.

### `isIPAddressInSubnet(ipAddress: string, networkAddress: string, subnetMask: string): boolean`

Checks if an IP address is in a given subnet.

**Parameters:**

- `ipAddress` (string): The IP address to check.
- `networkAddress` (string): The network address of the subnet.
- `subnetMask` (string): The subnet mask.

**Returns:**

- `boolean`: True if the IP address is in the subnet, false otherwise.

### `getAvailableHostsCount(subnetMask: string): number`

Gets the number of available hosts in a subnet.

**Parameters:**

- `subnetMask` (string): The subnet mask.

**Returns:**

- `number`: The number of available hosts.

### `areIPAddressesEqual(firstIpAddress: string, secondIpAddress: string): boolean`

Checks if two IP addresses are equal.

**Parameters:**

- `firstIpAddress` (string): The first IP address.
- `secondIpAddress` (string): The second IP address.

**Returns:**

- `boolean`: True if the IP addresses are equal, false otherwise.

## Contributing

Thank you for considering contributing to the ip-navigator package! We welcome contributions from the community to help improve and enhance this project. To contribute, please follow these guidelines:

1. Fork the repository and create your branch from the main branch.

   ```
   git clone <repository_url>
   cd ip-navigator
   git checkout -b <branch_name>
   ```

2. Make your desired changes or additions to the codebase.

3. Ensure that your code follows the existing code style and conventions.

4. Write tests to cover your changes and ensure that existing tests pass.

5. Add files to the staging area.

   ```
   git add <file_path>    // Add a specific file
   git add .              // Add all files in the current directory
   ```

6. Commit your changes and provide clear and concise commit messages.

   ```
   git commit -m "Commit message"
   ```

7. Push your changes to your forked repository.

   ```
   git push origin <branch_name>
   ```

8. Submit a pull request to the main branch of the main repository.

9. Wait for the code review and address any feedback or comments.

Please note that all contributors are expected to adhere to the Code of Conduct. By participating in this project, you agree to abide by its terms.

If you have any questions or need further assistance, feel free to reach out by creating an issue or contacting the project maintainer.

We appreciate your valuable contributions and look forward to working with you to make ip-navigator even better!

Together, let's simplify IP address management and boost productivity!

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/clebertmarctyson/ip-navigator/blob/master/LICENSE) file for details.

## Bugs and Issues

If you encounter any bugs or issues, please report them [here](https://github.com/clebertmarctyson/ip-navigator/issues).

## Credits

ip-navigator is developed and maintained by [CLEBERT Marc Tyson](https://github.com/clebertmarctyson).
