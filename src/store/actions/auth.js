import { createActions } from 'redux-actions';

export const { signInStart } = createActions('LOGIN_START');
export const { signInSuccess } = createActions('LOGIN_SUCCESS');
export const { signInFail } = createActions('LOGIN_FAIL');

export const { increment } = createActions({ INCREMENT: () => null });
export const { decrement } = createActions({ DECREMENT: () => null });
