import { userActions } from './user.actions';

const INITIAL_STATE = {
  currentUser: null
};

// state gets passed in by global Store
// every reducer receives every single action dispatched
// therefore the default case is important
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActions.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    case userActions.SIGN_OUT_USER:
      return {
        ...INITIAL_STATE
      };

    default:
      return state;
  }
};

export default userReducer;
