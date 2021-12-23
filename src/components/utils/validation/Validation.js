
//Ciertas validaciones en los campos.
//Campos vacíos
export const isEmpty = value => {
    if(!value) return true
    return false
}
//Expresión regular para correos
export const isEmail = email => {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
//Tamaño de la clave
export const isLength = password => {
    if(password.length < 6) return true
    return false
}
//Concordancia entre claves
export const isMatch = (password, cf_password) => {
    if(password === cf_password) return true
    return false
}


