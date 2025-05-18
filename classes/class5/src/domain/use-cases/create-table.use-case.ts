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
        let content = '';
        for (let i = 1; i <= limit; i++) {
            content += `${base} X ${i} = ${i * base}`;
            if(i < limit) content += `\n`
        }

        return content;
    }
}