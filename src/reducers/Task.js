import * as Type from '../constants/ActionType';

const initialState = [

]; 

const tasks = (state = initialState, action) =>  {
    switch (action.type) {
        case Type.FETCH_TASK:
            state = [];
            return [...state];
        case Type.FETCH_SUCCESS:
            let {data} = action.payload;
            state = data;
            return [...state];
        case Type.FETCH_FAIL:
            return [...state];
        default:
            return [...state];
    }
};

export default tasks;