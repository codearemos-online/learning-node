const { createUser } = require("../exercises/factory-functions/create-user");

const user = createUser("Diego")

console.log(user.greet("1996-03-27"));