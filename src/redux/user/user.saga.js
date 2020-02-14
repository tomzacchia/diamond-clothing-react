import { takeLatest, put, all, call } from 'redux-saga/effects';

import userActionsTypes from './user.types';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from '../../firebase/firebase.utils';
import {
  signInSuccess,
  signInFail,
  signOutSuccess,
  singOutFail
} from './user.actions';

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

export function* isUserAuthenticated() {
  try {
    const authenticatedUser = yield getCurrentUser();

    if (!authenticatedUser) return;

    yield getUserSnapshot(authenticatedUser);
  } catch (error) {
    yield put(signInFail(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(singOutFail());
  }
}

export function* signUpUser({ payload }) {
  try {
    const { email, password } = payload;

    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    // yield getUserSnapshot(user);
  } catch (error) {
    yield put();
  }
}

export function* googleSignInSaga() {
  yield takeLatest(userActionsTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmailSaga() {
  yield takeLatest(userActionsTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* verifyLoggedInUserSaga() {
  yield takeLatest(userActionsTypes.VERIFY_LOGGED_IN_USER, isUserAuthenticated);
}

export function* signOutSaga() {
  yield takeLatest(userActionsTypes.SIGN_OUT_START, signOut);
}

export function* signUpSaga() {
  yield takeLatest(userActionsTypes.SIGN_UP_START, signUpUser);
}

export function* userSagas() {
  yield all([
    call(googleSignInSaga),
    call(signInWithEmailSaga),
    call(verifyLoggedInUserSaga),
    call(signOutSaga),
    call(signUpSaga)
  ]);
}
