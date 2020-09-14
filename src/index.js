import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AddSubscriber from './AddSubscriber';
import registerServiceWorker from './registerServiceWorker';

import serviceWorker from './serviceWorker';
import './common/common.css';


ReactDOM.render(<p>AddSubscriber</p>,document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
