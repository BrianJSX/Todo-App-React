import * as Type from '../constants/ActionType';

const initialState = [
]; 

const tasks = (state = initialState, action) =>  {
    switch (action.type) {
        case Type.FETCH_TASK:
            state = action.tasks;
            return [...state];
        default:
            return [...state];
    }
}

export default tasks;