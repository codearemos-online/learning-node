const { uuidv4 } = require("../plugins/get-uuid.plugin")
const { getAge } = require("../plugins/get-age.plugin")

const getUser = ({name,lastname,birthdate}) => {
    return {
        id: uuidv4(),
        name: name,
        lastname: lastname,
        age: getAge(birthdate)
    }
}

module.exports = {getUser}

