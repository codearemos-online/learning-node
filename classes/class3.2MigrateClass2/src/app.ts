import { getUserById } from "./04-callback"

getUserById(10,function(user,error){
 console.log(user)
})

