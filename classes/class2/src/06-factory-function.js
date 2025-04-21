const {v4:uuidv4} = require("uuid")
const getAge = require("get-age")

let birthdate = "1996-03-27";
const getUser = () => {
    return {
        id: uuidv4(),
        name: "John",
        lastname: "Doe",
        age: getAge(birthdate)
    }
}

module.exports = {getUser}

