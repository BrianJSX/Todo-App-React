import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import tasks from './Task';
import uiLoader from './uiLoader';

const myReducer = combineReducers({
    tasks,
    uiLoader,
    form: formReducer
});

export default myReducer;