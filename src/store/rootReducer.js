import { combineReducers } from 'redux';

import product from './modules/product/reducers';

const rootReducer = combineReducers({
    product
});

export default rootReducer;