const {getUserById} = require("./05-arrow")

getUserById(3, function(error,user){
    if(error){
        return console.log(error)
    }

    console.log(`User ${user.user.name} ${user.user.lastname}`)
})


