import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer/reducer';

const store = createStore(reducer);

const app = (
    <Provider store={store}>
    <div>
    <App/>
    </div>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
