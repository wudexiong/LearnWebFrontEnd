import axios from 'axios'
import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM, GET_LIST, GET_MY_LIST } from './actionTypes'
export const changeInputAction = (value) => ({
    type:CHANGE_INPUT,
    value
})
export const addItemAction = ()=>({
    type:ADD_ITEM
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})
export const getListAction = (data) => ({
    type: GET_LIST,
    data
})
export const getMyListAction = ()=>({
    type:GET_MY_LIST,
})
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5f8aacbb4dc90c6644515226/todoLsit').then(res=>{
            const action = getListAction(res.data.data)
            dispatch(action)    
        })
    }
}