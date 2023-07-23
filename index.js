import os from "os"
import inicio from "./helpers/inicio.js"
import end from "./helpers/end.js"
import createFolders from "./helpers/createFolders.js"
import ordenarArchivos from "./helpers/ordenarArchivo.js"
import argv from "./config/yargs.js"





const username = os.userInfo().username
const rute = argv.p
console.log(argv.p);

inicio();

// Crea la carpeta en el escritorio

await createFolders(rute).catch(err=>console.log(err))

//Lista los archivos que existen

await ordenarArchivos(rute)

await end()

