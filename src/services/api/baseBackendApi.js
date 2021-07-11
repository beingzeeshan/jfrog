import Axios from 'axios';

const urls = {
	test: `http://localhost:3334`,
	development: 'http://localhost:3000',
	production: 'http://18.117.138.156'
};

const baseBackendApi = Axios.create({
	baseURL: urls[process.env.NODE_ENV],
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
});

export default baseBackendApi;
