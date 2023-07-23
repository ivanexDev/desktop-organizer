import yargs from "yargs";

const argv = yargs(process.argv.slice(2))
.option("p", {
    alias: "path",
    type: "string",
    demandOption: true,
    describe: "Ruta de la carpeta que se desea ordenar",
})
.check((argv, options) => {
    if (!argv.p.includes("/Users")) {
        throw "Debes ingresar la ruta de la carpeta que se desea ordenar";
    }
    return true;
}).argv
    






    export default argv;