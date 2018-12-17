import React from 'react';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Screen from './src/screen';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(ReduxThunk)
));

const App = function () {
    return (
        <Provider store={store}>
            <Screen />
        </Provider>
    );
};

export default App;
