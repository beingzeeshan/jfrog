import update from 'immutability-helper';
import initialState from '../initialState';

const coloReducer = (state = initialState.colo, action) => {
	switch (action.type) {
		case 'Colo/LoadAll': {
			const newState = update(state, { $set: action.payload });
			return newState;
		}
		default: {
			return state;
		}
	}
};

export default coloReducer;
