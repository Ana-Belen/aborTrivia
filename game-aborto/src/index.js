import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, { history } from './store';
import { routerReducer } from 'react-router-redux';
import { Provider } from 'react-redux';

//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
//registerServiceWorker();
