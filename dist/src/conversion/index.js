"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subnetMaskToCIDR = exports.cidrToSubnetMask = exports.integerToIP = exports.ipToInteger = exports.binaryToIP = exports.ipToBinary = void 0;
const conversion_1 = require("../../lib/conversion");
const validation_1 = require("../../lib/validation");
const index_1 = require("../validation/index");
/**
 * Converts an IPv4 address to its binary representation.
 *
 * This function takes a string representation of an IPv4 address and converts it
 * to its binary equivalent. Each octet is converted to an 8-bit binary string,
 * and the resulting octets are joined with dots.
 *
 * @param {string} ipAddress - The IPv4 address to convert.
 * @returns {string} The binary representation of the IP address, with dots separating each octet.
 * @throws {Error} If the input is not a valid IPv4 address.
 *
 * @example
 * ipToBinary('192.168.1.1');  // returns '11000000.10101000.00000001.00000001'
 * ipToBinary('10.0.0.1');     // returns '00001010.00000000.00000000.00000001'
 *
 * @status DONE
 *
 */
const ipToBinary = (ipAddress) => {
    if (!(0, index_1.isValidIPAddress)(ipAddress)) {
        throw new Error("Invalid IP address");
    }
    const octets = ipAddress.split(".");
    const binaryOctets = octets.map((octet) => (0, conversion_1.convertDecimalOctetToBinary)(octet));
    return binaryOctets.join(".");
};
exports.ipToBinary = ipToBinary;
/**
 * Converts a binary representation of an IPv4 address to its decimal notation.
 *
 * This function takes a string of binary octets (separated by dots) and converts
 * it back to a standard IPv4 address in decimal notation. It validates the input
 * to ensure it's a properly formatted binary IP address.
 *
 * @param {string} binaryIP - The binary representation of the IP address, with dots separating each octet.
 * @returns {string} The IPv4 address in decimal notation.
 * @throws {Error} If the input is not a valid binary representation of an IPv4 address.
 *
 * @example
 * binaryToIP('11000000.10101000.00000001.00000001');  // returns '192.168.1.1'
 * binaryToIP('00001010.00000000.00000000.00000001');  // returns '10.0.0.1'
 *
 * @status DONE
 *
 */
const binaryToIP = (binaryIP) => {
    if (!(0, index_1.isValidBinaryIP)(binaryIP)) {
        throw new Error("Invalid binary IP address");
    }
    const binaryOctets = binaryIP.split(".");
    const decimalOctets = binaryOctets.map((binaryOctet) => (0, conversion_1.convertBinaryOctetToDecimal)(binaryOctet));
    return decimalOctets.join(".");
};
exports.binaryToIP = binaryToIP;
/**
 * Converts an IPv4 address to its 32-bit integer representation.
 *
 * This function takes a string representation of an IPv4 address and converts it
 * to its equivalent 32-bit integer value. It uses bitwise operations to combine
 * the octets into a single integer.
 *
 * @param {string} ipAddress - The IPv4 address to convert.
 * @returns {number} The 32-bit integer representation of the IP address.
 * @throws {Error} If the input is not a valid IPv4 address.
 *
 * @example
 * ipToInteger('192.168.1.1');  // returns 3232235777
 * ipToInteger('10.0.0.1');     // returns 167772161
 *
 * @status DONE
 *
 */
const ipToInteger = (ipAddress) => {
    if (!(0, index_1.isValidIPAddress)(ipAddress)) {
        throw new Error("Invalid IP address");
    }
    const octets = ipAddress.split(".");
    return octets.reduce((acc, octet, index) => {
        return acc + Number.parseInt(octet, 10) * Math.pow(256, 3 - index);
    }, 0);
};
exports.ipToInteger = ipToInteger;
/**
 * Converts a 32-bit integer to its IPv4 address representation.
 *
 * This function takes a 32-bit integer and converts it back to a standard IPv4
 * address in decimal notation. It uses bitwise operations to extract each octet
 * from the integer.
 *
 * @param {number} integer - The 32-bit integer to convert.
 * @returns {string} The IPv4 address in decimal notation.
 * @throws {Error} If the input is not a valid 32-bit unsigned integer.
 *
 * @example
 * integerToIP(3232235777);  // returns '192.168.1.1'
 * integerToIP(167772161);   // returns '10.0.0.1'
 *
 * @status DONE
 *
 */
const integerToIP = (integer) => {
    if (!Number.isInteger(integer) ||
        integer < 0 ||
        integer > Math.pow(2, 32) - 1) {
        throw new Error("Input must be an integer between 0 and 4294967295");
    }
    const base = 256;
    let exponent = 3;
    let temp = integer;
    let octects = [];
    while (exponent >= 0) {
        // Calculate the octet value
        const octet = Math.floor(temp / Math.pow(base, exponent));
        // Add the octet to the list
        octects.push(octet);
        // Update the remaining value
        temp = temp - octet * Math.pow(256, exponent);
        // Move to the next octet
        exponent--;
    }
    return octects.join(".");
};
exports.integerToIP = integerToIP;
/**
 * Calculates the subnet mask from the given CIDR notation.
 *
 * This function takes a CIDR prefix length and generates the corresponding
 * subnet mask in IPv4 format. It creates a binary string of 1s followed by 0s,
 * then converts each 8-bit segment to its decimal equivalent.
 *
 * @param {number} prefix - The CIDR notation (0-32).
 * @returns {string} The subnet mask in IPv4 format.
 * @throws {Error} If the CIDR is not a valid number between 0 and 32.
 *
 * @example
 * cidrToSubnetMask(24);  // returns '255.255.255.0'
 * cidrToSubnetMask(16);  // returns '255.255.0.0'
 *
 * @status DONE
 */
const cidrToSubnetMask = (prefix) => {
    if (!(0, validation_1.isValidPrefix)(prefix.toString())) {
        throw new Error("CIDR must be an integer between 0 and 32");
    }
    const binaryMask = "1".repeat(prefix).padEnd(32, "0");
    return [
        binaryMask.slice(0, 8),
        binaryMask.slice(8, 16),
        binaryMask.slice(16, 24),
        binaryMask.slice(24),
    ]
        .map((octet) => parseInt(octet, 2))
        .join(".");
};
exports.cidrToSubnetMask = cidrToSubnetMask;
/**
 * Calculates the CIDR notation from the given subnet mask.
 *
 * This function takes a subnet mask in IPv4 format and determines the
 * equivalent CIDR prefix length. It does this by converting the mask to
 * binary and counting the number of consecutive 1s from the start.
 *
 * @param {string} subnetMask - The subnet mask in IPv4 format.
 * @returns {number} The CIDR notation (0-32).
 * @throws {Error} If the subnet mask is not valid.
 *
 * @example
 * subnetMaskToCIDR('255.255.255.0');  // returns 24
 * subnetMaskToCIDR('255.255.0.0');    // returns 16
 *
 * @status DONE
 */
const subnetMaskToCIDR = (subnetMask) => {
    if (!(0, index_1.isValidIPAddress)(subnetMask) || !(0, index_1.isValidSubnetMask)(subnetMask)) {
        throw new Error("Invalid subnet mask");
    }
    const binaryIP = (0, exports.ipToBinary)(subnetMask);
    return binaryIP.length - binaryIP.replace(/1/g, "").length;
};
exports.subnetMaskToCIDR = subnetMaskToCIDR;
