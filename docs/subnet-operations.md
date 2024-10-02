# Subnet Operations

This document details the subnet operation functions available in the ip-navigator package.

## calculateSubnetMask(prefixLength: number): string

Calculates the subnet mask based on the given prefix length.

- **Parameters:**
  - `prefixLength: number` - The prefix length (0-32)
- **Returns:** `string` - The calculated subnet mask
- **Example:**
  ```typescript
  console.log(calculateSubnetMask(24));
  // Output: '255.255.255.0'
  ```

## calculateNetworkAddress(ipAddress: string, subnetMask: string): string

Calculates the network address based on an IP address and subnet mask.

- **Parameters:**
  - `ipAddress: string` - The IP address
  - `subnetMask: string` - The subnet mask
- **Returns:** `string` - The calculated network address
- **Example:**
  ```typescript
  console.log(calculateNetworkAddress("192.168.1.100", "255.255.255.0"));
  // Output: '192.168.1.0'
  ```

## calculateBroadcastAddress(ipAddress: string, subnetMask: string): string

Calculates the broadcast address based on an IP address and subnet mask.

- **Parameters:**
  - `ipAddress: string` - The IP address
  - `subnetMask: string` - The subnet mask
- **Returns:** `string` - The calculated broadcast address
- **Example:**
  ```typescript
  console.log(calculateBroadcastAddress("192.168.1.100", "255.255.255.0"));
  // Output: '192.168.1.255'
  ```

## calculateAvailableIPs(networkAddress: string, subnetMask: string): string[]

Calculates the available IP addresses in a subnet.

- **Parameters:**
  - `networkAddress: string` - The network address
  - `subnetMask: string` - The subnet mask
- **Returns:** `string[]` - An array of available IP addresses
- **Example:**
  ```typescript
  console.log(calculateAvailableIPs("192.168.1.0", "255.255.255.252"));
  // Output: ['192.168.1.1', '192.168.1.2']
  ```

## cidrToSubnetMask(cidr: number): string

Converts CIDR notation to a subnet mask.

- **Parameters:**
  - `cidr: number` - The CIDR prefix length (0-32)
- **Returns:** `string` - The corresponding subnet mask
- **Example:**
  ```typescript
  console.log(cidrToSubnetMask(24));
  // Output: '255.255.255.0'
  ```

## subnetMaskToCIDR(subnetMask: string): number

Converts a subnet mask to CIDR notation.

- **Parameters:**
  - `subnetMask: string` - The subnet mask
- **Returns:** `number` - The corresponding CIDR prefix length
- **Example:**
  ```typescript
  console.log(subnetMaskToCIDR("255.255.255.0"));
  // Output: 24
  ```

## getSubnetInfo(ipAddress: string, subnetMask: string): SubnetInfo

Retrieves comprehensive information about a subnet.

- **Parameters:**
  - `ipAddress: string` - An IP address within the subnet
  - `subnetMask: string` - The subnet mask
- **Returns:** `SubnetInfo` - An object containing subnet information
- **Example:**
  ```typescript
  console.log(getSubnetInfo("192.168.1.100", "255.255.255.0"));
  // Output:
  // {
  //   networkAddress: '192.168.1.0',
  //   broadcastAddress: '192.168.1.255',
  //   totalHosts: 256,
  //   usableHosts: 254,
  //   firstUsableHost: '192.168.1.1',
  //   lastUsableHost: '192.168.1.254'
  // }
  ```

## Additional Information

These subnet operation functions are essential for network planning, configuration, and troubleshooting. They allow you to perform various calculations related to subnets, which are crucial in IP networking. Here are some key points to remember:

- The subnet mask determines which portion of an IP address refers to the network and which refers to the host.
- CIDR (Classless Inter-Domain Routing) notation is a compact way to specify both the network address and subnet mask.
- The network address is the first address in a subnet, while the broadcast address is the last.
- Available IP addresses in a subnet exclude the network and broadcast addresses.

When using these functions, ensure that you provide valid IP addresses and subnet masks. It's recommended to use the validation functions from the validation module to check inputs before performing subnet operations.

For more IP-related operations or manipulations, refer to the other sections of the ip-navigator documentation.
