export function isValidIPAddress(ipAddress: string): boolean {
  const ipParts = ipAddress.split(".");

  if (ipParts.length !== 4) {
    return false;
  }

  for (const part of ipParts) {
    const partAsNumber = parseInt(part, 10);

    if (isNaN(partAsNumber) || partAsNumber < 0 || partAsNumber > 255) {
      return false;
    }
  }

  return true;
}

export function isValidSubnetMask(subnetMask: string): boolean {
  // Implementation here
  return true;
}

export function isValidCIDR(cidr: string): boolean {
  // Implementation here
  return true;
}

export function isIPv4(ipAddress: string): boolean {
  // Implementation here
  return true;
}

export function isIPv6(ipAddress: string): boolean {
  // Implementation here
  return false;
}
