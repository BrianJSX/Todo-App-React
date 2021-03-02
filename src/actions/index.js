import * as Type from '../constants/ActionType';
import * as UiLoading from '../constants/UiLoader';

export const actFetchTaskSuccess = (data) =>  {
    return {
        type: Type.FETCH_SUCCESS,
        payload: { 
            data
        }
    };
};

export const actFetchTaskFail = (error) =>  {
    return {
        type: Type.FETCH_FAIL,
        payload: { 
            error
        }
    };
};

export const actFetchTask  = () => {
    return {
        type: Type.FETCH_TASK,
    };
};

export const actAddTask  = (task) => {
    return {
        type: Type.ADD_TASK,
        payload:  { 
            task
        }
    };
};

export const actAddTaskSuccess  = (data) => {
    return {
        type: Type.ADD_SUCCESS,
        payload: { 
            data
        }
    };
};

export const actAddTaskFail  = (error) => {
    return {
        type: Type.ADD_FAIL,
        payload :  {
            error
        }
    };
};

export const actDeleteTask = (id) =>  {
    return { 
        type: Type.DELETE_TASK,
        payload: { 
            id
        }
    };
};

export const actDeleteTaskSuccess = (data) =>  {
    return { 
        type: Type.DELETE_SUCCESS,
        payload:  {
            data
        }
    };
};

export const actDeleteTaskFail = (error) =>  {
    return { 
        type: Type.DELETE_FAIL,
        payload: { 
            error
        }
    };
};

export const actShowLoading = () => { 
    return {
        type: UiLoading.SHOW_LOADING
    };
};

export const actHiddenLoading = () => { 
    return {
        type: UiLoading.HIDDEN_LOADING
    };
};
