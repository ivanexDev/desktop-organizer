import colors from 'colors';
import { readdir, rename } from "node:fs/promises"

const moverArchivo = async(originFile,rute,destino)=>{

    const filesOnFolder = await readdir(`${rute}/archivos-ordenados/${destino}`)
    let count = filesOnFolder.length

    for (const file of filesOnFolder) {
        if(originFile === file){
    console.log("Un archivo con el mismo nombre ya existe en la carpeta, se hara una copia con otro nombre".red)
    console.log(`El archivo ${colors.yellow(originFile)} ha sido movido`);
    rename(`${rute}/${originFile}`, `${rute}/archivos-ordenados/${destino}/copia-${originFile}`)

        } else{
            count--
        }
    }

    if(count === 0){
    console.log(`El archivo ${colors.yellow(originFile)} ha sido movido`);
    rename(`${rute}/${originFile}`, `${rute}/archivos-ordenados/${destino}/${originFile}`)

    }



}


export default moverArchivo;



