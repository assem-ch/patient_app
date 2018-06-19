import { UPDATE_DOCTORS } from '../config/Constants';

const defaultState = {
  doctors: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_DOCTORS:
      return {
        ...state,
        doctors: action.doctors,
      };
    default:
      return state;
  }
};
