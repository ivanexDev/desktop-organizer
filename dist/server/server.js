"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerApp = void 0;
const create_folder_use_case_1 = require("../domain/use-cases/create-folder.use-case");
const move_file_use_case_1 = require("../domain/use-cases/move-file.use-case");
const helpers_1 = require("../helpers");
class ServerApp {
    static run({ currentPath, fileTypes }) {
        (0, helpers_1.inicio)();
        const folderCreated = new create_folder_use_case_1.CreateFolders()
            .execute({
            currentPath,
            fileTypes,
        });
        if (!folderCreated) {
            console.log("Error al crear carpetas");
            return;
        }
        const areFilesMoved = new move_file_use_case_1.MoveFiles()
            .execute({
            currentPath,
        });
        if (!areFilesMoved)
            console.log("No se pudo ordenar la carpeta");
        console.log("Proceso finalizado");
    }
}
exports.ServerApp = ServerApp;
