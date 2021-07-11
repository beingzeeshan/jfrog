import update from 'immutability-helper';
import initialState from '../initialState';

const ssoReducer = (state = initialState.sso, action) => {
	switch (action.type) {
		case 'Sso/Login': {
            const newState = update(state, { $set: action.payload });
			return newState;
		}
		default: {
			return state;
		}
	}
};

export default ssoReducer;