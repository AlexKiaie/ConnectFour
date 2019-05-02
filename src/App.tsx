import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, Route }  from 'react-router-dom';
import { createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { devToolsEnhancer } from 'redux-devtools-extension';

import './App.css';

import ViewContainer from './containers/ViewContainer';
import rootReducer from './reducers';

const App = () => {
	return (
		<Provider store={createStore(rootReducer, devToolsEnhancer({}))}>
			<Router history={createBrowserHistory()}>
				<Route path="/" component={ViewContainer} />
			</Router>
		</Provider>
	);
}

export default App;
