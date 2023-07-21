import os from "os"
import { readdir, mkdir, rename } from "node:fs/promises"
import createFolders from "./helpers/createFolders.js"

const username = os.userInfo().username

//Crea la carpeta en el escritorio
createFolders(username)

// Lista los archivos que existen
// try{
//     const files = await readdir(`/Users/${username}/Desktop`)
//     files.forEach(file => {
//         if(file.includes(".png")){
//             console.log(`El archivo ${file} se ha movido a la carpeta archivos-ordenados`);
            
//             rename(`/Users/${username}/Desktop/${file}`, `/Users/${username}/Desktop/archivos-ordenados/images/${file}`)
//         }
//     })
// }
// catch(err){
//     console.log(err);
// }




