import React, { Fragment } from 'react';
import { Router } from 'react-router-dom';
import configureStore from 'store/store';
import { history } from 'utils';
import { Provider } from 'react-redux';
import { Header } from 'components';

const store = configureStore();

function App() {
    return (
        <Fragment>
            <Provider store={store}>
                <Fragment>
                    <Router history={history}>
                        <Header />
                    </Router>
                </Fragment>
            </Provider>
        </Fragment>
    );
}

export default App;
