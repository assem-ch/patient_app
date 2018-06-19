import { UPDATE_LOGIN_INFO, REHYDRATE, UPDATE_PROFILE } from '../config/Constants';

const defaultState = {
  uid: undefined,
  address: {
    street: undefined,
    zipCode: undefined,
    city: undefined,
  },
  proche: {
    name: undefined,
    email: undefined,
  },
  doctors: [],
  name: undefined,
  phone: undefined,
  email: undefined,
  maladies: {
    name: undefined,
    description: undefined,
  },
  isLogged: false,
  reHydrated: false,
  created_at: undefined,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN_INFO:
      return {
        ...state,
        uid: action.uid,
        email: action.email,
        isLogged: action.isLogged,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        ...action.data,
      };
    case REHYDRATE:
      return {
        ...state,
        ...action.payload.auth, // update the user form asyncStorage
        reHydrated: true,
      };
    default:
      return state;
  }
}