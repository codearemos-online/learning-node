const createConection = () => {
    return {
        connect(){
            console.log("Conectado a la base de datos");
        },
        disconnect(){
            console.log("Desconectado de la base de datos");
        }
    }
}

module.exports = {
    createConection
}