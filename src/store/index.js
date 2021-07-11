import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import initialState from './initialState';
import userReducer from './reducers/userReducer';
import uiStructureReducer from './reducers/uiStructureReducer';
import coloReducer from './reducers/coloReducer';
import ssoReducer from './reducers/ssoReducer';

const loadState = () => {
	try {
		const serializedState = localStorage.getItem('@backofficeState');
		if (serializedState === null) {
			return initialState;
		}
		// return initialState;
		return JSON.parse(serializedState);
	} catch (error) {
		return null;
	}
};

const saveState = (state) => {
	const serializedState = JSON.stringify(state);
	localStorage.setItem('@backofficeState', serializedState);
};

const persistedState = loadState();

const store = createStore(
	combineReducers({
		uiStructure: uiStructureReducer,
		user: userReducer,
		colo: coloReducer,
		sso: ssoReducer,
	}),
	persistedState,
	composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
	saveState(store.getState());
});

export default store;
