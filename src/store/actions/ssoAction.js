import { ssoAllCall } from '../../services/api/ssoApi';

export function ssoCall() {
	return async (dispatch) => {
		const response = await ssoAllCall();
		dispatch({ type: 'Sso/Login', payload: response });
	};
}