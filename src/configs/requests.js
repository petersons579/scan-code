import api from './api';
import key from './keyapi';

export const getProduto = async (codigo) => {
    const response = await api.get(`/gtins/${codigo}`, {
        headers: {
            'X-Cosmos-Token': key
        }
    });
    return response;
};