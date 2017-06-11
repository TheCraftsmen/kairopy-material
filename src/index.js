import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';
import App from './App';
import ShiftSystem from './ShiftSystem'
import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from './configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const store = configureStore();

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ history }>
		  <Route path="/" component={App} />
		  <Route path="/ShiftSystem" component={ShiftSystem} />
		</Router>
	</Provider>,
  document.getElementById('root')
);
