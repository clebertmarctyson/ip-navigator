import { isValidBinaryOctet, isValidDecimalOctet } from "./validation";

export const convertDecimalOctetToBinary = (decimalOctet: string): string => {
  if (!isValidDecimalOctet(decimalOctet)) {
    throw new Error("Invalid decimal octet");
  }

  // Parse the decimal octet to a number
  const num = Number.parseInt(decimalOctet, 10);

  // Convert the number to binary
  return num.toString(2).padStart(8, "0");
};

export const convertBinaryOctetToDecimal = (binaryOctet: string): string => {
  // Validate the binary octet
  if (!isValidBinaryOctet(binaryOctet)) {
    throw new Error("Invalid binary octet");
  }

  // Convert the binary octet to a decimal number
  const num = parseInt(binaryOctet, 2);

  return num.toString();
};
