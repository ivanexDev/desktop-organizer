"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveFiles = void 0;
const fs_1 = __importDefault(require("fs"));
const colors_1 = require("../../plugins/colors");
const getFileCategory_1 = require("../../helpers/getFileCategory");
const path_1 = __importDefault(require("path"));
class MoveFiles {
    execute({ currentPath }) {
        try {
            let noExtensionOnCategoryMessage = "";
            const files = fs_1.default.readdirSync(currentPath).filter(file => {
                return !file.startsWith('.') && path_1.default.extname(file) !== '';
            });
            for (const file of files) {
                const folderName = (0, getFileCategory_1.getFileCategory)(file);
                const oldPath = `${currentPath}/${file}`;
                const newPath = `${currentPath}/archivos-ordenados/${folderName}/${file}`;
                if (!folderName) {
                    noExtensionOnCategoryMessage += `La extension del archivo ${colors_1.color.red(file)} no existe en ninguna categoria\n`;
                    //   console.log(`La extension de este archivo ${color.yellow(file)} no existe en ninguna categoria`);
                    continue;
                }
                fs_1.default.renameSync(oldPath, newPath);
                console.log(`El archivo ${colors_1.color.yellow(file)} ha sido movido`);
            }
            console.log(noExtensionOnCategoryMessage);
            return true;
        }
        catch (error) {
            console.log(`error`);
            return false;
        }
    }
}
exports.MoveFiles = MoveFiles;
