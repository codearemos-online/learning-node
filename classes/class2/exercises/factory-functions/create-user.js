const { getAge } = require("../../plugins")

const createUser = (name) => {
    return {
        greet(age) {
            return `Hola ${name} tienes ${getAge(age)}` 
        }
    }
}

module.exports = {
    createUser
}