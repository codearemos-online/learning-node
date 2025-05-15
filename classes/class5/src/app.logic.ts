import fs from "fs"
import { yarg } from './pugins/yargs.plugin'

fs.write

const table = yarg.b;

let content = `
==============================
Tabla del ${table}
============================== 
`;
for(let i = 0; i <= yarg.l; i++){
    content += `${table} X ${i} = ${i * table}\n`;
}

const outputPath = "outputs/";
fs.mkdirSync(outputPath,{recursive:true})
fs.writeFileSync(`${outputPath}/tabla-${table}.txt`,content) 