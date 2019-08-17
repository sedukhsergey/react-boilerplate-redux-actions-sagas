import React, { Fragment } from 'react';
import { Router, Switch } from 'react-router-dom';
import configureStore from 'store/store';
import { history } from 'utils';
import { Provider } from 'react-redux';
import { PublicRoute, PrivateRoute, Navigator } from 'components';
import { Login } from 'pages';
import endpoints from 'services/endpoints';

const store = configureStore();

function App() {
    return (
        <Fragment>
            <Provider store={store}>
                <Fragment>
                    <Router history={history}>
                        <Switch>
                            <PublicRoute path={endpoints.login} component={Login} />
                            <PrivateRoute to={endpoints.root} component={Navigator} />
                        </Switch>
                    </Router>
                </Fragment>
            </Provider>
        </Fragment>
    );
}

export default App;
