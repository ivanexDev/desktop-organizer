import { readdir, rename } from "node:fs/promises"
import path from "node:path";
import colors from "colors";
import fileTypes from "../data/fileTypes.js"






// const imagenes = [".webp",".png",".jpg",".jpeg",".gif",".svg"]
// const videos = [".mp4",".mov",".avi",".flv",".wmv",".webm",".mkv"]
// const documentos = [".pdf",".docx",".doc",".txt",".ppt",".pptx",".xls",".xlsx",".odt",".ods",".odp",".odg",".odf",".odc",".odf",".odf",".odf",".rtf"]


const moverArchivo = async(file,username,destino)=>{

    console.log(`El archivo ${colors.yellow(file)} ha sido movido`);
    rename(`/Users/${username}/Desktop/${file}`, `/Users/${username}/Desktop/archivos-ordenados/${destino}/${file}`)

}

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