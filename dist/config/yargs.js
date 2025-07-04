"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.argsv = void 0;
const yargs_1 = __importDefault(require("yargs"));
exports.argsv = (0, yargs_1.default)(process.argv.slice(2))
    .option("p", {
    alias: "path",
    type: "string",
    demandOption: true,
    describe: "Ruta de la carpeta que se desea ordenar",
})
    .check((argv, options) => {
    if (!argv.p.includes("Users")) {
        throw "Debes ingresar la ruta de la carpeta que se desea ordenar";
    }
    return true;
}).parseSync();
