import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddlware                       from "redux-saga";

import rootSaga    from "./sagas";
import rootReducer from "./states";

const configureStore = () => {
    let composeEnhancers        = compose;
    let reduxSagaMonitorOptions = {};

    // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
    if ( process.env.NODE_ENV !== 'production' && typeof window === 'object' ) {
        if ( window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ )
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

        // Dev Tools once it supports redux-saga version 1.x.x
        if ( window.__SAGA_MONITOR_EXTENSION__ )
            reduxSagaMonitorOptions = {
                sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
            };
    }

    const sagaMiddleware = createSagaMiddlware(reduxSagaMonitorOptions);

    const middlewares = [sagaMiddleware];
    const enhancers   = [applyMiddleware(...middlewares)];

    const store = createStore(
        rootReducer,
        composeEnhancers(...enhancers)
    );

    sagaMiddleware.run(rootSaga);

    return store;

};

export default configureStore;
