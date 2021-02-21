import {combineReducers} from 'redux';
import tasks from './Task';
import uiLoader from './uiLoader';

const myReducer = combineReducers({
    tasks,
    uiLoader
});

export default myReducer;