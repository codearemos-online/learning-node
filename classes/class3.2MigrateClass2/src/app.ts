import { makeGetUser } from "./06-factory-function"
import { getAge, uuidv4 } from "./plugins"

const getUser = makeGetUser(getAge, uuidv4)

console.log(getUser({name: "John", lastname: "Doe", birthdate: "1996-03-27"}))

