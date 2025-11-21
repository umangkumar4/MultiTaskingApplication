import {combineReducers} from 'redux';
import TodoReducer from './todoReducer.js'

const rootReducer = combineReducers({
    toListData : TodoReducer
})

export default rootReducer;