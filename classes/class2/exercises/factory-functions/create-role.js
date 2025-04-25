const createRole = (name) => {
    return {
        havePermissions(){
            return name == "admin" ? ['create','read','update','delete'] : ['read'];
        }
    }
}

module.exports = {
    createRole
}