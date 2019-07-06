
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from "redux-saga";

import { RunSaga } from '../Sagas/RootSaga';
import RootReducer from '../Reducers';



const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    RootReducer,
    {},
    applyMiddleware(sagaMiddleware)
);


sagaMiddleware.run(RunSaga);

export default store;
