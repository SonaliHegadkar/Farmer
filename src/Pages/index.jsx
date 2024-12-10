import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Harvest from './Harvest';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Harvest />, document.getElementById('root'));
registerServiceWorker();
