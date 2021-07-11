import {
	getAllCustomers,
	getSingleCustomer
} from '../../services/api/customerApi';

export function getCustomerById(customerId) {
	// use (dispatch, getState) in case you need to evaluate the state before mutates it
	// e.g: const currentState = getState();
	return async (dispatch) => {
		const response = await getSingleCustomer(customerId);
		dispatch({ type: 'Customer/SingleSelect', payload: response.data });
	};
}

export function addCustomer(customer) {
	return async (dispatch) => {
		// Call API
		// const response = await saveCustomer(customer);
		const customerFromApi = { ...customer };
		customerFromApi.avatar = 'https://reqres.in/img/faces/3-image.jpg';
		customerFromApi.id = Math.floor(Math.random() * 10000 + 1);
		dispatch({ type: 'Customer/Add', payload: customerFromApi });
	};
}

export function getCustomers() {
	// use (dispatch, getState) in case you need to evaluate the state before mutates it
	// e.g: const currentState = getState();
	return async (dispatch) => {
		const response = await getAllCustomers();
		dispatch({ type: 'Customer/LoadAll', payload: response.data });
	};
}
