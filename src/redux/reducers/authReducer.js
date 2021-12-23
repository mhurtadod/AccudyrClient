import ACTIONS from '../actions/'
//Accciones para sesiones
const initialState = {
    user: [],
    isLogged: false,
    isAdmin: false
   
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTIONS.LOGIN:
            return {
                ...state,
                isLogged: true
            }
        case ACTIONS.GET_USER:
            return {
                ...state,
                user: action.payload.user,
                isAdmin: action.payload.admin
                
            }
        default:
            return state
    }
}

export default authReducer