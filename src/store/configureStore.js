import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        {},
        compose(applyMiddleware(sagaMiddleware),
                window.devToolsExtension ? window.devToolsExtension() : f => f
                )
    );
    sagaMiddleware.run(rootSaga);
    return store;
}