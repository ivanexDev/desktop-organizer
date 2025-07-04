import { fileTypes } from "../data/fileTypes";
import path from "path"

type FileCategory = keyof typeof fileTypes;

export const getFileCategory = (fileName: string)=> {
    // const extension = fileName.slice(fileName.lastIndexOf(".")).toLowerCase();

    const ext = path.extname(fileName)
    for (const category in fileTypes) {
        if (fileTypes[category as FileCategory].includes(ext.toLocaleLowerCase())) {
            return category as FileCategory;
        }
    }

    return null;
  }