import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchUsersSuccess, fetchUsersFail } from 'store/actions/user';
import { fetchUsersRequest } from 'services/api';

function* fetchUsers({ payload }) {
    console.log('fetchUsers payload', payload)
    try {
        const { data } = yield call(fetchUsersRequest, payload);
        console.log('data',data)
        yield put(fetchUsersSuccess(data.results))
    } catch (err) {
        yield put(fetchUsersFail(err))
    }
};

// Watchers
export function* watchUsers() {
    yield takeLatest('FETCH_USERS_START', fetchUsers);
}