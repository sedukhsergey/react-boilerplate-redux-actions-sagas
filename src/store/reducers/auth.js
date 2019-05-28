import { handleActions } from 'redux-actions';
import * as authActions from 'store/actions';

const initialState = {
    user: null,
    loading: false,
    error: null,
    count: 0,
};

const auth = handleActions(
    {
        [authActions.signInStart]: state => ({ ...state, loading: true }),
        [authActions.signInSuccess]: (
            state,
            {
                payload: {
                    data: { user },
                },
            }
        ) => ({ ...state, user }),
        [authActions.signInFail]: (state, { payload: error }) => ({ ...state, error }),
        [authActions.increment]: state => ({ ...state, count: state.count + 1 }),
        [authActions.decrement]: state => ({ ...state, count: state.count - 1 }),
    },
    initialState
);

export default auth;
