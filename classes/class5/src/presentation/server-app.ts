import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface runOptions {
    name:string;
    path:string;
    base:number;
    limit:number;
}

export class ServerApp {
    static run({name,path,base,limit}:runOptions){
        const table = new CreateTable().execute({base,limit})
        const savedFile = new SaveFile().execute({fileContent:table,fileName:name,fileDestination:path})
        console.log(savedFile ? "File saved" : "File not saved")

    }
}