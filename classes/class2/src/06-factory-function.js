const { getAge,uuidv4 } = require("../plugins");

const getUser = ({name,lastname,birthdate}) => {
    return {
        id: uuidv4(),
        name: name,
        lastname: lastname,
        age: getAge(birthdate)
    }
}

module.exports = {getUser}

