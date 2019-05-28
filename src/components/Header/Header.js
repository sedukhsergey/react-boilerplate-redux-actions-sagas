import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement } from 'store/actions/auth';

const Header = props => {
    const { count } = props;
    return (
        <div>
            <button onClick={props.increment} type='button'>increment</button>
            <button onClick={props.decrement} type='button'>decrement</button>
            <div>{count}</div>
        </div>
    );
};

Header.propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
};
export default connect(
    state => ({
        count: state.auth.count,
    }),
    {
        increment,
        decrement,
    }
)(Header);
