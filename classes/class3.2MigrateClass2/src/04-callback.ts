interface User {
    id:number,
    name:string,
    lastname:string
}

interface UserCallback {
    (user:User,error?:Error):void
}

const users:User[] = [
    {id: 1, name: "John",lastname: "Doe"},
    {id: 2, name: "Jane",lastname: "Doe"},          
    {id: 3, name: "Jim",lastname: "Beam"},
]

function getUserById (id:number,callback?:UserCallback)
{
    const user:User | undefined = users.find(function(user){
        return user.id === id
    })

    if(!user){
        throw new Error("User not found")
    }

    if (callback) {
        return callback(user)
    }

}

export {getUserById}