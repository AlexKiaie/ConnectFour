import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';

import './App.css';

import ViewContainer from './containers/ViewContainer';
import rootReducer from './reducers';

class App extends Component {
	render() {
		return (
			<Provider store={createStore(rootReducer)}>
				<Router history={createBrowserHistory()}>
					<Route path="/" component={ViewContainer} />
				</Router>
			</Provider>
		);
    }
}

export default App;
