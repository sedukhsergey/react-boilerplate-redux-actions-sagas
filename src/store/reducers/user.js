import { handleActions} from 'redux-actions';
import * as userActions from 'store/actions';

const initialState = {
    user: null,
    usersList: [],
    loading: false,
    error: null,
};

const auth = handleActions(
    {
        [userActions.fetchUsersStart]: state => ({
            ...state,
            loading: true,
        }),
        [userActions.fetchUsersSuccess]: (state, payload) => {
            return ({
                ...state,
                loading: false,
                usersList: payload.data,
            })
        },
        [userActions.fetchUsersFail]: (state, { payload: { error } }) => ({
            ...state,
            loading: false,
            error,
        }),
    },
    initialState
);

export default auth;
