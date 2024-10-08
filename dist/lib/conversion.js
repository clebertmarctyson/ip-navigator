"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertBinaryOctetToDecimal = exports.convertDecimalOctetToBinary = void 0;
const validation_1 = require("./validation");
const convertDecimalOctetToBinary = (decimalOctet) => {
    if (!(0, validation_1.isValidDecimalOctet)(decimalOctet)) {
        throw new Error("Invalid decimal octet");
    }
    // Parse the decimal octet to a number
    const num = Number.parseInt(decimalOctet, 10);
    // Convert the number to binary
    return num.toString(2).padStart(8, "0");
};
exports.convertDecimalOctetToBinary = convertDecimalOctetToBinary;
const convertBinaryOctetToDecimal = (binaryOctet) => {
    // Validate the binary octet
    if (!(0, validation_1.isValidBinaryOctet)(binaryOctet)) {
        throw new Error("Invalid binary octet");
    }
    // Convert the binary octet to a decimal number
    const num = parseInt(binaryOctet, 2);
    return num.toString();
};
exports.convertBinaryOctetToDecimal = convertBinaryOctetToDecimal;
