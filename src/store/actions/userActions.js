import { GET_USERS } from './types'

export const getUsers = () => async (dispatch) => {
  try {
    const response = await fetch('https://reqres.in/api/user')
    const users = await response.json()

    dispatch({
      type: GET_USERS,
      payload: { users }
    })
  } catch (e) {}
}
