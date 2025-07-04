import { CreateFolders } from "../domain/use-cases/create-folder.use-case";
import { MoveFiles } from "../domain/use-cases/move-file.use-case";
import { inicio } from "../helpers";

interface RunOptions {
  currentPath: string;
  fileTypes: any;
}

export class ServerApp {

  static run({ currentPath, fileTypes }: RunOptions) {
    inicio();
    const folderCreated = new CreateFolders()
      .execute({
        currentPath,
        fileTypes,
      });

    if (!folderCreated) {
      console.log("Error al crear carpetas");
      return;
    }

    const areFilesMoved = new MoveFiles()
      .execute({ 
        currentPath,
      });
      if(!areFilesMoved)console.log("No se pudo ordenar la carpeta")
      console.log("Proceso finalizado")
    
  }
}
