import * as Type from '../constants/ActionType';
import { toast } from 'react-toastify';
import { findIndex } from 'lodash';

const initialState = [

];

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case Type.FETCH_TASK:
            {
                state = [];
                return [...state];
            }
        case Type.FETCH_SUCCESS:
            {
                let { data } = action.payload;
                state = data;
                return [...state];
            }
        case Type.FETCH_FAIL:
            return [...state];
        case Type.ADD_TASK:
            return [...state];
        case Type.ADD_SUCCESS:
            {
                let { data } = action.payload;
                state.push(data);
                toast.success('Thêm task thành công');
                return [...state];
            }
        case Type.ADD_FAIL:
            {
                toast.error('Thêm task thất bại');
                return [...state];
            }
        case Type.DELETE_TASK:
            return [...state];
        case Type.DELETE_SUCCESS:
            {   
                let {id} = action.payload.data;
                let index = findIndex(state, function (o) { return o.id === id; });
                console.log(index);
                state.splice(index, 1);
                toast.success('xóa task thành công');
                return [...state];
            }
        case Type.DELETE_FAIL:
            {
                toast.error('xóa task thất bại');
                return [...state];
            }
        default:
            return [...state];
    }
};

export default tasks;