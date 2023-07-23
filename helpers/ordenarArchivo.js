import { readdir } from "node:fs/promises"
import path from "node:path";
import colors from "colors";
import fileTypes from "../data/fileTypes.js"
import moverArchivo from "./moverArchivo.js";



const ordenarArchivos = async (rute) =>{



    try{
        const files = await readdir(`${rute}`)
        
        for(const file of files){
            const ext = path.extname(file)
            if(fileTypes.imagenes.includes(ext)){
                //mover a imagenes

                await moverArchivo(file,rute,"imagenes")

            }else if(fileTypes.videos.includes(ext)){
                //mover a videos
                await moverArchivo(file,rute,"videos")

            } else if(fileTypes.documentos.includes(ext)){
                //mover a documentos
                await moverArchivo(file,rute,"documentos")

            }
        }

    }
    catch(err){
        console.log(err);
    }


}


export default ordenarArchivos;