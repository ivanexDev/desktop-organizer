"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileCategory = void 0;
const fileTypes_1 = require("../data/fileTypes");
const path_1 = __importDefault(require("path"));
const getFileCategory = (fileName) => {
    // const extension = fileName.slice(fileName.lastIndexOf(".")).toLowerCase();
    const ext = path_1.default.extname(fileName);
    for (const category in fileTypes_1.fileTypes) {
        if (fileTypes_1.fileTypes[category].includes(ext.toLocaleLowerCase())) {
            return category;
        }
    }
    return null;
};
exports.getFileCategory = getFileCategory;
