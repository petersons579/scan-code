import types from './types';

const initial_state = {
    data: null,
    success: false,
    screen: false
};

export default function ProductReducer (state = initial_state, action) {

    switch (action.type) {
        case types.PRODUCT_SUCCESS:
            return {
                ...state,
                data: action.payload,
                success: true,
                screen: true
            };
        case types.PRODUCT_FAILURE:
            return {
                ...state,
                data: {},
                success: false,
                screen: false
            };
        case types.PRODUCT_CLEAR:
            return {
                ...state,
                data: {},
                success: false,
                screen: false
            };
        default:
            return state;
    }

};