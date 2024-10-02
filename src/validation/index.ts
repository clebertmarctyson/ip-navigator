/**
 * Validates whether the given string is a valid IPv4 address.
 *
 * This function checks if the input string conforms to the format of a valid IPv4 address.
 * A valid IPv4 address consists of four octets, each ranging from 0 to 255, separated by dots.
 * Any leading or trailing whitespace will result in the IP address being considered invalid.
 *
 * @param {string} ipAddress - The IP address to validate.
 * @returns {boolean} Returns true if the IP address is valid, false otherwise.
 *
 * @example
 * isValidIPAddress('192.168.1.1');   // returns true
 * isValidIPAddress('256.1.2.3');     // returns false
 * isValidIPAddress('192.168.1');     // returns false
 * isValidIPAddress('192.168.1.1.5'); // returns false
 * isValidIPAddress(' 192.168.1.1');  // returns false
 * isValidIPAddress('192.168.1.1 ');  // returns false
 *
 * @remarks
 * - The function checks for any leading or trailing whitespace and considers it invalid.
 * - It then splits the input string by dots and checks if there are exactly 4 parts.
 * - It then validates each octet to ensure it's a number between 0 and 255.
 * - The function also checks for leading zeros, which are not allowed in standard IPv4 notation.
 *
 * @status IN_PROGRESS
 *
 */
export function isValidIPAddress(ipAddress: string): boolean {
  // Check for leading or trailing whitespace
  if (ipAddress.trim() !== ipAddress) {
    return false;
  }

  // Split the IP address into octets
  const octets = ipAddress.split(".");

  // Check if we have exactly 4 octets
  if (octets.length !== 4) {
    return false;
  }

  // Validate each octet
  for (const octet of octets) {
    // Check for empty octet
    if (octet.length === 0) {
      return false;
    }

    // Check for leading zeros (not allowed in standard IPv4 notation)
    if (octet.length > 1 && octet[0] === "0") {
      return false;
    }

    // Parse the octet to a number
    const num = parseInt(octet, 10);

    // Check if it's a valid number between 0 and 255
    if (isNaN(num) || num < 0 || num > 255) {
      return false;
    }
  }

  // If we've passed all checks, the IP is valid
  return true;
}

/**
 * Validates whether the given string is a valid subnet mask.
 *
 * This function checks if the input string conforms to the format of a valid subnet mask.
 * A valid subnet mask is a sequence of four octets, where each octet is a number between 0 and 255,
 * and the binary representation of the entire mask is a continuous sequence of 1s followed by 0s.
 *
 * @param {string} subnetMask - The subnet mask to validate.
 * @returns {boolean} Returns true if the subnet mask is valid, false otherwise.
 *
 * @example
 * isValidSubnetMask('255.255.255.0');   // returns true
 * isValidSubnetMask('255.255.256.0');   // returns false
 * isValidSubnetMask('255.255.254.0');   // returns true
 * isValidSubnetMask('255.255.253.0');   // returns false
 *
 * @remarks
 * - The function checks if the input is a string of four dot-separated numbers.
 * - Each number must be between 0 and 255.
 * - The binary representation of the entire mask must be a continuous sequence of 1s followed by 0s.
 * - Common valid subnet masks include 255.0.0.0, 255.255.0.0, 255.255.255.0, etc.
 *
 * @status TODO
 */
export function isValidSubnetMask(subnetMask: string): boolean {
  // Implementation here
  return true;
}

/**
 * Validates whether the given string is a valid CIDR notation.
 *
 * This function checks if the input string conforms to the Classless Inter-Domain Routing (CIDR) notation.
 * A valid CIDR notation consists of an IP address followed by a forward slash and a prefix length.
 *
 * @param {string} cidr - The CIDR notation to validate.
 * @returns {boolean} Returns true if the CIDR notation is valid, false otherwise.
 *
 * @example
 * isValidCIDR('192.168.1.0/24');   // returns true
 * isValidCIDR('192.168.1.0/33');   // returns false
 * isValidCIDR('2001:db8::/32');    // returns true (for IPv6)
 * isValidCIDR('192.168.1.0');      // returns false (missing prefix)
 *
 * @remarks
 * - The function checks if the input is a valid IP address (IPv4 or IPv6) followed by a '/' and a number.
 * - For IPv4, the prefix length should be between 0 and 32.
 * - For IPv6, the prefix length should be between 0 and 128.
 * - The function should work for both IPv4 and IPv6 addresses.
 */
export function isValidCIDR(cidr: string): boolean {
  // Implementation here
  return true;
}

/**
 * Checks if the given string is a valid IPv4 address.
 *
 * This function validates whether the input string conforms to the format of an IPv4 address.
 * An IPv4 address consists of four octets, each ranging from 0 to 255, separated by dots.
 *
 * @param {string} ipAddress - The IP address to validate.
 * @returns {boolean} Returns true if the address is a valid IPv4 address, false otherwise.
 *
 * @example
 * isIPv4('192.168.1.1');   // returns true
 * isIPv4('256.1.2.3');     // returns false
 * isIPv4('192.168.1');     // returns false
 * isIPv4('2001:db8::1');   // returns false (IPv6)
 *
 * @remarks
 * - The function checks if the input is a string of four dot-separated numbers.
 * - Each number (octet) must be between 0 and 255.
 * - The function does not accept leading zeros in octets (e.g., '192.168.01.1' is invalid).
 * - This function is more specific than isValidIPAddress as it only validates IPv4.
 */
export function isIPv4(ipAddress: string): boolean {
  // Implementation here
  return true;
}

/**
 * Checks if the given string is a valid IPv6 address.
 *
 * This function validates whether the input string conforms to the format of an IPv6 address.
 * An IPv6 address consists of eight groups of four hexadecimal digits, each group representing 16 bits.
 * The groups are separated by colons (:).
 *
 * @param {string} ipAddress - The IP address to validate.
 * @returns {boolean} Returns true if the address is a valid IPv6 address, false otherwise.
 *
 * @example
 * isIPv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334');   // returns true
 * isIPv6('2001:db8:85a3::8a2e:370:7334');              // returns true
 * isIPv6('::1');                                       // returns true (loopback address)
 * isIPv6('192.168.1.1');                               // returns false (IPv4)
 *
 * @remarks
 * - The function should accept the full form of IPv6 addresses.
 * - It should also accept the shortened form where consecutive zero groups are replaced with '::'.
 * - Leading zeros in groups can be omitted.
 * - The function should handle special IPv6 notations like the loopback address '::1'.
 * - IPv4-mapped IPv6 addresses (e.g., '::ffff:192.0.2.128') should also be considered valid.
 */
export function isIPv6(ipAddress: string): boolean {
  // Implementation here
  return true;
}
