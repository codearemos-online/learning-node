interface User {
    id:number,
    name:string,
    lastname:string
}

interface UserCallback {
    (error?:string,user?:User):void
}

const users:User[] = [
    {id: 1, name: "John",lastname: "Doe"},
    {id: 2, name: "Jane",lastname: "Doe"},          
    {id: 3, name: "Jim",lastname: "Beam"},
]

export function getUserById (id:number,callback:UserCallback)
{
    const user:User | undefined = users.find(function(user){
        return user.id === id
    })

    if(!user){
        return callback(`User not found ${id}`)
    }

    if (callback) {
        return callback(undefined,user)
    }

}

