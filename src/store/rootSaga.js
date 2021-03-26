import { fork, all } from 'redux-saga/effects';

import product from './modules/product/sagas';

export default function* () {
    yield all([
        fork(product)
    ]);
}