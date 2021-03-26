import React from 'react';
import { useSelector } from 'react-redux';

import { screenSelector } from '../store/modules/product/selectors';

import Product from './product';
import Home from './home';

export default function AppHome() {
    const screen = useSelector(screenSelector);

    return (
        <>
            {screen ? <Product /> : <Home />}
        </>
    );
};
