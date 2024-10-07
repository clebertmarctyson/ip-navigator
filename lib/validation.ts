export const isValidDecimalOctet = (decimalOctet: string): boolean => {
  // Check for empty octet or octet with length > 3
  if (decimalOctet.length < 1 || decimalOctet.length > 3) return false;

  // Check for leading zeros (not allowed in standard IPv4 notation)
  if (decimalOctet.length > 1 && decimalOctet[0] === "0") return false;

  // Parse the octet to a number
  const num = Number.parseInt(decimalOctet, 10);

  // Check if it's a valid number between 0 and 255
  if (Number.isNaN(num) || num < 0 || num > 255) return false;

  return true;
};

export const isValidBinaryOctet = (binaryOctet: string): boolean => {
  // Check for empty octet or octet with length > 8
  if (binaryOctet.length !== 8) return false;

  // Validate each bit in the octet
  Array.from(binaryOctet).forEach((bit) => {
    if (bit !== "0" && bit !== "1") return false;
  });

  // If we've passed all checks, the octet is valid
  return true;
};

export const isValidPrefix = (prefix: string): boolean => {
  // Check if prefix is empty
  if (prefix.length === 0) return false;

  // Check if the prefix is a decimal value number
  if (!Number.isInteger(Number(prefix))) return false;

  // Parse the prefix to a number
  const prefixNum = Number.parseInt(prefix, 10);

  // Check if the prefix is a valid number between 0 and 32
  if (prefixNum < 0 || prefixNum > 32) return false;

  return true;
};
