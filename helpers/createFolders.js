import { mkdir } from "node:fs/promises";

const createFolders = async (username)=>{
    try {
        const ruteNames = [ "imagenes", "videos", "documentos", "otros"]

        const rute = (rutename)=>{
            mkdir(`/Users/${username}/Desktop/archivos-ordenados/${rutename}`, { recursive: true }, (err) => {
                if (err) throw err;
              }); 
        }

        // Crea la ruta principal
        mkdir(`/Users/${username}/Desktop/archivos-ordenados/`, { recursive: true }, (err) => {
            if (err) throw err;
          }); 


          ruteNames.forEach((rutename)=>{
            rute(rutename)
          })
    

    } catch (error) {
        console.log(error);
    }
}
export default createFolders;