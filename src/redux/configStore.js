import { applyMiddleware, createStore ,compose} from 'redux';
import thunk from 'redux-thunk';
import myReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';
const sagaMiddleware = createSagaMiddleware();

const configReducer = () => {
    const store = createStore(
        myReducer,
        compose(
            applyMiddleware(thunk, sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        )
    );
    sagaMiddleware.run(rootSaga);

    return store;
};

export default configReducer;