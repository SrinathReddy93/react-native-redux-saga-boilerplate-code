import { createStore, combineReducers, applyMiddleware } from 'redux';
import countReducer from '../reducers/countReducer';
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/index"

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ 
    count: countReducer 
});


const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);


sagaMiddleware.run(rootSaga);

export default function configureStore() {
    return store;
}
