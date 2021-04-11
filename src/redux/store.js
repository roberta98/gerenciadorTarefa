import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { taskManger } from './Reducers/taskManager';
import { user } from './Reducers/user';

const rootReducer = combineReducers({
    user: user,
    // tarefas: taskManger,
});

const store = createStore(rootReducer)


export default store