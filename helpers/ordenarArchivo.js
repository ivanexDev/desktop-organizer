import { readdir } from "node:fs/promises"
import path from "node:path";
import colors from "colors";
import fileTypes from "../data/fileTypes.js"
import moverArchivo from "./moverArchivo.js";



const ordenarArchivos = async (username) =>{



    try{
        const files = await readdir(`/Users/${username}/Desktop`)
        
        for(const file of files){
            const ext = path.extname(file)
            if(fileTypes.imagenes.includes(ext)){
                //mover a imagenes

                await moverArchivo(file,username,"imagenes")

            }else if(fileTypes.videos.includes(ext)){
                //mover a videos
                await moverArchivo(file,username,"videos")

            } else if(fileTypes.documentos.includes(ext)){
                //mover a documentos
                await moverArchivo(file,username,"documentos")

            }
        }

    }
    catch(err){
        console.log(err);
    }


}


export default ordenarArchivos;