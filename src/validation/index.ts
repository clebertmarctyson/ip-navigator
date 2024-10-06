import { ipToBinary } from "../conversion/index";

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
 * @status DONE
 *
 */
export const isValidIPAddress = (ipAddress: string): boolean => {
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

    // Check if octect has leading or trailing whitespace
    if (octet.trim() !== octet) {
      return false;
    }

    // Parse the octet to a number
    const num = Number.parseInt(octet, 10);

    // Check if it's a valid number between 0 and 255
    if (Number.isNaN(num) || num < 0 || num > 255) {
      return false;
    }
  }

  // If we've passed all checks, the IP is valid
  return true;
};

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
 * @status DONE
 *
 */
export const isValidSubnetMask = (subnetMask: string): boolean => {
  if (!isValidIPAddress(subnetMask)) return false;

  const binaryIP = ipToBinary(subnetMask);

  const zeroIndex = binaryIP.indexOf("0");

  return zeroIndex === -1 || !binaryIP.slice(zeroIndex).includes("1");
};

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
 * isValidCIDR('192.168.1.0');      // returns false (missing prefix)
 *
 * @remarks
 * - The function checks if the input is a valid IP address followed by a '/' and a number.
 * - The prefix length should be between 0 and 32.
 *
 * @status DONE
 *
 */
export const isValidCIDR = (cidr: string): boolean => {
  if (!cidr.includes("/") || cidr.trim() !== cidr) return false;

  const values = cidr.split("/");

  if (values.length !== 2) return false;

  const [ipAddress, prefix] = values;

  if (!Number.isInteger(Number(prefix)) || !isValidIPAddress(ipAddress)) {
    return false;
  }

  const num = Number.parseInt(prefix, 10);

  return num >= 0 && num <= 32;
};
