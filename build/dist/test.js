"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = __importDefault(require("./main"));
const mt = new main_1.default();
mt.setDataset([1, 2, 3]);
console.log(mt.getDataset());
console.log(mt.mean());
