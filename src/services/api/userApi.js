import baseBackendApi from "./baseBackendApi";

export const getAllUsers = async () => {
	const response = await baseBackendApi.get(`/api/users?page=2`);
	return response.data;
};

export const getAllUsersDelayed = async (seconds) => {
	const response = await baseBackendApi.get(`/api/users?delay=${seconds}`);
	return response.data;
};
