import axios from 'axios';

export const getCode = async () => {
	const response = await axios.get('http://localhost:7777/showCode');
	return response.data;
}