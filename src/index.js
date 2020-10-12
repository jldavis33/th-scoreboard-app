import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Provider from './components/Context';
import './index.css';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  
  document.getElementById('root')
);
