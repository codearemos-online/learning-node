interface CreateTableUseCase{
    execute: (options:CreateTableOptions) => string;
}

interface CreateTableOptions {
    base:number;
    limit:number;
}

export class CreateTable implements CreateTableUseCase {
    constructor() {

    }

    execute({ base, limit }:CreateTableOptions) {
        let content = ` ==============================
            Tabla del ${base}
            ============================== `;
        for (let i = 0; i <= limit; i++) {
            content += `${base} X ${i} = ${i * base}\n`;
        }

        return content;
    }
}