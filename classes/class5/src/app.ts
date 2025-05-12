import fs from "fs"

fs.write

const table = 6;

let content = `
==============================
Tabla del ${table}
============================== 
`;
for(let i = 0; i <= 10; i++){
    content += `${i} X ${table} = ${i * table}\n`;
}

const outputPath = "outputs/";
fs.mkdirSync(outputPath,{recursive:true})
fs.writeFileSync(`${outputPath}/tabla-${table}.txt`,content) 