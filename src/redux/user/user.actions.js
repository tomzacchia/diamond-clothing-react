import userActionsTypes from './user.types';

export const signOutUser = () => ({
  type: userActionsTypes.SIGN_OUT_USER
});

export const googleSignInStart = () => ({
  type: userActionsTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = emailAndPassword => ({
  type: userActionsTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signInSuccess = user => ({
  type: userActionsTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFail = error => ({
  type: userActionsTypes.SIGN_IN_FAIL,
  payload: error
});
