import userActionsTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionsTypes.GOOGLE_SIGN_IN_SUCCESS:
    case userActionsTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };

    case userActionsTypes.GOOGLE_SIGN_IN_FAILURE:
    case userActionsTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case userActionsTypes.SIGN_OUT_USER:
      return {
        ...INITIAL_STATE
      };

    default:
      return state;
  }
};

export default userReducer;
