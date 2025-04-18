const users = [
    {id: 1, name: "John",lastname: "Doe"},
    {id: 2, name: "Jane",lastname: "Doe"},
    {id: 3, name: "Jim",lastname: "Beam"},
]


const getUserById = (id, callback) => {
    const user = users.find(function(user){
        return user.id === id
    })
    
    if(!user){
        throw new Error("User not found")
    }

    return callback({user},null)
}

module.exports = {getUserById}
