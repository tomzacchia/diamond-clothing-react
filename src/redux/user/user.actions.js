export const userActions = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  SIGN_OUT_USER: 'SIGN_OUT_USER'
};

export const SetCurrentUser = user => {
  return {
    type: userActions.SET_CURRENT_USER,
    payload: user
  };
};

export const signUserOut = () => {
  return {
    type: userActions.SIGN_OUT_USER
  };
};
