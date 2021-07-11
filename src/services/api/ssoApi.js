import axios from 'axios';

export const ssoAllCall = async () => {
	const response = await axios.get("http://localhost:5000/server");
	return response;
};
