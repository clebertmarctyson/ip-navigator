import * as validation from "@/validation/index.js";
import * as conversion from "@/conversion/index.js";
import * as subnet from "@/subnet/index.js";
import * as operation from "@/operation/index.js";

export { validation, conversion, subnet, operation };

// Also export all functions individually
export * from "@/validation/index.js";
export * from "@/conversion/index.js";
export * from "@/subnet/index.js";
export * from "@/operation/index.js";

// Create a default export object
const ipNavigator = {
  ...validation,
  ...conversion,
  ...subnet,
  ...operation,
};

export default ipNavigator;
