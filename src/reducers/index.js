import {combineReducers} from 'redux';
import tasks from './Task';

const myReducer = combineReducers({
    tasks
});

export default myReducer;