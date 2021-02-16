import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import PhoneDirectory from './PhoneDirectory';
import './common/common.css';
import { createStore } from 'redux';
import Subscriber from './reducers';
import { Provider } from 'react-redux';

let store = createStore(
    Subscriber,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <PhoneDirectory />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
