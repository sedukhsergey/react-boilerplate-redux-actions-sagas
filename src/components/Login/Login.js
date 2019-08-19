import React from 'react';
import PropTypes from 'prop-types';

const Login = ({
    count,
    increment,
    decrement,
    fetchUsersStart,
}) => {
    return (
        <div>
            count {count}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={() => fetchUsersStart({ results: 10})}>Fetch</button>
        </div>
    );
};

export default Login;
