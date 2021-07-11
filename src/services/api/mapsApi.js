import baseBackendApi from './baseBackendApi';

export const getAllColo = async () => {
	const response = await baseBackendApi.get(`images/content/world_map.json`);
	return response;
};
