import fs from "fs";

interface Options {
  currentPath: string;
  fileTypes: any;
}
export interface CreateFoldersUseCase {
  execute: ({ currentPath, fileTypes }: Options) => boolean;
}

export class CreateFolders implements CreateFoldersUseCase {
  constructor() {}

  execute({ currentPath, fileTypes }: Options) {
    try {
      const folderNames = Object.keys(fileTypes);
      fs.mkdirSync(`${currentPath}/archivos-ordenados`, { recursive: true });

      for (const name of folderNames) {
        fs.mkdirSync(`${currentPath}/archivos-ordenados/${name}`, {
          recursive: true,
        });
      }

      return true;
    } catch (error) {
      return false;
    }
  }
}
