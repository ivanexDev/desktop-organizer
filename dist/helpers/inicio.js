"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inicio = void 0;
const colors_1 = __importDefault(require("colors"));
const inicio = () => {
    console.clear();
    console.log("-------------------------------".green);
    console.log(`=     ${colors_1.default.blue("Ordenando Archivos")}      =`);
    console.log("-------------------------------".green);
};
exports.inicio = inicio;
