import { argsv } from "./config/yargs";
import { fileTypes } from "./data/fileTypes";
import { ServerApp } from "./server/server";


  


async function main() {
  const currentPath = argsv.p
  ServerApp.run({currentPath, fileTypes});
}


main();