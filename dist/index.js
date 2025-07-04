"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = require("./config/yargs");
const fileTypes_1 = require("./data/fileTypes");
const server_1 = require("./server/server");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const currentPath = yargs_1.argsv.p;
        server_1.ServerApp.run({ currentPath, fileTypes: fileTypes_1.fileTypes });
    });
}
main();
