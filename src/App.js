import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import verifyAuthentication from './helpers/verifyAuthentication';

import { Provider } from 'react-redux';
import store from './store';

import Login from './views/Login';
import Home from './views/Home';
import Register from './views/Register';

import NavBar from './components/NavBar';
import Tasks from './views/Tasks';

class App extends React.Component {
	state = {
		isLogged: verifyAuthentication()
	};

	render() {
		return (
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Provider store={store}>
						<Route path='/' exact component={Home} />
						<Route path='/cadastro' component={Register} />
						<Route path='/:projectId' component={Tasks} />
					</Provider>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
