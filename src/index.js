import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './reducer/reducer.js';


const store = createStore(Reducer);

ReactDOM.render(
	<Provider store={ store }>
		<App/>
	</Provider>
	, document.getElementById('root'));

