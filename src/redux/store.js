import thunk from 'redux-thunk';
import { taskManger } from './Reducers/taskManager';
import { user } from './Reducers/user';
import { applyMiddleware, createStore, combineReducers} from 'redux';

// const rootReducer = combineReducers({
//     user: user,
//     tarefas: taskManger,
// });

// export default createStore(rootReducer,applyMiddleware(thunk));