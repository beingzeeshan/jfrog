import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import ErrorBoundary from '../../components/shared/ErrorBoundary';
import './login.page.scss';

const LoginPage = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const { register } = useForm();

	const onLogin = () => {
		// TODO: API integration
		dispatch({
			type: 'User/OnLogin',
			payload: {
				login: 'User Login',
				remember: true,
				sessionId: 'NRviSpoYm7mdkYB4W2471l-01',
				buttonClicked: 'login',
			}
		});
		if (user.login && user.lastUrl) {
			history.replace(user.lastUrl);
		} else {
			history.replace('/');
		}
	};
	const onSsoLogin = () => {
		dispatch({
			type: 'User/OnLogin',
			payload: {
				login: '',
				remember: false,
				sessionId: '',
				buttonClicked: 'SsoLogin',
			}
		});
		if (user.login && user.lastUrl) {
			history.replace(user.lastUrl);
		} else {
			history.replace('/');
		}
	};

	return (
		<ErrorBoundary>
			<div className="login-container">
				<div className="form-container">
					<form className="right-form">
						<div>
							<div>
								<span className="login-title-Edge">Observability</span>
							</div>
							<div className="login-span">Please login to continue</div>
						</div>
						<div className="input-container">
							<TextField
								{...register('user_name')}
								label="Username"
								className="login-designer-field"
								InputLabelProps={{
									shrink: true,
									className: 'field-label',
									id: 'field-label'
								}}
								InputProps={{ className: 'login-designer-value' }}
							/>
							<TextField
								{...register('password')}
								label="Password"
								type="password"
								className="login-designer-field password-field"
								InputLabelProps={{
									shrink: true,
									className: 'field-label',
									id: 'field-label'
								}}
								InputProps={{ className: 'login-designer-value' }}
							/>
						</div>
						<div className="login-button-container">
							<Button type="submit" className="login-button" onClick={onLogin}>
								<div className="login-text">SSO with CISCO</div>
							</Button>
							<Button
								type="submit"
								className="login-button sso-button"
								onClick={onSsoLogin}
							>
								<div className="login-text">SSO with OKTA</div>
							</Button>
						</div>
						<div className="create-account-text">Create a New Account</div>
						<div className="cisco-img-container">
						<img
								alt="Cisco"
								className="cisco-logo"
								src="images/content/Cisco_logo_blue.svg"
							/>
						</div>
					</form>
				</div>
			</div>
		</ErrorBoundary>
	);
};

export default LoginPage;
