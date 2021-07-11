import update from 'immutability-helper';
import initialState from '../initialState';

const structureUIReducer = (state = initialState.uiStructure, action) => {
	switch (action.type) {
		case 'StructureUI/ToggleLeftDawerMenu': {
			const newState = update(state, {
				leftDawerOpen: { $set: action.payload }
			});
			return newState;
		}
		case 'StructureUI/ChangeAppTitle': {
			const newState = update(state, {
				appTitle: { $set: action.payload }
			});
			return newState;
		}
		default: {
			return state;
		}
	}
};

export default structureUIReducer;
