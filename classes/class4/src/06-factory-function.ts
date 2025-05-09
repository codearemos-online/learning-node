const makeGetUser = (getAge: (birthdate: string) => number, uuidv4: () => string) => {
    return ({ name, lastname, birthdate }: { name: string, lastname: string, birthdate: string }) => {
        return {
            id: uuidv4(),
            name: name,
            lastname: lastname,
            age: getAge(birthdate)
        }
    }
}

export { makeGetUser }
