import {combineReducers} from 'redux'
import auth from './authReducer'
import token from './tokenReducer'
import users from './usersReducer'
//Reducers utiles para la pagina
export default combineReducers({
    auth,
    token,
    users
})