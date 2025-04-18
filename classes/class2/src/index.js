const {getUserById} = require("./04-callbacks")

getUserById(4, function(error,user){
    if(error){
        return console.log(error)
    }

    console.log(`User ${user.user.name} ${user.user.lastname}`)
})


