import React from 'react';
import { Provider } from 'react-redux';

import Store from './src/store/configureStore';

import Home from './src/pages';

export default function App() {

  return (
    <Provider store={Store} >
      <Home />
    </Provider>
  );
};
