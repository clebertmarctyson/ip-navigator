"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areIPAddressesEqual = exports.getAvailableHostsCount = exports.isIPAddressInSubnet = exports.getPreviousIPAddress = exports.getNextIPAddress = exports.calculateBroadcastAddress = exports.calculateNetworkAddress = exports.calculateSubnetMask = exports.binaryToIP = exports.ipToBinary = exports.isValidBinaryIPAddress = exports.isValidIPAddress = void 0;
// TODO : DONE
/**
 * Checks if an IP address is valid.
 * @param {string} ipAddress - The IP address to validate.
 * @returns {boolean} True if the IP address is valid, false otherwise.
 */
const isValidIPAddress = (ipAddress) => {
    if (ipAddress.startsWith(" ") || ipAddress.endsWith(" ")) {
        return false;
    }
    const octets = ipAddress.split(".");
    if (octets.length !== 4) {
        return false;
    }
    return octets.every((octet) => {
        const value = Number.parseInt(octet, 10);
        return (/^\d+$/.test(octet) &&
            value >= 0 &&
            value <= 255 &&
            !(octet.length > 1 && octet.startsWith("0")));
    });
};
exports.isValidIPAddress = isValidIPAddress;
// TODO : DONE
/**
 * Checks if a binary IP address is valid.
 * @param {string} binaryIPAddress - The binary IP address to validate.
 * @returns {boolean} True if the binary IP address is valid, false otherwise.
 */
const isValidBinaryIPAddress = (binaryIPAddress) => {
    if (binaryIPAddress.startsWith(" ") || binaryIPAddress.endsWith(" ")) {
        return false;
    }
    const octets = binaryIPAddress.split(".");
    if (octets.length !== 4) {
        return false;
    }
    const ipValid = octets.every((octet) => {
        return (octet.length === 8 &&
            octet
                .split("")
                .every((value) => parseInt(value) === 1 || parseInt(value) === 0));
    });
    return ipValid;
};
exports.isValidBinaryIPAddress = isValidBinaryIPAddress;
// TODO : DONE
/**
 * Converts an IP address to binary format.
 * @param {string} ipAddress - The IP address to convert.
 * @returns {string} The IP address converted to binary format.
 */
const ipToBinary = (ipAddress) => {
    if (!(0, exports.isValidIPAddress)(ipAddress)) {
        throw new Error("Invalid IP Address");
    }
    const ipBinary = ipAddress
        .split(".")
        .map((octet) => {
        let number = parseInt(octet);
        let binaryString = number.toString(2).padStart(8, "0");
        return binaryString;
    })
        .join(".");
    return ipBinary;
};
exports.ipToBinary = ipToBinary;
// TODO : DONE
/**
 * Converts a binary IP address to standard format.
 * @param {string} binaryIPAddress - The binary IP address to convert.
 * @returns {string} The IP address converted to standard format.
 */
const binaryToIP = (binaryIPAddress) => {
    if (!(0, exports.isValidBinaryIPAddress)(binaryIPAddress)) {
        throw new Error("Invalid IP Address");
    }
    const ipBinary = binaryIPAddress
        .split(".")
        .map((octet) => {
        let octetToArray = octet.split("").reverse();
        const decimalOctet = octetToArray.reduce((sum, curr, index) => {
            return (sum +
                (parseInt(curr) === 1
                    ? Math.floor(Math.pow(2, index))
                    : parseInt(curr)));
        }, 0);
        return decimalOctet;
    })
        .join(".");
    return ipBinary;
};
exports.binaryToIP = binaryToIP;
// TODO : DONE
/**
 * Calculates the subnet mask based on a prefix length.
 * @param {number} prefixLength - The prefix length.
 * @returns {string} The calculated subnet mask.
 */
const calculateSubnetMask = (prefixLength) => {
    var _a;
    if (!Number.isInteger(prefixLength) ||
        prefixLength < 1 ||
        prefixLength > 32) {
        throw new Error("Invalid Prefix Length");
    }
    const subnetMask = "1".repeat(prefixLength).padEnd(32, "0");
    const octets = (_a = subnetMask
        .match(/.{8}/g)) === null || _a === void 0 ? void 0 : _a.map((binary) => parseInt(binary, 2));
    if (!octets) {
        throw new Error("Invalid Subnet Mask");
    }
    const subnetMaskString = octets.join(".");
    return subnetMaskString;
};
exports.calculateSubnetMask = calculateSubnetMask;
// TODO : PENDING
/**
 * Calculates the network address based on an IP address and subnet mask.
 * @param {string} ipAddress - The IP address.
 * @param {string} subnetMask - The subnet mask.
 * @returns {string} The calculated network address.
 */
const calculateNetworkAddress = (ipAddress, subnetMask) => {
    return "255.255.255.255";
};
exports.calculateNetworkAddress = calculateNetworkAddress;
// TODO : PENDING
/**
 * Calculates the broadcast address based on an IP address and subnet mask.
 * @param {string} ipAddress - The IP address.
 * @param {string} subnetMask - The subnet mask.
 * @returns {string} The calculated broadcast address.
 */
const calculateBroadcastAddress = (ipAddress, subnetMask) => {
    return "255.255.255.255";
};
exports.calculateBroadcastAddress = calculateBroadcastAddress;
// TODO : PENDING
/**
 * Gets the next IP address in sequential order.
 * @param {string} ipAddress - The current IP address.
 * @returns {string} The next IP address.
 */
const getNextIPAddress = (ipAddress) => {
    return "255.255.255.255";
};
exports.getNextIPAddress = getNextIPAddress;
// TODO : PENDING
/**
 * Gets the previous IP address in sequential order.
 * @param {string} ipAddress - The current IP address.
 * @returns {string} The previous IP address.
 */
const getPreviousIPAddress = (ipAddress) => {
    return "255.255.255.255";
};
exports.getPreviousIPAddress = getPreviousIPAddress;
// TODO : PENDING
/**
 * Checks if an IP address is in a given subnet.
 * @param {string} ipAddress - The IP address to check.
 * @param {string} networkAddress - The network address of the subnet.
 * @param {string} subnetMask - The subnet mask.
 * @returns {boolean} True if the IP address is in the subnet, false otherwise.
 */
const isIPAddressInSubnet = (ipAddress, networkAddress, subnetMask) => {
    return true;
};
exports.isIPAddressInSubnet = isIPAddressInSubnet;
// TODO : PENDING
/**
 * Gets the number of available hosts in a subnet.
 * @param {string} subnetMask - The subnet mask.
 * @returns {number} The number of available hosts.
 */
const getAvailableHostsCount = (subnetMask) => {
    return 12;
};
exports.getAvailableHostsCount = getAvailableHostsCount;
// TODO : PENDING
/**
 * Checks if two IP addresses are equal.
 * @param {string} firstIpAddress - The first IP address.
 * @param {string} secondIpAddress - The second IP address.
 * @returns {boolean} True if the IP addresses are equal, false otherwise.
 */
const areIPAddressesEqual = (firstIpAddress, secondIpAddress) => {
    return true;
};
exports.areIPAddressesEqual = areIPAddressesEqual;
