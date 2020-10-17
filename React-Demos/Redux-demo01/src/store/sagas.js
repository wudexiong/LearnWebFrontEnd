import { takeEvery, put } from 'redux-saga/effects'  
import {GET_MY_LIST} from './actionTypes'
import { getListAction } from './actionCreators'
import axios from 'axios'
function* mySaga() {
    yield takeEvery(GET_MY_LIST, getList)
}
function* getList() {
    const res = yield axios.get('https://www.easy-mock.com/mock/5f8aacbb4dc90c6644515226/todoLsit')
    const action = getListAction(res.data.data)
    yield put(action)
}
export default mySaga