import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { taskManger } from './Reducers/taskManager';
import { user } from './Reducers/user';

const rootReducer = combineReducers({
    user: user,
    // tarefas: taskManger,
});

const store = createStore(rootReducer, applyMiddleware(thunk))


export default store