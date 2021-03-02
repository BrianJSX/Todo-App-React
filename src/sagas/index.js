import { call, put, delay, takeEvery} from 'redux-saga/effects';
import * as Type from '../constants/ActionType';
import { getListTask, postListTask, deleteListTask } from '../api/task';
import * as actionTask from '../actions/index';

function* watchFetchListTaskAction() {
        yield put(actionTask.actShowLoading());
        const resp = yield call(getListTask);
        const {status, data} = resp;
        if(status === 200) { 
            yield put(actionTask.actFetchTaskSuccess(data));
        } else { 
            yield put(actionTask.actFetchTaskFail(data));
        }
        yield delay(2000);
        yield put(actionTask.actHiddenLoading());
} 
function* watchAddListTaskAction({payload}) { 
    yield put(actionTask.actShowLoading());
    const resp = yield call(postListTask, payload.task);
    const {status, data} = resp;
    if(status === 201) { 
        yield put(actionTask.actAddTaskSuccess(data));
    } else { 
        yield put(actionTask.actAddTaskFail(data));
    }
    yield delay(2000);
    yield put(actionTask.actHiddenLoading());
}

function* watchDeleteListTaskAction({payload}) { 
    yield put(actionTask.actShowLoading());
    const resp = yield call(deleteListTask, payload.id);
    const {status, data} = resp;
    if(status === 200){
        yield put(actionTask.actDeleteTaskSuccess(data));
    } else  {
        yield put(actionTask.actDeleteTaskFail(data));
    }
    yield delay(2000);
    yield put(actionTask.actHiddenLoading());
}

function* rootSaga() { 
    yield takeEvery(Type.FETCH_TASK, watchFetchListTaskAction);
    yield takeEvery(Type.ADD_TASK, watchAddListTaskAction);
    yield takeEvery(Type.DELETE_TASK, watchDeleteListTaskAction);
}

export default rootSaga;