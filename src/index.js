import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//Redux imports

import { Provider } from 'react-redux';
import globalStore from './store/global_store';
// import thunk from 'redux-thunk'; 

ReactDOM.render(
    <Provider store={globalStore}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
