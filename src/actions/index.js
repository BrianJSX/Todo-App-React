import * as Type from '../constants/ActionType';
import * as apiTasks from '../api/task';

export const actFetchTaskRequest = () => { 
    return (dispatch) => { 
        return apiTasks.getListTask().then((res) => {
            dispatch(actFetchTask(res.data));
        }).catch((error) =>  {
            console.log(error);
        })
    }
}

export const actFetchTask  = (tasks) => {
    return {
        type: Type.FETCH_TASK,
        tasks
    }
}
