import userActionsTypes from './user.types';

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

export const verifyLoggedInUser = () => ({
  type: userActionsTypes.VERIFY_LOGGED_IN_USER
});

export const singOutStart = () => ({
  type: userActionsTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: userActionsTypes.SIGN_OUT_SUCCESS
});

export const singOutFail = error => ({
  type: userActionsTypes.SIGN_OUT_FAIL,
  payload: error
});

export const signUpStart = newUserCredentials => ({
  type: userActionsTypes.SIGN_UP_START,
  payload: newUserCredentials
});

export const signUpFail = error => ({
  type: userActionsTypes.SIGN_UP_FAIL,
  payload: error
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: userActionsTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});
