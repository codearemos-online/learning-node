const getAgeAdapter = require('get-age');

export const getAge = (birthdate:string) => {
    if(!birthdate) new Error("El birthdate es obligatorio");
   // return getAgeAdapter(birthdate);
   return new Date().getFullYear() - new Date(birthdate).getFullYear()
}

