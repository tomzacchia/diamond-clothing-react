import userActionsTypes from './user.types';

export const setCurrentUser = user => {
  return {
    type: userActionsTypes.SET_CURRENT_USER,
    payload: user
  };
};

export const signUserOut = () => {
  return {
    type: userActionsTypes.SIGN_OUT_USER
  };
};

export const googleSignInStart = () => ({
  type: userActionsTypes.GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = user => ({
  type: userActionsTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const googleSignInFail = error => ({
  type: userActionsTypes.GOOGLE_SIGN_IN_FAIL,
  payload: error
});

export const emailSignInStart = emailAndPassword => ({
  type: userActionsTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const emailSignInSuccess = user => ({
  type: userActionsTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user
});

export const emailSignInFail = error => ({
  type: userActionsTypes.EMAIL_SIGN_IN_FAIL,
  payload: error
});
