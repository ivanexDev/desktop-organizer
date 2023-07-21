import os from "os"
import { readdir, mkdir, rename } from "node:fs/promises"
import createFolders from "./helpers/createFolders.js"
import ordenarArchivos from "./helpers/ordenarArchivo.js"

const username = os.userInfo().username
console.clear()

//Crea la carpeta en el escritorio
await createFolders(username).catch(err=>console.log(err))

//Lista los archivos que existen


await ordenarArchivos(username)


