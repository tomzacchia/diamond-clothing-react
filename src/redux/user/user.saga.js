import { takeLatest, put, all, call } from 'redux-saga/effects';

import userActionsTypes from './user.types';

import {
  auth,
  googleProvider,
  createUserProfileDocument
} from '../../firebase/firebase.utils';
import { signInSuccess, signInFail } from './user.actions';

export function* getUserSnapshot(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();

    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    put(signInFail(error.message));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);

    yield getUserSnapshot(user);
  } catch (error) {
    put(signInFail(error.message));
  }
}

export function* signInWithEmail({ payload }) {
  try {
    const { email, password } = payload;

    const { user } = yield auth.signInWithEmailAndPassword(email, password);

    yield getUserSnapshot(user);
  } catch (error) {
    put(signInFail(error.message));
  }
}

export function* googleSignInSaga() {
  yield takeLatest(userActionsTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmailSaga() {
  yield takeLatest(userActionsTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
  yield all([call(googleSignInSaga), call(signInWithEmailSaga)]);
}
