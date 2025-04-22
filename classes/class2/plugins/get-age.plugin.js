const getAgeAdapter = require('get-age');

const getAge = (birthdate) => {
    if(!birthdate) new Error("El birthdate es obligatorio");
    return getAgeAdapter(birthdate);
}

module.exports = {
    getAge
}