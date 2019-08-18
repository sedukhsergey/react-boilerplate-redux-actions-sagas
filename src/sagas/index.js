import { all } from 'redux-saga/effects';

import { watchUsers } from './user';

export default function* rootSaga() {
    yield all([
        watchUsers()
    ]);
}
