import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import heroGuesserReducer from './store/reducer/heroGuesser';
import {watchHeroGuesser} from './store/sagas/index';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    heroGuesser: heroGuesserReducer
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk,sagaMiddleware)));

sagaMiddleware.run(watchHeroGuesser);

const app = (
    <Provider store={store}>
    <div>
    <App/>
    </div>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
