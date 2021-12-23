import ACTIONS from './index'
import axios from 'axios'
//Acciónes para todos los uaurios.
export const fetchAllUsers = async (token) => {
    const res = await axios.get('/user/all_infor', {
        headers: {Authorization: token}
    })
    return res
}

export const dispatchGetAllUsers = (res) => {
    return {
        type: ACTIONS.GET_ALL_USERS,
        payload: res.data
    }
}