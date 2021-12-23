import ACTIONS from './index'
import axios from 'axios'
//Acciónes para todos los uaurios.
export const fetchVaccines = async (token) => {
    const res = await axios.get('/vaccine', {
        headers: {Authorization: token}
    })
    return res
}

export const dispatchGetVaccines = (res) => {
    return {
        type: ACTIONS.GET_ALL_VACCINES,
        payload: res.data
    }
}