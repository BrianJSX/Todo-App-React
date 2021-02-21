import {fork, take, call, put, delay} from 'redux-saga/effects';
import * as Type from '../constants/ActionType';
import { getListTask } from '../api/task';
import {actFetchTaskSuccess, actFetchTaskFail, actShowLoading, actHiddenLoading} from '../actions/index';

function* watchFetchListTaskAction() {
    while(true){
        yield take(Type.FETCH_TASK);
        yield put(actShowLoading());
        const resp = yield call(getListTask);
        const {status, data} = resp;
        if(status === 200) { 
            yield put(actFetchTaskSuccess(data));
        } else { 
            yield put(actFetchTaskFail(data));
        }
        yield delay(2000);
        yield put(actHiddenLoading());
    }
} 

function* watchCreateTaskAction() {

}   

function* rootSaga() { 
    yield fork(watchFetchListTaskAction);
    yield fork(watchCreateTaskAction);
}

export default rootSaga;