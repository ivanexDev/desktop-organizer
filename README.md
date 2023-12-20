<h1 style="text-align:center">Organizador de archivos</h1>

https://github.com/ivanexDev/desktop-organizer/assets/86924510/ef0e7f7c-7ac1-4e88-bd48-ae5949c56c35

<p>La funcion es organizar archivos dependiendo de su extension
 en primer lugar crea una carpeta raiz, y dentro carpetas de imagenes, videos, documentos y otros...</p>

 <p>La carpeta otros aun esta sin funcionamiento.</p>

 <p>Para ejecutar debe descargarlo y ejecutar lo siguiente</p>

 ```bash
 npm install
 ```

 <p>Una vez instaladas las dependencias puede ejecutar la aplicacion.</p>

 ```
 node index.js -p ruta
 ```

 En "ruta" debe ir la ruta de la carpeta que se desea organizar.

 Ejemplo:

 ```
 //En Mac

 node index.js -p /Users/ivanex/Desktop

//En Windows

node index.js -p C:\Users\ivanex\Desktop
 ```

## Arbol de carpetas
```
- Archivos-organizados
    |_ Imagenes
    |_ Videos
    |_ Documentos
    |_ Otros

```
