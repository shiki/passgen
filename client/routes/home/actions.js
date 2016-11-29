import {
  GENERATE_PASSWORD_START,
  GENERATE_PASSWORD_SUCCESS,
  GENERATE_PASSWORD_ERROR,
  UPDATE_PASSWORD
} from './constants';

export function generatePassword() {
  return (dispatch) => {
    dispatch({ type: GENERATE_PASSWORD_START })

    setTimeout(() => {
      const password =
        Math.random().toString(36).substr(7, 4) + 
        ' ' + 
        Math.random().toString(36).substr(7, 4);
      dispatch({
        type: GENERATE_PASSWORD_SUCCESS,
        payload: {
          value: password
        }
      })
    }, 3000)
  }
}

export function updatePassword(value) {
  return {
    type: UPDATE_PASSWORD,
    payload: { value }
  };
}

