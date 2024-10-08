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
 * @status DONE
 *
 */
export declare const isValidIPAddress: (ipAddress: string) => boolean;
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
 * @status DONE
 *
 */
export declare const isValidSubnetMask: (subnetMask: string) => boolean;
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
 * @status DONE
 *
 */
export declare const isValidCIDR: (cidr: string) => boolean;
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
 * @status DONE
 *
 */
export declare const isValidBinaryIP: (binaryIP: string) => boolean;
