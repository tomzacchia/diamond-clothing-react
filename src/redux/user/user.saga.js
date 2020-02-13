import { takeLatest, put, all, call } from 'redux-saga/effects';

import userActionsTypes from './user.types';

import {
  auth,
  googleProvider,
  createUserProfileDocument
} from '../../firebase/firebase.utils';
import { googleSignInSuccess, googleSignInFail } from './user.actions';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);

    const userRef = yield call(createUserProfileDocument, user);

    const userSnapshot = yield userRef.get();

    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    put(googleSignInFail(error.message));
  }
}

export function* googleSignInSaga() {
  yield takeLatest(userActionsTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(googleSignInSaga)]);
}
