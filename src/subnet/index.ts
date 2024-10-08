import { subnetMaskToCIDR } from "../conversion";
import { ipToInteger, integerToIP } from "../conversion";
import { isValidIPAddress, isValidSubnetMask } from "../validation";
import { ipToBinary, binaryToIP } from "../conversion";

/**
 * Calculates the network address based on an IP address and subnet mask.
 *
 * This function performs a bitwise AND operation between the IP address and subnet mask
 * to determine the network address.
 *
 * @param {string} ipAddress - The IP address.
 * @param {string} subnetMask - The subnet mask.
 * @returns {string} The network address.
 *
 * @example
 * calculateNetworkAddress('192.168.1.100', '255.255.255.0');  // returns '192.168.1.0'
 *
 * @remarks
 * - The function assumes both inputs are valid IPv4 addresses in dotted decimal notation.
 * - It performs a bitwise AND operation between each octet of the IP and subnet mask.
 *
 *
 */
export const calculateNetworkAddress = (
  ipAddress: string,
  subnetMask: string
): string => {
  if (!isValidIPAddress(ipAddress) || !isValidSubnetMask(subnetMask)) {
    throw new Error("Invalid IP address or subnet mask");
  }

  const ipBinaryOctets = ipToBinary(ipAddress).split(".");
  const maskBinaryOctets = ipToBinary(subnetMask).split(".");

  const networkBinary = ipBinaryOctets
    .map((octet, index) => {
      const number_1 = parseInt(octet, 2);
      const number_2 = parseInt(maskBinaryOctets[index], 2);

      return (number_1 & number_2).toString(2).padStart(8, "0");
    })
    .join(".");

  return binaryToIP(networkBinary);
};

/**
 * Calculates the broadcast address based on an IP address and subnet mask.
 *
 * This function determines the broadcast address by setting all host bits to 1
 * in the network portion defined by the subnet mask.
 *
 * @param {string} ipAddress - The IP address.
 * @param {string} subnetMask - The subnet mask.
 * @returns {string} The broadcast address.
 *
 * @example
 * calculateBroadcastAddress('192.168.1.100', '255.255.255.0');  // returns '192.168.1.255'
 *
 * @remarks
 * - The function assumes both inputs are valid IPv4 addresses in dotted decimal notation.
 * - It calculates the network address and then sets all host bits to 1.
 */
export const calculateBroadcastAddress = (
  ipAddress: string,
  subnetMask: string
): string => {
  if (!isValidIPAddress(ipAddress) || !isValidSubnetMask(subnetMask)) {
    throw new Error("Invalid IP address or subnet mask");
  }

  const networkAddress = calculateNetworkAddress(ipAddress, subnetMask);
  const networkBinary = ipToBinary(networkAddress);
  const maskBinary = ipToBinary(subnetMask);

  const broadcastBinary = networkBinary
    .split(".")
    .map((octet, index) => {
      const maskOctet = maskBinary.split(".")[index];
      return parseInt(octet, 2) | (parseInt(maskOctet, 2) ^ 255);
    })
    .map((num) => num.toString(2).padStart(8, "0"))
    .join(".");

  return binaryToIP(broadcastBinary);
};

/**
 * Calculates the available IP addresses in a subnet.
 *
 * This function returns an array of all usable IP addresses in the subnet,
 * excluding the network address and broadcast address.
 *
 * @param {string} networkAddress - The network address of the subnet.
 * @param {string} subnetMask - The subnet mask.
 * @returns {string[]} An array of available IP addresses.
 *
 * @example
 * calculateAvailableIPs('192.168.1.0', '255.255.255.252');
 * // returns ['192.168.1.1', '192.168.1.2']
 *
 * @remarks
 * - The function assumes both inputs are valid IPv4 addresses in dotted decimal notation.
 * - It excludes the network address (first address) and broadcast address (last address) from the results.
 * - For very large subnets, be aware of potential memory usage when generating the full list.
 */
export const calculateAvailableIPs = (
  networkAddress: string,
  subnetMask: string
): string[] => {
  if (!isValidIPAddress(networkAddress) || !isValidSubnetMask(subnetMask)) {
    throw new Error("Invalid network address or subnet mask");
  }

  const broadcastAddress = calculateBroadcastAddress(
    networkAddress,
    subnetMask
  );

  const startIP = ipToInteger(networkAddress) + 1;
  const endIP = ipToInteger(broadcastAddress) - 1;

  const availableIPs = [];
  for (let i = startIP; i <= endIP; i++) {
    availableIPs.push(integerToIP(i));
  }

  return availableIPs;
};

/**
 * Retrieves comprehensive information about a subnet.
 *
 * This function calculates various details about a subnet given an IP address and subnet mask.
 *
 * @param {string} ipAddress - An IP address within the subnet.
 * @param {string} subnetMask - The subnet mask.
 * @returns {Object} An object containing subnet information.
 * @returns {string} .networkAddress - The network address of the subnet.
 * @returns {string} .broadcastAddress - The broadcast address of the subnet.
 * @returns {number} .totalHosts - The total number of host addresses in the subnet.
 * @returns {number} .usableHosts - The number of usable host addresses in the subnet.
 * @returns {string} .firstUsableHost - The first usable host address in the subnet.
 * @returns {string} .lastUsableHost - The last usable host address in the subnet.
 *
 * @example
 * getSubnetInfo('192.168.1.100', '255.255.255.0');
 * // returns {
 * //   networkAddress: '192.168.1.0',
 * //   broadcastAddress: '192.168.1.255',
 * //   totalHosts: 256,
 * //   usableHosts: 254,
 * //   firstUsableHost: '192.168.1.1',
 * //   lastUsableHost: '192.168.1.254'
 * // }
 *
 * @remarks
 * - The function assumes both inputs are valid IPv4 addresses in dotted decimal notation.
 * - Total hosts include the network and broadcast addresses, while usable hosts exclude these.
 * - For subnets smaller than /31, firstUsableHost and lastUsableHost will be the same as networkAddress and broadcastAddress.
 */
export const getSubnetInfo = (
  ipAddress: string,
  subnetMask: string
): {
  networkAddress: string;
  broadcastAddress: string;
  totalHosts: number;
  usableHosts: number;
  firstUsableHost: string;
  lastUsableHost: string;
} => {
  if (!isValidIPAddress(ipAddress) || !isValidSubnetMask(subnetMask)) {
    throw new Error("Invalid IP address or subnet mask");
  }

  const networkAddress = calculateNetworkAddress(ipAddress, subnetMask);
  const broadcastAddress = calculateBroadcastAddress(ipAddress, subnetMask);
  const cidr = subnetMaskToCIDR(subnetMask);

  const totalHosts = Math.pow(2, 32 - cidr);
  const usableHosts = cidr === 31 ? 2 : totalHosts > 2 ? totalHosts - 2 : 0;

  const availableIPs = calculateAvailableIPs(networkAddress, subnetMask);
  const firstUsableHost =
    availableIPs.length > 0 ? availableIPs[0] : networkAddress;
  const lastUsableHost =
    availableIPs.length > 0
      ? availableIPs[availableIPs.length - 1]
      : broadcastAddress;

  return {
    networkAddress,
    broadcastAddress,
    totalHosts,
    usableHosts,
    firstUsableHost,
    lastUsableHost,
  };
};
