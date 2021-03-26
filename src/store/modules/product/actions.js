import types from './types';

export const getProduct = (codigo) => {
    return {
        type: types.PRODUCT_SAGA,
        payload: codigo
    };
};

export const clearProduct = () => {
    return {
        type: types.PRODUCT_CLEAR
    };
};