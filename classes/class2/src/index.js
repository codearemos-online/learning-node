const {makeGetUser} = require("./06-factory-function")
const {getAge,uuidv4} = require("../plugins");

const adapterGetUser = makeGetUser(getAge,uuidv4);

const getUser = adapterGetUser({
    name:"Diego",
    lastname:"Beltran",
    birthdate:"1996-03-27"

})

console.log(getUser)