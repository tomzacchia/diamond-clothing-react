import { takeLatest, put, all, call } from 'redux-saga/effects';

import userActionTypes from '../user/user.types';
import { emptyCart } from './cart.actions';

export function* emptyCartOnSigOut() {
  yield put(emptyCart());
}

export function* signOutSuccessSaga() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, emptyCartOnSigOut);
}

export function* cartSagas() {
  //   yield all[call(signOutSuccessSaga)];
  yield all([call(signOutSuccessSaga)]);
}
