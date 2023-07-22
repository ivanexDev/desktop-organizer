import os from "os"
import inicio from "./helpers/inicio.js"
import end from "./helpers/end.js"
import createFolders from "./helpers/createFolders.js"
import ordenarArchivos from "./helpers/ordenarArchivo.js"


const username = os.userInfo().username

inicio();

//Crea la carpeta en el escritorio

await createFolders(username).catch(err=>console.log(err))

//Lista los archivos que existen

await ordenarArchivos(username)

await end()

