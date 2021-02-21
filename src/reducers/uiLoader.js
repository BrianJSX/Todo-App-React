import * as UiLoading from '../constants/UiLoader';

const intialState = {
    showLoading: false,
};

const uiLoader = (state = intialState, action) =>  {
    switch (action.type) {
        case UiLoading.SHOW_LOADING:
            return {
                ...state,
                showLoading: true
            };
        case UiLoading.HIDDEN_LOADING:
            return {
                ...state,
                showLoading: false
            };
        default:
            return state;
    }
};

export default uiLoader;