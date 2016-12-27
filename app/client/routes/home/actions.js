/*eslint-env browser*/

import {
  GENERATE_PASSWORD_START,
  GENERATE_PASSWORD_SUCCESS,
  GENERATE_PASSWORD_ERROR,
  UPDATE_PASSWORD,
} from './constants'

require('isomorphic-fetch')

export const generatePassword = function generatePassword() {
  return (dispatch) => {
    dispatch({ type: GENERATE_PASSWORD_START })

    fetch('/password', {method: 'GET'})
      .then((res) => res.json())
      .then((json) => {
        const password = json.password
        dispatch({
          type: GENERATE_PASSWORD_SUCCESS,
          payload: { value: password },
        })
      })
      .catch((err) => {
        console.error('got error', err)
      })
  }
}

export const updatePassword = function updatePassword(value) {
  return {
    type: UPDATE_PASSWORD,
    payload: { value },
  }
}

