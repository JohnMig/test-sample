import { GET_USERS } from './types'
import axios from 'axios'

export const getUsers = () => async (dispatch) => {
  try {
    const response = await axios.get('https://reqres.in/api/users') // Oophs sorry, it's /users
    const users = await response.data

    dispatch({
      type: GET_USERS,
      payload: { users }
    })
  } catch (e) {}
}
