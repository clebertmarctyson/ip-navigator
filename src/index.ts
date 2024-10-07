import * as validation from "./validation";
import * as conversion from "./conversion";
import * as subnet from "./subnet";
import * as operation from "./operation";

export { validation, conversion, subnet, operation };

// Also export all functions individually
export * from "./validation";
export * from "./conversion";
export * from "./subnet";
export * from "./operation";

// Create a default export object
const ipNavigator = {
  ...validation,
  ...conversion,
  ...subnet,
  ...operation,
};

export default ipNavigator;
