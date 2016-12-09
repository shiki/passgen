import {
  GENERATE_PASSWORD_START,
  GENERATE_PASSWORD_SUCCESS,
  GENERATE_PASSWORD_ERROR,
  UPDATE_PASSWORD 
} from './constants';

const defaultState = {
  password: 'correct horse battery staple',
  isGenerating: false
};

export default function generator(state = defaultState, action) {
  switch (action.type) {
    case GENERATE_PASSWORD_START:
      return {
        ...state, 
        isGenerating: true
      }
    case GENERATE_PASSWORD_SUCCESS:
      const password = action.payload.value
      return {
        ...state,
        password,
        isGenerating: false
      }
    case GENERATE_PASSWORD_ERROR:
      return {
        ...state,
        isGenerating: false
      }
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
