import * as validation from "./validation";
import * as conversion from "./conversion";
import * as subnet from "./subnet";
import * as operations from "./operations";

export { validation, conversion, subnet, operations };

// Also export all functions individually
export * from "./validation";
export * from "./conversion";
export * from "./subnet";
export * from "./operations";

// Create a default export object
const ipNavigator = {
  ...validation,
  ...conversion,
  ...subnet,
  ...operations,
};

export default ipNavigator;
