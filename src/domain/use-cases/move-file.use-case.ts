import fs from "fs";
import { color } from "../../plugins/colors";
import { getFileCategory } from "../../helpers/getFileCategory";
import path from "path";

interface MoveFilesUseCase {
  execute: (options: Options) => boolean;
}
interface Options {
  currentPath: string;
}

export class MoveFiles implements MoveFilesUseCase {
  execute({ currentPath }: Options) {
    try {
      let noExtensionOnCategoryMessage = ""
      const files = fs.readdirSync(currentPath).filter(file => {
        return !file.startsWith('.') && path.extname(file) !== '';
      });

      for (const file of files) {
        const folderName = getFileCategory(file);
        const oldPath = `${currentPath}/${file}`;
        const newPath = `${currentPath}/archivos-ordenados/${folderName}/${file}`;

        if (!folderName) {
          noExtensionOnCategoryMessage += `La extension del archivo ${color.red(file)} no existe en ninguna categoria\n`;
          //   console.log(`La extension de este archivo ${color.yellow(file)} no existe en ninguna categoria`);
          continue;
        }
        fs.renameSync(oldPath, newPath);
        console.log(`El archivo ${color.yellow(file)} ha sido movido`);
      }
      console.log(noExtensionOnCategoryMessage)
      return true;
    } catch (error) {
      console.log(`error`);
      return false;
    }
  }
}
