import { connect } from "react-redux";
import { decrement, fetchUsersStart, increment } from "store/actions";
import { Login } from 'components';

export default connect(
    state => ({
        count: state.auth.count,
        usersList: state.user.usersList,
    }),
    {
        increment,
        decrement,
        fetchUsersStart,
    }
)(Login);