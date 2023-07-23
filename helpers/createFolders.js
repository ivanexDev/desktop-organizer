import { mkdir } from "node:fs/promises";

const createFolders = async (rute)=>{
    try {
        const ruteNames = [ "imagenes", "videos", "documentos", "otros"]

        const rute = async (rutename)=>{
           await mkdir(`${rute}/${rutename}`, { recursive: true }, (err) => {
                if (err) throw err;
              }); 
        }

        // Crea la ruta principal
        await mkdir(`${rute}/archivos-ordenados/`, { recursive: true }, (err) => {
            if (err) throw err;
          }); 


          for(const rutename of ruteNames){
            await rute(rutename)
          }

    } catch (error) {
        console.log(error);
    }
}
export default createFolders;