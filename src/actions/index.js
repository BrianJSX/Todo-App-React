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
