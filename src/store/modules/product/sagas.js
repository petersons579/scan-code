import { call, put, takeLatest } from 'redux-saga/effects';
import { getProduto } from '../../../configs/requests';
import types from './types';

function* getProduct(action) {
    try {
        const response = yield call(getProduto,action.payload);

        yield put({ type: types.PRODUCT_SUCCESS, payload: response.data });
    } catch (error) {
        alert('Ooops... Ocorreu um erro.');
        yield put({ type: types.PRODUCT_FAILURE });
    }
};

export default function* () {
    yield takeLatest(types.PRODUCT_SAGA, getProduct);
}