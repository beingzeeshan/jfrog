import React from 'react';
import PropTypes from 'prop-types';
import { Provider, useSelector } from 'react-redux';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import store from './store';
import LoginPage from './pages/login/LoginPage';
import SsoLogin from './pages/login/Ssologin';
import MainPage from './pages/main/MainPage';
import Page404 from './pages/notFound/Page404';
import MainTabs from './components/map_1/mainTabs';
import './index.scss';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const currentUser = useSelector((state) => state.user);
	return (
		<Route
			{...rest}
			render={(props) =>
				currentUser.login && currentUser.sessionId ? (
					<Component {...props} />
				) : (
					<Redirect to={currentUser.buttonClicked === 'SsoLogin' ? '/Ssologin' : '/login'} />
				)
			}
		/>
	);
};

PrivateRoute.propTypes = {
	component: PropTypes.elementType.isRequired
};

const App = () => (
	<Provider store={store}>
		<Router>
			<div className="height-100">
				<Switch>
					<Route path="/login" component={LoginPage} />
					<Route path="/Ssologin" component={SsoLogin} />
					<PrivateRoute path="/" component={MainPage} />
					<PrivateRoute path="/CapacityView" component={MainTabs} />
				<Route component={Page404} />
				</Switch>
			</div>
		</Router>
	</Provider>
);

export default App;
