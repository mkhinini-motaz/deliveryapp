import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from  'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default function Store(props) {
    return (
        <Provider className="App" store={store}>
            {props.children}
        </Provider>
    );
}
