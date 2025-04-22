

const makeGetUser = (getAge, uuidv4) => {
    return ({ name, lastname, birthdate }) => {
        return {
            id: uuidv4(),
            name: name,
            lastname: lastname,
            age: getAge(birthdate)
        }
    }
}



module.exports = { makeGetUser }

