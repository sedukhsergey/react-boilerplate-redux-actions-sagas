import { all } from 'redux-saga/effects';

import { watchUsers } from 'sagas/user';

export default function* rootSaga() {
    yield all([
        watchUsers()
    ]);
}
