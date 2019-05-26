import React, { Fragment } from 'react';
import { Router } from 'react-router-dom';
import configureStore from 'store/';
import { history } from 'utils';
import { Provider } from 'react-redux';

const store = configureStore();

function App() {
    return (
        <Fragment>
            <Provider store={store}>
                <Fragment>
                    <Router history={history} />
                </Fragment>
            </Provider>
        </Fragment>
    );
}

export default App;
