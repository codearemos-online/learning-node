const {v4} = require('uuid');

const uuidv4 = () => {
    return v4();
}

module.exports  = {
    uuidv4
}