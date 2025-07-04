"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFolders = void 0;
const fs_1 = __importDefault(require("fs"));
class CreateFolders {
    constructor() { }
    execute({ currentPath, fileTypes }) {
        try {
            const folderNames = Object.keys(fileTypes);
            fs_1.default.mkdirSync(`${currentPath}/archivos-ordenados`, { recursive: true });
            for (const name of folderNames) {
                fs_1.default.mkdirSync(`${currentPath}/archivos-ordenados/${name}`, {
                    recursive: true,
                });
            }
            return true;
        }
        catch (error) {
            return false;
        }
    }
}
exports.CreateFolders = CreateFolders;
