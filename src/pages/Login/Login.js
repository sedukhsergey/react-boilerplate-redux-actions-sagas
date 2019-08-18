import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment, decrement } from 'store/actions/auth';
import { fetchUsersStart } from 'store/actions/user';

const Login = props => {
    return (
        <div>
            count {props.count}
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
            <button onClick={() => props.fetchUsersStart({ results: 10})}>Fetch</button>
        </div>
    );
};

export default connect(
    state => ({
        count: state.auth.count,
        usersList: state.user.usersList,
    }),
    {
        increment,
        decrement,
        fetchUsersStart
    }
)(Login);
