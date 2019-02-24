import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Random from './Random';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Random />, document.getElementById('root'));

serviceWorker.unregister();
