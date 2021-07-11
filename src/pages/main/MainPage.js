import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TopAppBar from '../../components/main/TopAppBar';
import Page404 from '../notFound/Page404';
import './main.page.scss';
import Dashboard from '../dashboard/Dashboard';

const MainPage = () => {
	const appTitle = 'Observability';
	return (
		<div className="main-container">
			<TopAppBar />
			{appTitle}
			<div className="page-container">
				<div className="page-wrapper">
					<Switch>
						<Dashboard />
						<Route path="*" component={Page404} />
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
