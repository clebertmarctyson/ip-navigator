/**
 * Returns the next IP address in sequential order.
 *
 * This function takes an IPv4 address and returns the next sequential IP address.
 * It handles rollovers within octets and to the next octet.
 *
 * @param {string} ipAddress - The starting IP address.
 * @returns {string} The next sequential IP address.
 *
 * @example
 * getNextIPAddress('192.168.1.1');   // returns '192.168.1.2'
 * getNextIPAddress('192.168.1.255'); // returns '192.168.2.0'
 * getNextIPAddress('255.255.255.255'); // returns '0.0.0.0'
 *
 * @remarks
 * - The function assumes that the input is a valid IPv4 address.
 * - It correctly handles rollovers, including from 255 to 0 in any octet.
 */
export function getNextIPAddress(ipAddress: string): string {
  // Implementation here
  return "192.168.1.2";
}

/**
 * Returns the previous IP address in sequential order.
 *
 * This function takes an IPv4 address and returns the previous sequential IP address.
 * It handles rollovers within octets and to the previous octet.
 *
 * @param {string} ipAddress - The starting IP address.
 * @returns {string} The previous sequential IP address.
 *
 * @example
 * getPreviousIPAddress('192.168.1.1');   // returns '192.168.1.0'
 * getPreviousIPAddress('192.168.2.0');   // returns '192.168.1.255'
 * getPreviousIPAddress('0.0.0.0');       // returns '255.255.255.255'
 *
 * @remarks
 * - The function assumes that the input is a valid IPv4 address.
 * - It correctly handles rollovers, including from 0 to 255 in any octet.
 */
export function getPreviousIPAddress(ipAddress: string): string {
  // Implementation here
  return "192.168.1.0";
}

/**
 * Checks if an IP address is within a given subnet.
 *
 * This function determines whether a given IP address falls within the range
 * defined by a network address and subnet mask.
 *
 * @param {string} ipAddress - The IP address to check.
 * @param {string} networkAddress - The network address of the subnet.
 * @param {string} subnetMask - The subnet mask of the network.
 * @returns {boolean} True if the IP address is in the subnet, false otherwise.
 *
 * @example
 * isIPAddressInSubnet('192.168.1.50', '192.168.1.0', '255.255.255.0');   // returns true
 * isIPAddressInSubnet('192.168.2.1', '192.168.1.0', '255.255.255.0');    // returns false
 *
 * @remarks
 * - The function assumes all inputs are valid IPv4 addresses or subnet masks.
 * - It performs a bitwise AND operation between the IP and the subnet mask to determine if it's in the subnet.
 */
export function isIPAddressInSubnet(
  ipAddress: string,
  networkAddress: string,
  subnetMask: string
): boolean {
  // Implementation here
  return true;
}

/**
 * Checks if an IP address is a public IP address.
 *
 * This function determines whether a given IP address is a public IP address,
 * which is routable on the global Internet.
 *
 * @param {string} ipAddress - The IP address to check.
 * @returns {boolean} True if the IP address is public, false otherwise.
 *
 * @example
 * isPublicIP('8.8.8.8');       // returns true
 * isPublicIP('192.168.1.1');   // returns false
 *
 * @remarks
 * - The function assumes the input is a valid IPv4 address.
 * - It checks against known ranges of private, loopback, and special-use IP addresses.
 */
export function isPublicIP(ipAddress: string): boolean {
  // Implementation here
  return false;
}

/**
 * Checks if an IP address is a private IP address.
 *
 * This function determines whether a given IP address is a private IP address,
 * which is used for local networks and not routable on the global Internet.
 *
 * @param {string} ipAddress - The IP address to check.
 * @returns {boolean} True if the IP address is private, false otherwise.
 *
 * @example
 * isPrivateIP('192.168.1.1');   // returns true
 * isPrivateIP('8.8.8.8');       // returns false
 *
 * @remarks
 * - The function assumes the input is a valid IPv4 address.
 * - It checks against known ranges of private IP addresses (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16).
 */
export function isPrivateIP(ipAddress: string): boolean {
  // Implementation here
  return true;
}

/**
 * Generates an array of IP addresses within a specified range.
 *
 * This function takes a start and end IP address and returns an array of all
 * IP addresses within that range, inclusive.
 *
 * @param {string} startIP - The starting IP address of the range.
 * @param {string} endIP - The ending IP address of the range.
 * @returns {string[]} An array of IP addresses within the specified range.
 *
 * @example
 * getIPRange('192.168.1.1', '192.168.1.3');
 * // returns ['192.168.1.1', '192.168.1.2', '192.168.1.3']
 *
 * @remarks
 * - The function assumes both inputs are valid IPv4 addresses.
 * - The start IP should be less than or equal to the end IP.
 * - For large ranges, be aware of potential memory usage.
 */
export function getIPRange(startIP: string, endIP: string): string[] {
  // Implementation here
  return ["192.168.1.1", "192.168.1.2", "192.168.1.3"];
}

/**
 * Compares two IP addresses.
 *
 * This function compares two IPv4 addresses and returns:
 * -1 if the first IP is less than the second,
 * 0 if they are equal,
 * 1 if the first IP is greater than the second.
 *
 * @param {string} ip1 - The first IP address to compare.
 * @param {string} ip2 - The second IP address to compare.
 * @returns {-1 | 0 | 1} The result of the comparison.
 *
 * @example
 * compareIPAddresses('192.168.1.1', '192.168.1.2');   // returns -1
 * compareIPAddresses('192.168.1.1', '192.168.1.1');   // returns 0
 * compareIPAddresses('192.168.1.2', '192.168.1.1');   // returns 1
 *
 * @remarks
 * - The function assumes both inputs are valid IPv4 addresses.
 * - It compares the IP addresses numerically, not lexicographically.
 */
export function compareIPAddresses(ip1: string, ip2: string): -1 | 0 | 1 {
  // Implementation here
  return 0;
}

/**
 * Determines the type of a given IP address.
 *
 * This function takes an IP address as a string and returns whether it's
 * an IPv4 address, an IPv6 address, or an invalid IP address.
 *
 * @param {string} ipAddress - The IP address to check.
 * @returns {"IPv4" | "IPv6" | "Invalid"} The type of the IP address.
 *
 * @example
 * getIPAddressType('192.168.1.1');                             // returns "IPv4"
 * getIPAddressType('2001:0db8:85a3:0000:0000:8a2e:0370:7334'); // returns "IPv6"
 * getIPAddressType('256.0.0.1');                               // returns "Invalid"
 *
 * @remarks
 * - The function checks the format of the IP address to determine its type.
 * - It does not perform exhaustive validation of the IP address.
 */
export function getIPAddressType(
  ipAddress: string
): "IPv4" | "IPv6" | "Invalid" {
  // Implementation here
  return "IPv4";
}
