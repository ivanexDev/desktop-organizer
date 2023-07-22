import colors from 'colors';
import { readdir, rename } from "node:fs/promises"

const moverArchivo = async(originFile,username,destino)=>{

    const filesOnFolder = await readdir(`/Users/${username}/Desktop/archivos-ordenados/${destino}`)
    let count = filesOnFolder.length

    for (const file of filesOnFolder) {
        if(originFile === file){
    console.log("Un archivo con el mismo nombre ya existe en la carpeta, se hara una copia con otro nombre".red)
    console.log(`El archivo ${colors.yellow(originFile)} ha sido movido`);
    rename(`/Users/${username}/Desktop/${originFile}`, `/Users/${username}/Desktop/archivos-ordenados/${destino}/copia-${originFile}`)

        } else{
            count--
        }
    }

    if(count === 0){
    console.log(`El archivo ${colors.yellow(originFile)} ha sido movido`);
    rename(`/Users/${username}/Desktop/${originFile}`, `/Users/${username}/Desktop/archivos-ordenados/${destino}/${originFile}`)

    }



}


export default moverArchivo;



