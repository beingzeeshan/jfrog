import update from "immutability-helper";
import initialState from "../initialState";

const customerReducer = (state = initialState.customer, action) => {
	switch (action.type) {
		case "Customer/LoadAll": {
			const newState = update(state, {
				customers: { $set: action.payload },
			});
			return newState;
		}
		case "Customer/SingleSelect": {
			const newState = update(state, { selected: { $set: action.payload } });
			return newState;
		}
		case "Customer/Add": {
			const newState = update(state, {
				customers: { $push: [action.payload] },
			});
			return newState;
		}
		default: {
			return state;
		}
	}
};

export default customerReducer;
