import React from 'react';
import { Redirect } from 'react-router-dom';
import endpoints from 'services/endpoints';
import { localStorage } from 'utils';

// Role authorization HOC
const withRole = (allowedRoles, props) => WrappedComponent =>
    // eslint-disable-next-line react/prefer-stateless-function
    class extends React.Component {
        render() {
            const role = localStorage.getItem('role');
            if (allowedRoles.includes(role)) {
                return <WrappedComponent {...this.props} {...props} />;
            }
            return <Redirect to={endpoints.root} />;
        }
    };

export default withRole;
