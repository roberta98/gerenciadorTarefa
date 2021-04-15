import { combineReducers } from 'redux'
import userReducer from './user'
import taskReducer from './taskManager'

const rootReducer = combineReducers({
    userReducer
})

export default rootReducer