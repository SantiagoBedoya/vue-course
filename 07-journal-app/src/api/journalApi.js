import axios from 'axios';

const journalApi = axios.create({
	baseURL: 'https://vue-journal-app-c7243-default-rtdb.firebaseio.com'
});

export default journalApi;

