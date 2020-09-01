import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore,applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import createSagaMiddleware from 'redux-saga';

import './bootstrap/css/bootstrap.min.css'; // only the font 
import './css/todoStyle.css'; // body background

import  watchSaga from './sagas';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchSaga);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);