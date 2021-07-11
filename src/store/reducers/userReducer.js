import update from 'immutability-helper';
import initialState from '../initialState';

const userReducer = (state = initialState.user, action) => {
	switch (action.type) {
		case 'User/OnLogin': {
			// TODO: API integration
			const newState = update(state, { $set: action.payload });
			return newState;
		}
		case 'User/OnLogout': {
			const newState = update(state, { $set: initialState.user });
			return newState;
		}
		case 'User/OnExpires': {
			const newState = update(state, {
				sessionId: { $set: '' },
				lastUrl: { $set: action.payload.lastUrl }
			});
			return newState;
		}
		default: {
			return state;
		}
	}
};

export default userReducer;
