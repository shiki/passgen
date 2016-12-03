import {
  GENERATE_PASSWORD_SUCCESS,
  GENERATE_PASSWORD_ERROR,
  UPDATE_PASSWORD 
} from './constants';

const defaultState = {
  password: 'correct horse battery staple',
};

export default function generator(state = defaultState, action) {
  switch (action.type) {
    case GENERATE_PASSWORD_SUCCESS:
      const password = action.payload.value
      return {
        ...state,
        password
      }
    case GENERATE_PASSWORD_ERROR:
      // TODO
      return state
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload.value
      }
    default: {
      return state;
    }
  }
}
