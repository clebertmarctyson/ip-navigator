import {
  isValidBinaryOctet,
  isValidDecimalOctet,
  isValidPrefix,
} from "../lib/validation";

import { ipToBinary } from "../conversion/index";

/**
 * Validates whether the given string is a valid IPv4 address.
 *
 * @param {string} ipAddress - The IP address to validate.
 * @returns {boolean} True if the IP address is valid, false otherwise.
 *
 * @example
 * isValidIPAddress('192.168.1.1');   // returns true
 * isValidIPAddress('256.1.2.3');     // returns false
 * isValidIPAddress('192.168.1');     // returns false
 * isValidIPAddress('192.168.1.1.5'); // returns false
 * isValidIPAddress(' 192.168.1.1');  // returns false
 * isValidIPAddress('192.168.1.1 ');  // returns false
 *
 *
 */
export const isValidIPAddress = (ipAddress: string): boolean => {
  // Check for leading or trailing whitespace
  if (ipAddress !== ipAddress.trim()) return false;

  // Split the IP address into octets
  const octets = ipAddress.split(".");

  // Check if we have exactly 4 octets
  if (octets.length !== 4) return false;

  // Validate each octet
  for (const octet of octets) {
    if (!isValidDecimalOctet(octet)) return false;
  }

  // If we've passed all checks, the IP is valid
  return true;
};

/**
 * Validates whether the given string is a valid subnet mask.
 *
 * @param {string} subnetMask - The subnet mask to validate.
 * @returns {boolean} True if the subnet mask is valid, false otherwise.
 *
 * @example
 * isValidSubnetMask('255.255.255.0');   // returns true
 * isValidSubnetMask('255.255.256.0');   // returns false
 * isValidSubnetMask('255.255.254.0');   // returns true
 * isValidSubnetMask('255.255.253.0');   // returns false
 *
 *
 */
export const isValidSubnetMask = (subnetMask: string): boolean => {
  // Check if the subnet mask is a valid IP address
  if (!isValidIPAddress(subnetMask)) return false;

  // Convert the subnet mask to binary
  const binaryIP = ipToBinary(subnetMask);

  // Find the first zero in the binary representation
  const zeroIndex = binaryIP.indexOf("0");

  // Check if there are no zeros in the subnet mask
  const noZero = zeroIndex === -1;

  // Check if there are no ones after the first zero
  const noOneAfterZero = !binaryIP.slice(zeroIndex).includes("1");

  // If both conditions are met, the subnet mask is valid
  return noZero || noOneAfterZero;
};

/**
 * Validates whether the given string is a valid CIDR notation.
 *
 * @param {string} cidr - The CIDR notation to validate.
 * @returns {boolean} True if the CIDR notation is valid, false otherwise.
 *
 * @example
 * isValidCIDR('192.168.1.0/24');   // returns true
 * isValidCIDR('192.168.1.0/33');   // returns false
 * isValidCIDR('192.168.1.0');      // returns false (missing prefix)
 * isValidCIDR('192.168.1.1/24/32'); // returns false (multiple slashes)
 * isValidCIDR('192.168.1.1/24.5'); // returns false (decimal prefix)
 * isValidCIDR('192.168.1.1/');     // returns false (empty prefix)
 *
 *
 */
export const isValidCIDR = (cidr: string): boolean => {
  // Check for leading or trailing whitespace
  if (cidr.trim() !== cidr) return false;

  // Split the CIDR notation into IP address and prefix
  const parts = cidr.split("/");

  // Check if we have exactly 2 parts
  if (parts.length !== 2) return false;

  // Destructure the parts into IP address and prefix
  const [ipAddress, prefix] = parts;

  // Check if the IP address is valid
  if (!isValidIPAddress(ipAddress)) return false;

  // Check if the prefix is a valid
  if (!isValidPrefix(prefix)) return false;

  // If we've passed all checks, the CIDR notation is valid
  return true;
};

/**
 * Validates whether the given string is a valid binary IP address.
 *
 * @param {string} binaryIP - The binary IP address to validate.
 * @returns {boolean} True if the binary IP address is valid, false otherwise.
 *
 * @example
 * isValidBinaryIP('11000000.10101000.00000001.00000001'); // returns true
 * isValidBinaryIP('11000000.10101000.00000001.0000000');  // returns false
 * isValidBinaryIP('11000000.10101000.00000001.00000001.0'); // returns false
 *
 *
 */
export const isValidBinaryIP = (binaryIP: string): boolean => {
  // Check if the binary string is a valid length
  if (binaryIP.length !== 35) return false;

  // Split the binary string into octets
  const octets = binaryIP.split(".");

  // Check if we have exactly 4 octets
  if (octets.length !== 4) return false;

  // Validate each octet
  octets.forEach((octet) => {
    if (!isValidBinaryOctet(octet)) return false;
  });

  // If we've passed all checks, the binary string is valid
  return true;
};
