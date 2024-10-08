"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.operation = exports.subnet = exports.conversion = exports.validation = void 0;
const validation = __importStar(require("./validation"));
exports.validation = validation;
const conversion = __importStar(require("./conversion"));
exports.conversion = conversion;
const subnet = __importStar(require("./subnet"));
exports.subnet = subnet;
const operation = __importStar(require("./operation"));
exports.operation = operation;
// Also export all functions individually
__exportStar(require("./validation"), exports);
__exportStar(require("./conversion"), exports);
__exportStar(require("./subnet"), exports);
__exportStar(require("./operation"), exports);
// Create a default export object
const ipNavigator = {
    ...validation,
    ...conversion,
    ...subnet,
    ...operation,
};
exports.default = ipNavigator;
