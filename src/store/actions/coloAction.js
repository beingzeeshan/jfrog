import { getAllColo } from '../../services/api/mapsApi';

export function getColo() {
	return async (dispatch) => {
		const response = await getAllColo();
		dispatch({ type: 'Colo/LoadAll', payload: response });
	};
}
