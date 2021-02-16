import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import PhoneDirectory from './PhoneDirectory';
import './common/common.css';

ReactDOM.render(
  <React.StrictMode>
    <PhoneDirectory />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
