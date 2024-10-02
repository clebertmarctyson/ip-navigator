# IP Address Operations

This document details the IP address operation functions available in the ip-navigator package.

## getNextIPAddress(ipAddress: string): string

Returns the next IP address in sequential order.

- **Parameters:**
  - `ipAddress: string` - The current IP address
- **Returns:** `string` - The next IP address
- **Example:**
  ```typescript
  console.log(getNextIPAddress("192.168.1.1"));
  // Output: '192.168.1.2'
  ```

## getPreviousIPAddress(ipAddress: string): string

Returns the previous IP address in sequential order.

- **Parameters:**
  - `ipAddress: string` - The current IP address
- **Returns:** `string` - The previous IP address
- **Example:**
  ```typescript
  console.log(getPreviousIPAddress("192.168.1.2"));
  // Output: '192.168.1.1'
  ```

## isIPAddressInSubnet(ipAddress: string, networkAddress: string, subnetMask: string): boolean

Checks if an IP address belongs to a given subnet.

- **Parameters:**
  - `ipAddress: string` - The IP address to check
  - `networkAddress: string` - The network address of the subnet
  - `subnetMask: string` - The subnet mask
- **Returns:** `boolean` - `true` if the IP address is in the subnet, `false` otherwise
- **Example:**
  ```typescript
  console.log(
    isIPAddressInSubnet("192.168.1.100", "192.168.1.0", "255.255.255.0")
  );
  // Output: true
  ```

## isPublicIP(ipAddress: string): boolean

Checks if an IP address is a public IP address.

- **Parameters:**
  - `ipAddress: string` - The IP address to check
- **Returns:** `boolean` - `true` if the IP address is public, `false` otherwise
- **Example:**
  ```typescript
  console.log(isPublicIP("8.8.8.8"));
  // Output: true
  console.log(isPublicIP("192.168.1.1"));
  // Output: false
  ```

## isPrivateIP(ipAddress: string): boolean

Checks if an IP address is a private IP address.

- **Parameters:**
  - `ipAddress: string` - The IP address to check
- **Returns:** `boolean` - `true` if the IP address is private, `false` otherwise
- **Example:**
  ```typescript
  console.log(isPrivateIP("192.168.1.1"));
  // Output: true
  console.log(isPrivateIP("8.8.8.8"));
  // Output: false
  ```

## getIPRange(startIP: string, endIP: string): string[]

Generates an array of IP addresses within the specified range.

- **Parameters:**
  - `startIP: string` - The starting IP address of the range
  - `endIP: string` - The ending IP address of the range
- **Returns:** `string[]` - An array of IP addresses within the range
- **Example:**
  ```typescript
  console.log(getIPRange("192.168.1.1", "192.168.1.3"));
  // Output: ['192.168.1.1', '192.168.1.2', '192.168.1.3']
  ```

## compareIPAddresses(ip1: string, ip2: string): -1 | 0 | 1

Compares two IP addresses.

- **Parameters:**
  - `ip1: string` - The first IP address
  - `ip2: string` - The second IP address
- **Returns:** `-1 | 0 | 1`
  - `-1` if `ip1` is less than `ip2`
  - `0` if `ip1` is equal to `ip2`
  - `1` if `ip1` is greater than `ip2`
- **Example:**
  ```typescript
  console.log(compareIPAddresses("192.168.1.1", "192.168.1.2")); // Output: -1
  console.log(compareIPAddresses("192.168.1.1", "192.168.1.1")); // Output: 0
  console.log(compareIPAddresses("192.168.1.2", "192.168.1.1")); // Output: 1
  ```

## getIPAddressType(ipAddress: string): 'IPv4' | 'IPv6' | 'Invalid'

Determines the type of the given IP address.

- **Parameters:**
  - `ipAddress: string` - The IP address to check
- **Returns:** `'IPv4' | 'IPv6' | 'Invalid'` - The type of the IP address
- **Example:**
  ```typescript
  console.log(getIPAddressType("192.168.1.1")); // Output: 'IPv4'
  console.log(getIPAddressType("2001:0db8:85a3:0000:0000:8a2e:0370:7334")); // Output: 'IPv6'
  console.log(getIPAddressType("256.0.0.1")); // Output: 'Invalid'
  ```

## Additional Information

These IP address operation functions provide a wide range of utilities for working with IP addresses. They are useful for various networking tasks, IP address management, and network analysis. Here are some key points to remember:

- IP addresses are hierarchical and can be incremented or decremented sequentially.
- Public IP addresses are routable on the internet, while private IP addresses are used within local networks.
- IP address ranges are useful for defining network segments or allocating addresses.
- Comparing IP addresses can be helpful for sorting or determining network order.

When using these functions, ensure that you provide valid IP addresses. It's recommended to use the validation functions from the validation module to check inputs before performing IP address operations.

For more IP-related operations, subnet calculations, or conversions, refer to the other sections of the ip-navigator documentation.
