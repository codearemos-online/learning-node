const {v4:uuidv4} = require("uuid")
const getAge = require("get-age")

const getUser = ({name,lastname,birthdate}) => {
    return {
        id: uuidv4(),
        name: name,
        lastname: lastname,
        age: getAge(birthdate)
    }
}

module.exports = {getUser}

