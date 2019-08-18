import { useEffect } from 'react';
import PropTypes from 'prop-types';

import endpoints from 'services/endpoints';

const Navigator = ({ history }) => {
    useEffect(() => {
        if (localStorage.getItem('role') === 'user') {
            history.push(endpoints.profile);
        } else {
            history.push(endpoints.company);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return null;
};

Navigator.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

export default Navigator;
