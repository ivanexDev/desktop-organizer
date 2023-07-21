const ordenarArchivos = async () =>{

    try{
        const files = await readdir(`/Users/${username}/Desktop`)
        files.forEach(file => {
            if(file.includes(".png")){
                console.log(`El archivo ${file} se ha movido a la carpeta archivos-ordenados`);
                
                rename(`/Users/${username}/Desktop/${file}`, `/Users/${username}/Desktop/archivos-ordenados/images/${file}`)
            }
        })
    }
    catch(err){
        console.log(err);
    }


}


export default ordenarArchivos;