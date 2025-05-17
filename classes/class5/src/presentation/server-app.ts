interface runOptions {
    base:number;
    limit:number;
}

export class ServerApp {
    static run(options:runOptions){
        console.log("Server running")
        console.log({options})
    }
}