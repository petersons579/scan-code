import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.cosmos.bluesoft.com.br'
});

export default api;